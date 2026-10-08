# Joshua Shalim — IT Support & Full-Stack Systems Portfolio

Portfolio for a Doha-based IT support and systems professional with development experience across e-commerce, web, mobile, backend integrations, and operations.

**Live portfolio:** https://joshuashalimportfolio.vercel.app/

## Current focus

- IT support, PC hardware, operating systems, networking, and remote assistance
- E-commerce operations and Shopify integrations
- React, Next.js, React Native, Node.js, Express, and databases
- Clear troubleshooting, documentation, testing, and user support

## Recent learning and achievements

- Completed LinkedIn Learning preparation coursework for **CompTIA A+ Core 1 (220-1201)** in October 2026. This is exam preparation coursework, not a CompTIA certification.
- Completed a practical **AnyDesk remote-access and file-transfer lab** across two computers.
- Continuing **PC Hardware Technician** coursework through BYU-Pathway Worldwide / Ensign College.

## Featured evidence

### FalconFlex × Shopify delivery automation

Private Node.js/Express integration connecting Shopify with FalconFlex for carrier rates, delivery-task creation, tracking, cancellations, webhooks, order updates, and fulfillment synchronization. Operated on a Linux VPS with Git, SSH, and PM2.

### Flow Finance

Public MERN application with JWT authentication, protected user data, transaction workflows, dashboard visualizations, category suggestions, profile uploads, and spreadsheet exports.

- Live: https://myflowfinance.vercel.app/
- Frontend: https://github.com/JoshuaShalim/expense-tracker
- Backend: https://github.com/JoshuaShalim/expense-tracker-backend

### Portfolio evidence assistant

A small learning prototype built into this portfolio. It searches a fixed, hand-maintained evidence set and shows its selected records. When configured, it uses Gemini embeddings and Gemini-generated answers; otherwise it uses deterministic local text-vector retrieval and returns evidence directly.

This project is intentionally described as a prototype. Its visible stages are ordinary application functions—not independent autonomous agents—and it should not be presented as a production RAG platform.

## Local development

```bash
npm install
npm run dev
```

To test Gemini mode, create a local environment file:

```env
GEMINI_API_KEY=your_key_here
```

Without a valid Gemini key, the assistant reports and uses its local retrieval fallback.

## Quality checks

```bash
npm run lint
npm run build
```

## Author

[Joshua Shalim](https://www.linkedin.com/in/joshua-shalim/) — IT Support & Full-Stack Systems, Doha, Qatar
