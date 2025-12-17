AI Design Validator
AI-powered cable design validation tool using OpenAI API and IEC standards.

Features

Free text or JSON input for cable design specifications

AI-based validation against IEC 60502-1 and IEC 60228 standards

Real-time confidence scoring

Detailed validation results with reasoning

Tech Stack

Frontend: Next.js, React, Material-UI, TypeScript

Backend: NestJS, OpenAI API, TypeScript

Setup

Prerequisites

Node.js 18+

OpenAI API key

Installation

Clone the repository:
git clone https://github.com/vignesh4933/AI-Design-Validator.git
cd AI-Design-Validator

Install dependencies:

Backend:
cd design-validator-backend
npm install

Frontend:
cd ../design-validator-frontend
npm install

Configure environment variables:
Create design-validator-backend/.env with:
OPENAI_API_KEY=your_api_key_here

Running the Application

Backend (port 3000):
cd design-validator-backend
npm run start:dev

Frontend (port 3001):
cd design-validator-frontend
npm run dev

Open http://localhost:3001
 in your browser.

Usage

Select input type (Free Text or JSON)

Enter cable design specifications

Click Validate Design

View validation results and AI reasoning

Example Input

Free Text:
Cable: 10 sqmm Cu conductor, PVC 1.0mm insulation, 0.6/1 kV

JSON:

{
  "voltage": "0.6/1 kV",
  "conductor": { "material": "Cu", "size": 10 },
  "insulation": { "material": "PVC", "thickness": 1.0 }
}


License
MIT