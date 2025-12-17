# AI IEC Design Validator

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)

---

AI-powered cable design validation tool using OpenAI API and IEC standards.

## Features

- Free text or JSON input for cable design specifications
- AI-based validation against IEC 60502-1 and IEC 60228 standards
- Real-time confidence scoring
- Detailed validation results with reasoning

## Tech Stack

**Frontend:** Next.js 15, React, Material-UI, TypeScript  
**Backend:** NestJS, OpenAI API (ChatGPT), TypeScript

## Setup

### Prerequisites

- Node.js 18+
- OpenAI API key ([Get one here](https://platform.openai.com/account/api-keys))

### Installation

1. Clone the repository:

```bash
git clone https://github.com/vignesh4933/AI-Design-Validator.git
cd AI-Design-Validator
```

2. Install dependencies:

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

3. Configure environment variables:

Create `backend/.env`:

```
OPENAI_API_KEY=your_api_key_here
```

### Running the Application

**Backend (port 3001):**

```bash
cd backend
npm run start:dev
```

**Frontend (port 3000):**

```bash
cd frontend
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Select input type (Free Text or JSON)
2. Enter cable design specifications
3. Click "Validate Design"
4. View validation results and AI reasoning

## Example Input

**Free Text:**

```
Cable: 10 sqmm Cu conductor, PVC 1.0mm insulation, 0.6/1 kV
```

**JSON:**

```json
{
  "voltage": "0.6/1 kV",
  "conductor": { "material": "Cu", "size": 10 },
  "insulation": { "material": "PVC", "thickness": 1.0 }
}
```

## License

MIT

