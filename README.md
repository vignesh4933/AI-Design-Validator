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


cd design-validator-backend
cd ../design-validator-frontend

npm install

npm run start:dev

npm run dev

AI-Design-Validator/
├─ backend/           # NestJS API server
├─ frontend/          # Next.js 15 React frontend
├─ services/          # AI validation services
├─ components/        # Reusable UI components
├─ README.md          # Project documentation
└─ package.json       # Project dependencies
