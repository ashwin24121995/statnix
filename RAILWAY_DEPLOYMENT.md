# STATNIX - Railway Deployment Guide

## Prerequisites
- Railway account (https://railway.app)
- GitHub repository with this code
- Node.js 18+ (Railway will handle this)

## Deployment Steps

### 1. Connect GitHub Repository
1. Log in to Railway dashboard
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Authorize Railway to access your GitHub account
5. Select the STATNIX repository

### 2. Configure Environment Variables
In Railway dashboard, add the following environment variables:
```
NODE_ENV=production
PORT=3000
```

### 3. Configure Build & Start Commands
Railway should auto-detect these, but verify:
- **Build Command:** `pnpm install && pnpm build`
- **Start Command:** `npm start`

### 4. Deploy
1. Railway will automatically deploy when you push to the main branch
2. Monitor the deployment logs in the Railway dashboard
3. Once deployed, you'll get a public URL

### 5. Custom Domain (Optional)
1. In Railway project settings, go to "Domains"
2. Add your custom domain (e.g., statnix.com)
3. Update DNS records according to Railway's instructions

## Project Structure
- `/client` - React frontend (Vite)
- `/server` - Express backend
- `/dist` - Built output
- `package.json` - Dependencies and scripts

## Key Technologies
- React 19
- Tailwind CSS 4
- Express.js
- TypeScript
- Vite

## Support
For issues or questions, contact: support@statnix.com

## License
MIT
