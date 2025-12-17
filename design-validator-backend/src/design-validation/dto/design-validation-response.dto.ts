export class ValidationItemDto {
  field: string;
  status: 'PASS' | 'WARN' | 'FAIL';
  expected: string;
  comment: string;
}

export class DesignValidationResponseDto {
  fields: Record<string, any>;
  validation: ValidationItemDto[];
  reasoning: string;
  confidence: {
    overall: number;
  };
}
