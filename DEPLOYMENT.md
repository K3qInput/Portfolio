# Netlify Deployment Instructions

## Overview
This portfolio is configured for static deployment on Netlify. The build process creates a static version of the React frontend without the backend server.

## Quick Deploy

### Option 1: Drag and Drop (Recommended for first deployment)
1. Run the build command: `node build-static.js`
2. Go to [Netlify Deploy](https://app.netlify.com/drop)
3. Drag the `dist/public` folder to the deployment area
4. Your site will be deployed with a random URL

### Option 2: Git-based Deployment (Recommended for ongoing updates)
1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Set build settings:
   - **Build command**: `node build-static.js`
   - **Publish directory**: `dist/public`
   - **Node version**: 18

## Build Configuration

The project includes:
- `netlify.toml` - Netlify configuration file
- `build-static.js` - Custom build script for static deployment
- Redirects configured for SPA routing

## Build Settings in Netlify

```
Build command: node build-static.js
Publish directory: dist/public
Node version: 18
```

## Environment Variables (if needed)
No environment variables are required for the static frontend deployment.

## Domain Configuration
After deployment, you can:
1. Use the provided Netlify domain (e.g., `amazing-site-123.netlify.app`)
2. Configure a custom domain in Netlify settings

## Troubleshooting

### Build Fails
- Ensure Node.js 18+ is being used
- Check that all dependencies are installed
- Verify the build script runs locally first

### 404 Errors on Direct Routes
- The `netlify.toml` includes SPA redirects
- All routes redirect to `index.html` with 200 status

### Images Not Loading
- Ensure all image URLs are accessible
- External images (Discord CDN) should work fine
- Local images should be in the `public` folder

## Performance Optimization
The build includes:
- Vite production optimizations
- Code splitting
- Asset optimization
- Tree shaking

Your portfolio is ready for professional deployment on Netlify!