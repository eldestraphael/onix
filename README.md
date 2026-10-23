# Onix Data Centres

West Africa's first Uptime Institute–certified Tier IV carrier-neutral data centre in Accra, Ghana and 2Africa landing station in Dakar, Senegal.

## Features
- **Tier IV Colocation**: Accra & Dakar facility showcase with power layer diagnostics and uptime diary
- **Dynamic Asset & Base Routing**: Configured for seamless deployment to GitHub Pages (`base: './'`)
- **Single Page App Routing**: `404.html` fallback included for client-side routing on GitHub Pages
- **Interactive Tools**: Power story interactive diagram, latency comparison, facility tour booking, and cost estimator
- **Modern UI**: Tailwind CSS, Lucide icons, responsive navigation with official Onix brand assets

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build
```

## GitHub Pages Deployment
This repository is configured with an automated GitHub Actions workflow (`.github/workflows/deploy.yml`).
When you push to `main` (or `master`), GitHub Actions builds the project and deploys it to GitHub Pages.

To verify GitHub Pages is active:
1. Go to repository **Settings** > **Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Your site will automatically build and publish to `https://<your-username>.github.io/<repo-name>/`.
