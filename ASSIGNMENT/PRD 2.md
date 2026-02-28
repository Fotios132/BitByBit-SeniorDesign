# Bit-By-Bit — *GameStart* Phase 2  
## *Advanced Features, AI Integration & Deployment*

---

## Team Members
- **Fazlul H Faizal** — *Backend Developer, System Architecture Design, AI Implementation*
- **Moh Prajapati** — *Document Creator, Frontend Developer*
- **Joshua Delshad** — *Backend Developer, Team Lead, Database Management*
- **Fotios Bampouridis** — *Frontend Developer*
- **Eitan Abrishami** — *Frontend Developer*

---

## Overview
Phase 2 advances the platform from a functional e-commerce system into a secure, intelligent, production-ready gaming marketplace.

This phase introduces:
- Third-party authentication
- Payment processing
- Order management
- AI-driven game recommendation agents

The goal is to personalize user experiences and increase engagement through intelligent automation.

---

## Technology Stack (Phase 2)
- **React / React Native**
- **Python Django** *(REST APIs, business logic)*
- Authentication & order processing
- **MongoDB (NoSQL)**
- **Python-based AI agents** *(Hugging Face models)*
- **RESTful API for game metadata** *(e.g., RAWG)*
- **Django OAuth 2.0 / Google OAuth 2.0**
- Secure payment gateway integration *(sandboxed)*
- Cloud-hosted backend *(Azure AD / AWS)*
- MongoDB database services
- HTTPS & environment variables

---

## Core Enhancements

### 1. Google OAuth Authentication / Django OAuth 2.0
- Secure, password-less authentication
- Faster onboarding
- Reduced credential-related security risks

---

### 2. Payments & Order Processing
- End-to-end checkout and payment workflow
- Persistent, user-linked order history

---

### 3. Product Planning & Data Enrichment
- Structured product lifecycle management
- Metadata enrichment to support AI modeling and recommendations

---

### 4. AI Integration (Hugging Face Models)
Initial AI functionality includes sentiment analysis to understand user feedback and interactions.

**Model Used:**
- `distilbert-base-uncased-finetuned-sst-2-english`

---

## AI Agents for Game Recommendations *(Primary Focus)*
The AI recommendation system is the central innovation of Phase 2, transforming user behavior and product data into personalized game discovery.

---

### AI Capabilities
- Behavior-based analysis *(searches, views, cart activity, purchases)*
- Content-based filtering using:
  - Genres
  - Tags
  - Platforms
  - Similarity metrics
- Hybrid ranking logic combining behavioral and content signals
- Real-time adaptive recommendation updates

---

### AI Architecture
- **Inputs:**  
  Anonymized user interaction logs, product metadata, external APIs

- **Processing:**  
  Rule-based logic evolving toward ML-assisted ranking models

- **Outputs:**  
  Ranked recommendations dynamically displayed on Home and Search views

---

### Security & Ethics
- No sensitive personal data used for AI training
- Fully anonymized analytics
- Privacy-first data handling principles

---

## Future AI Expansion
- Predictive analytics for demand and trend forecasting using LLMs
- LLM-generated narrative summaries of highlighted games  
  *(e.g., game stats, popularity insights, descriptive overviews)*
