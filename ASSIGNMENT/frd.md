





Team BitByBit
PRD
Fazlul F, Eitan A, Joshua D, Fotios B, Moh P

1. Introduction & Overview
1.1 Problem Statement
Gamers lack a centralized, intelligent platform dedicated exclusively to video games, consoles, and accessories. Existing e-commerce platforms:
Are overly broad and not gamer-focused


Lack advanced personalization


Do not integrate intelligent support systems


Do not leverage AI for engagement and retention


The market opportunity is a focused, AI-enhanced gaming marketplace.
1.2 Proposed Solution
BitByBit is an e-commerce application dedicated to gamers. It allows users to:
Browse games, consoles, and accessories.


Search by platform (e.g., PlayStation, Nintendo Switch).


Add products to a cart with instant pop-out preview.


Checkout after logging in or registering.


Use a smart chatbot (powered by LangChain + RAWG API) for personalized recommendations, live player stats, and ratings
1.3 Target Audience
Primary:
Casual Gamers
Hardcore Gaming Enthusiasts 
Secondary: Parents or gift buyers seeking games or accessories with minimal effort.


2. Technology Stack
Frontend
React / React Native
Backend
Python Django (REST APIs)
MongoDB (NoSQL)
GROK
Infrastructure
Azure
MongoDB Atlas
Redis
Celery
AI Models (Open-Source)
DistilBERT – Sentiment & behavioral modeling
Mistral-7B-Instruct – Conversational chatbot
Flan-T5-Large – Email personalization


All models are free and open-source to eliminate recurring API costs. 

3. Goals & Success Metrics
3.1 Project Goals
Usability Goal: Included to use AI and all Users should be able to search for a game and add it to the cart in under 30 seconds.


Business Goal: Establish BitByBit as a go-to platform for gaming products and achieve high engagement through chatbot recommendations.


3.3 Success Metrics (KPIs) (FOR FUTURE)
Daily Active Users (DAU): Target 500+ within the first month of beta.


Cart Conversion Rate: 30% of users who add items to cart should proceed to checkout.


User Satisfaction: Maintain 4.5+ rating in app usability surveys.
AI Performance Goals
Measurable lift in engagement and revenue


Reduced operational support costs


Increased retention via personalization

4. Feature Requirements

Google OAuth 2.0 authentication


Secure payment integration


Order management and tracking


Refund workflow


Cloud deployment (AWS/Azure)


Redis caching


Celery background task processing


AI-powered personalization systems


Required Features (Core Functionality – MVP)
Homepage navigation (Games, Consoles, Accessories).


Login/Registration.


Chat with AI to get best and latest Games


Product search (name, category)


Add to cart (pop-out view with clear/remove options).


Checkout via Stripe
AI-powered personalization systems

Desired Features (Improves Usability & Appearance)
Enhanced search filters (price range, genre, release date).


Clean and responsive UI design (mobile-first).


Cart saved across sessions (user can log out and return later).


Sorting options (by popularity, rating, or price).


Simple “recommended for you” section based on trending games mostly integrated with LLM

Aspirational Features (Makes the App Stand Out)
Smart chatbot (Groq) with live stats, reviews, and recommendations.


Personalized recommendations based on browsing/purchase history.


Wishlist/Favorites.


Gamified loyalty points system for frequent buyers.



4. Out of Scope
Offline app mode.


Multi-language support (future versions only).


5. Open Questions
What is the monetization model? (Direct sales only, or commission from third-party sellers?)
