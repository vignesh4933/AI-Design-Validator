import { Injectable, InternalServerErrorException } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class DesignValidationService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async validateDesign(input: string | Record<string, any>) {
    try {
      // STEP 1: Normalize input
      const designInput =
        typeof input === 'string' ? input : JSON.stringify(input, null, 2);

      // STEP 2: Call AI (AI does ALL validation decisions)
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4o-mini',
        temperature: 0.2,
        messages: [
          {
            role: 'system',
            content: `
You are an engineering validation assistant for low-voltage cable designs.

Your task is to validate a cable design against typical IEC engineering
expectations using reasoning (not hardcoded tables).

DECISION RULES:
- PASS: clearly compliant
- FAIL: clearly unsafe or non-compliant
- WARN: missing data, assumptions required, or borderline values

You MUST evaluate EACH attribute independently.

For EACH attribute return:
- provided value (or null)
- expected engineering expectation
- PASS / WARN / FAIL
- a short comment

You MUST mark FAIL for clearly unsafe values
(e.g. insulation thickness far below LV expectations).

After attribute validation, return:
- overall reasoning (text)
- confidence score between 0 and 1

Return STRICT JSON ONLY in the format described.
Do NOT return markdown.
`,
          },
          {
            role: 'user',
            content: `
Validate the following cable design:

${designInput}

Return STRICT JSON ONLY in this format:

{
  "fields": {
    "standard": string | null,
    "voltage": string | null,
    "conductor_material": string | null,
    "conductor_class": string | null,
    "csa": number | null,
    "insulation_material": string | null,
    "insulation_thickness": number | null
  },
  "validation": [
    {
      "field": string,
      "provided": string | number | null,
      "expected": string,
      "status": "PASS" | "WARN" | "FAIL",
      "comment": string
    }
  ],
  "reasoning": string,
  "confidence": {
    "overall": number
  }
}
`,
          },
        ],
      });

      // STEP 3: Extract raw AI response
      const raw = completion.choices[0].message.content;

      if (!raw) {
        throw new Error('Empty AI response');
      }

      // STEP 4: Safely extract JSON
      let jsonText = raw;

      if (raw.includes('```')) {
        const match = raw.match(/\{[\s\S]*\}/);
        if (match) {
          jsonText = match[0];
        }
      }

      let aiResponse: any;
      try {
        aiResponse = JSON.parse(jsonText);
      } catch (err) {
        console.error('RAW AI RESPONSE:', raw);
        throw new Error('AI returned invalid JSON');
      }

      // STEP 5: Minimal structural safety (NO decision logic)
      if (!Array.isArray(aiResponse.validation)) {
        throw new Error('Invalid AI validation structure');
      }

      if (!aiResponse.reasoning) {
        aiResponse.reasoning =
          'AI did not provide explicit reasoning. Manual review recommended.';
      }

      if (
        typeof aiResponse.confidence?.overall !== 'number' ||
        aiResponse.confidence.overall < 0 ||
        aiResponse.confidence.overall > 1
      ) {
        aiResponse.confidence = { overall: 0.5 };
      }

      // STEP 6: Return AI output AS-IS (clean contract)
      return {
        fields: aiResponse.fields,
        validation: aiResponse.validation,
        reasoning: aiResponse.reasoning,
        confidence: aiResponse.confidence,
      };
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(
        'Design validation failed. Please try again.',
      );
    }
  }
}
