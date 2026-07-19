# HarvestIQ

AI-Powered Crop Profit & Risk Advisor

---

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

### ORM

- Prisma ORM

### AI

- Google Gemini API

### Charts & Visualization

- Recharts

### Deployment

- Vercel

---

## Database Integration

HarvestIQ uses **Supabase PostgreSQL** as the backend database together with **Prisma ORM** for database access.

Prisma provides a type-safe and efficient way to perform database operations while Supabase hosts the PostgreSQL database in the cloud.

The Recommendation module is fully integrated with the database using RESTful CRUD APIs.

---

## Database Schema

The application currently uses the following database table:

| Field | Type | Description |
|-------|------|-------------|
| id | Integer | Primary Key |
| crop | String | Crop name |
| soil | String | Soil type |
| season | String | Growing season |
| createdAt | DateTime | Record creation timestamp |

### Schema Diagram

The Week 5 database schema diagram is included in:

```
W5_Schemacrud_26100604.pdf
```

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
│   ├── config
│   ├── prisma
│   │   └── schema.prisma
│   ├── routes
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── frontend
│
├── docs
│   └── project-plan.md
│
├── W5_Schemacrud_26100604.pdf
│
└── README.md
```

---

# Backend Setup

## Install Dependencies

```bash
cd backend
npm install
```

## Generate Prisma Client

```bash
npx prisma generate
```

## Run the Backend Server

```bash
npm start
```

The backend runs on:

```text
http://localhost:5000
```

---

# Frontend Setup

## Install Dependencies

```bash
cd frontend
npm install
```

## Run the Frontend

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:3000
```

---

## Environment Variables

Create a `.env` file inside the **backend** folder.

Example:

```env
PORT=5000

DATABASE_URL=your_database_url

DIRECT_URL=your_direct_database_url

SUPABASE_URL=your_supabase_url

SUPABASE_KEY=your_supabase_anon_key
```

> Do not upload your actual `.env` file to GitHub. Use `.env.example` instead.

---

## REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/recommendations` | Retrieve all crop recommendations |
| GET | `/api/recommendations/:id` | Retrieve recommendation by ID |
| GET | `/api/recommendations/search?crop=rice` | Search recommendations |
| POST | `/api/recommendations` | Create recommendation |
| PUT | `/api/recommendations/:id` | Update recommendation |
| DELETE | `/api/recommendations/:id` | Delete recommendation |

---

## CRUD Verification

All CRUD operations were successfully tested using Thunder Client.

Completed operations:

- Create (POST)
- Read (GET)
- Update (PUT)
- Delete (DELETE)
- Search (GET)

Verification document:

```
W5_Schemacrud_26100604.pdf
```

---

## Current Progress

### Frontend

- Landing Page
- Login Page
- Signup Page
- Dashboard
- Recommendation Page
- Reusable UI Components

### Backend

- Express.js Server
- REST API
- Full CRUD Operations
- Search API
- Prisma ORM Integration
- Supabase PostgreSQL Integration
- Database Schema
- Frontend–Backend Integration

---

## Running the Project

### Start Backend

```bash
cd backend
npm start
```

### Start Frontend

```bash
cd frontend
npm run dev
```

Open the application:

```text
http://localhost:3000
```

---

## Week 5 Achievements

- Successfully integrated Supabase PostgreSQL database
- Configured Prisma ORM
- Designed and implemented the Recommendation database schema
- Developed RESTful CRUD APIs
- Tested all CRUD operations using Thunder Client
- Generated the database schema diagram
- Completed CRUD verification documentation
