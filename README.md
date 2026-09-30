# Joshua Shalim - Full-Stack E-Commerce Portfolio

Production portfolio for a Doha-based full-stack developer working across e-commerce, web, mobile, backend integrations, workflow automation, and grounded AI systems.

**Live portfolio:** https://joshuashalimportfolio.vercel.app/

## What this repository demonstrates

- React and Next.js interface development
- TypeScript application structure
- Node.js API integration and server-side routes
- Shopify, delivery, and webhook workflow experience
- Responsive portfolio architecture and deployment on Vercel
- A live Gemini RAG assistant with embeddings, semantic retrieval, evidence filtering, grounded generation, caching, rate limiting, and transparent fallback behavior

## Featured production evidence

### FalconFlex x Shopify delivery automation

Private Node.js/Express production integration connecting Shopify with FalconFlex for carrier rates, delivery-task creation, tracking, cancellations, webhooks, order updates, and fulfillment synchronization. Operated on a Linux VPS with Git, SSH, and PM2.

### Flow Finance

Public MERN application with JWT authentication, protected user data, transaction workflows, dashboard visualizations, category suggestions, profile uploads, and spreadsheet exports.

- Live: https://myflowfinance.vercel.app/
- Frontend: https://github.com/JoshuaShalim/expense-tracker
- Backend: https://github.com/JoshuaShalim/expense-tracker-backend

### ContextForge portfolio assistant

Controlled RAG workflow that identifies a retrieval objective, generates Gemini embeddings, ranks evidence through semantic similarity, filters the selected context, and produces a grounded answer with visible sources. The planner, retrieval, verification, and answer components are orchestrated stages rather than independent autonomous agents.

## Local development

```bash
npm install
npm run dev
```

Create a local environment file when testing Gemini mode:

```env
GEMINI_API_KEY=your_key_here
```

Without a valid Gemini key, the assistant reports and uses its deterministic local retrieval fallback.

## Quality checks

```bash
npm run lint
npm run build
```

## Author

[Joshua Shalim](https://www.linkedin.com/in/joshua-shalim/) - Full-Stack E-Commerce Developer in Doha, Qatar
