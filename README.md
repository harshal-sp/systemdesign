# System Design
### by [harshal.pro](https://harshal.pro)

A modern, comprehensive System Design & Distributed Systems knowledge platform built with [Fumadocs](https://fumadocs.dev) and Next.js Static Export, designed for high-performance hosting on Cloudflare Pages.

---

## 📚 What's Inside

- **28 Full Masterclass Chapters**: In-depth textbook architectures covering scaling from 0 to millions, distributed rate limiters, consistent hashing, distributed message queues, S3 object storage, YouTube, payment systems, and ultra-low-latency stock exchanges.
- **400 Visual Infographics**: ByteByteGo's illustrated breakdowns across 15 domains:
  - Database & Storage
  - Software Architecture
  - Cloud & Distributed Systems
  - Caching & Performance
  - API & Web Development
  - Security & Authentication
  - DevOps & CI/CD
  - Payment & Fintech
  - Real-World Case Studies (Netflix, Uber, Stripe, Discord, Figma)
- **Built-in Fast Search (`⌘K`)**: Instant client-side search across all 428 topics.
- **LLM-Ready Endpoints**: Serves `/llms.txt` and `/llms-full.txt` out of the box.
- **Static Export**: 100% pre-rendered to `out/` for instant Cloudflare Pages edge delivery.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build production static export
npm run build
```

The static site will be generated in `out/`.

---

## 🌐 Deploying to Cloudflare Pages

### Option 1: Automatic Git Deployment
1. Connect this repository on [Cloudflare Pages](https://dash.cloudflare.com/).
2. Set Build Settings:
   - **Framework Preset**: `Next.js (Static HTML Export)`
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `out`
3. Click **Save and Deploy**. Attach your custom domain under **Custom domains**.

### Option 2: Direct Wrangler CLI
```bash
npx wrangler pages deploy out --project-name systemdesign
```
