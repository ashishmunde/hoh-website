# Deployment Guide

## Quick Deploy to Vercel (Recommended)

### Prerequisites
1. GitHub account
2. Your code pushed to a GitHub repository

### Steps:
1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to https://vercel.com
   - Sign up/Login with GitHub
   - Click "Add New Project"
   - Import your repository
   - Vercel will auto-detect settings from `vercel.json`
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

3. **Custom Domain (Optional):**
   - In Vercel dashboard → Your Project → Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

## Build Commands

Before deploying, you can test the build locally:
```bash
# Install dependencies
yarn install
# or
npm install

# Build for production
yarn build
# or
npm run build

# Preview the build
yarn preview
# or
npm run preview
```

The built files will be in the `dist` folder.

## Environment Variables

If you need to add environment variables:
- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables

## Important Notes

- Your `vercel.json` is already configured for Vue Router
- The build output goes to the `dist` folder
- All routes are redirected to `index.html` for SPA routing
