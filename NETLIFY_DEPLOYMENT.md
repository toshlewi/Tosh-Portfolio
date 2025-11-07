# Netlify Deployment Guide

## Quick Start

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub and select your repository
   - Netlify auto-detects React settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy site"
   - Wait for build to complete (~2-3 minutes)

3. **Your site is live!**
   - Netlify provides a URL like: `your-site-name.netlify.app`
   - You can customize it in Site settings

### Method 2: Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Build your site
npm run build

# Deploy (first time - follow prompts)
netlify init

# Deploy to production
netlify deploy --prod
```

### Method 3: Drag & Drop

1. Build your site:
   ```bash
   npm run build
   ```

2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)

3. Drag the `build` folder onto the page

4. Your site is live instantly!

## Configuration Files

The project includes:
- `netlify.toml` - Netlify configuration
- `public/_redirects` - SPA routing support

These are already configured and ready to use!

## Environment Variables

If you need environment variables:
1. Go to Site settings → Environment variables
2. Add your variables
3. They'll be available during build

## Custom Domain

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

## Continuous Deployment

- Every push to `main` branch = automatic deployment
- Pull requests get preview deployments
- You can rollback in Deploys tab

## Build Settings

Netlify auto-detects:
- **Framework:** Create React App
- **Build command:** `npm run build`
- **Publish directory:** `build`
- **Node version:** 18.x (default)

## Troubleshooting

**Build fails:**
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

**404 errors:**
- Ensure `_redirects` file is in `public` folder
- Check `netlify.toml` configuration

**Assets not loading:**
- Use relative paths (not absolute)
- Check `public` folder contents

## Support

- Netlify Docs: https://docs.netlify.com
- Netlify Community: https://community.netlify.com

