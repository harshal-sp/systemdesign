# Cloudflare Pages Hosting Guide for Fumadocs

This site is built with **Fumadocs** and **Next.js Static Export**, producing a 100% static output directory (`out/`) that deploys directly to **Cloudflare Pages** with zero cold starts, global edge caching, and free automatic SSL/TLS on your custom domain.

---

## Option 1: Connect GitHub to Cloudflare Pages (Recommended)

1. **Commit and push this repository to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: fumadocs system design knowledge base"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```

2. **In Cloudflare Dashboard:**
   - Go to **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
   - Select your GitHub repository.
   - Configure Build Settings:
     - **Framework preset:** `Next.js (Static HTML Export)`
     - **Build command:** `npm run build`
     - **Build output directory:** `out`
   - Click **Save and Deploy**. Cloudflare will build and publish your site globally in ~30 seconds!

3. **Set Up Custom Domain:**
   - In your project, navigate to the **Custom domains** tab.
   - Click **Set up a custom domain** and enter your domain (e.g. `systemdesign.yourdomain.com` or `yourdomain.com`).
   - If your DNS is managed on Cloudflare, it automatically adds the DNS record and provisions SSL.
   - If hosted on GoDaddy, Namecheap, or AWS Route53, add a `CNAME` record pointing to `<your-project>.pages.dev`.

---

## Option 2: Direct Deployment via Wrangler CLI (No Git Required)

You can build and deploy the `out/` folder in one command:

```bash
# 1. Build the static export
npm run build

# 2. Deploy directly to Cloudflare Pages
npx wrangler pages deploy out --project-name systemdesign

# 3. Bind your custom domain
npx wrangler pages domain set systemdesign <your-domain.com>
```

---

## What makes this Fumadocs setup perfect for Cloudflare:
- **Pure Static HTML (`out/`)**: Every single one of the 428 topics is pre-rendered at build time.
- **Instant Search**: Client-side static search with keyboard shortcuts (`⌘K`).
- **Dark & Light Mode**: Clean, high-contrast theme toggle built-in.
- **Table of Contents**: Automatic heading scrollspy on every page.
- **LLM-Ready Endpoints**: Automatically publishes `/llms.txt` and `/llms-full.txt` for AI assistants.
