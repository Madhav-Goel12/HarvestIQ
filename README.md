# HarvestIQ

AI-Powered Crop Profit & Risk Advisor

## Overview

HarvestIQ is an AI-powered agricultural decision support platform designed to help farmers make informed decisions regarding crop selection, profitability, and risk management.

The platform combines weather forecasts, market price trends, government schemes, and AI-generated recommendations to improve agricultural productivity and profitability.

---

## Problem Statement

Farmers often face challenges in:

- Selecting profitable crops
- Understanding market trends
- Assessing cultivation risks
- Accessing relevant government schemes
- Obtaining timely agricultural guidance

HarvestIQ addresses these challenges through data-driven insights and AI-powered recommendations.

---

## Features

### Crop Profitability Predictor
Estimate potential crop profitability based on market trends and farming inputs.

### Crop Risk Analysis Dashboard
Analyze risks using weather conditions, seasonal patterns, and crop-specific factors.

### Market Price Tracking
Track commodity prices and historical trends.

### Government Scheme Recommendation System
Discover government schemes and subsidies based on farmer profile and requirements.

### AI Farming Assistant
Interactive chatbot that provides personalized agricultural guidance.

---

## AI Features

- AI-powered profitability prediction
- Risk assessment engine
- Personalized crop recommendations
- Intelligent government scheme matching
- Conversational farming assistant

---

## Tech Stack

### Frontend
- Next.js
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL (Supabase)

### AI
- Google Gemini API

### Charts & Visualization
- Recharts

### Deployment
- Vercel

---

## Future Enhancements

- Multi-language support
- Real-time weather integration
- Crop disease detection
- Yield prediction models
- Mobile application

---

## Project Structure

```text
HarvestIQ
│
├── backend
│
├── docs
│   └── project-plan.md
│
├── frontend
│
└── README.md
```
---

## Backend Setup

### Install Dependencies

```bash
cd backend
npm install
```

### Run the Backend Server

```bash
node server.js
```

The backend will run at:

```text
http://localhost:5000
```

---

## Frontend Setup

### Install Dependencies

```bash
cd frontend
npm install
```

### Run the Frontend

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:3000
```

---

## REST API Endpoints

| Method | Endpoint                                | Description                       |
| ------ | --------------------------------------- | --------------------------------- |
| GET    | `/api/recommendations`                  | Retrieve all crop recommendations |
| GET    | `/api/recommendations/:id`              | Retrieve a recommendation by ID   |
| GET    | `/api/recommendations/search?crop=rice` | Search recommendations by crop    |
| POST   | `/api/recommendations`                  | Create a new recommendation       |
| PUT    | `/api/recommendations/:id`              | Update an existing recommendation |
| DELETE | `/api/recommendations/:id`              | Delete a recommendation           |

---

## Current Progress

### Frontend

* Landing Page
* Login Page
* Signup Page
* Dashboard
* Recommendation Page
* Reusable UI Components

### Backend

* Express.js Server
* REST API
* CRUD Operations
* Crop Search Endpoint
* Frontend–Backend Integration

---

## Running the Project

### Start Backend

```bash
cd backend
node server.js
```

### Start Frontend

```bash
cd frontend
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```
