# IEC Design Validator

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)

---

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Usage](#installation--usage)
- [Project Structure](#project-structure)
- [License](#license)

---

## Project Overview
IEC Design Validator is an AI-powered cable design validation tool that checks cable specifications against IEC standards using the Gemini API. It automates cable compliance verification, helping engineers validate designs efficiently.

---

## Features
- Accepts free-text or JSON input for cable design specifications.  
- Validates designs against IEC 60502-1 and IEC 60228 standards.  
- Provides real-time confidence scoring.  
- Displays detailed validation results with reasoning.  

---

## Tech Stack
- **Frontend:** Next.js 15, React, Material-UI  
- **Backend:** NestJS, Node.js  
- **AI:** Gemini API (OpenAI API for design validation)  

---

## Installation & Usage
1. **Clone the repository:**  
   ```bash
   git clone https://github.com/vignesh4933/AI-Design-Validator.git


2. **Install dependencies:**

**Backend**
cd backend
npm install

markdown
Copy code

**Frontend**
cd ../frontend
npm install

markdown
Copy code

3. Create environment file (`backend/.env`) and add:
GEMINI_API_KEY=your_api_key_here

csharp
Copy code

## Running the Application

**Backend (default port 3000):**
cd backend
npm run start:dev

cpp
Copy code

**Frontend (default port 3001):**
cd frontend
npm run dev

pgsql
Copy code

Open http://localhost:3001 in your browser.

## Usage

1. Select input type (Free Text or JSON)  
2. Enter cable design specifications  
3. Click **Validate Design**  
4. View validation results and AI reasoning

## Example Input

**Free Text:**
Cable: 10 sqmm Cu conductor, PVC 1.0mm insulation, 0.6/1 kV

javascript
Copy code

**JSON:**
{
"voltage": "0.6/1 kV",
"conductor": { "material": "Cu", "size": 10 },
"insulation": { "material": "PVC", "thickness": 1.0 }
}

shell
Copy code

## License

MIT