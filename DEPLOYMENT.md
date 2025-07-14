# Netlify Deployment Guide

## Quick Setup for Netlify

1. **Push your code to GitHub**
2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git" 
   - Connect your GitHub repository

3. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
   - Node version: 18

4. **Deploy**:
   - Netlify will automatically build and deploy your site
   - You'll get a `.netlify.app` URL

## Alternative: Manual Build

If you want to build locally and drag-drop to Netlify:

```bash
# Install dependencies
npm install

# Build the static files
npm run build

# Upload the 'dist/public' folder to Netlify
```

## Custom Domain

After deployment, you can:
- Add a custom domain in Netlify dashboard
- Enable HTTPS (automatic with Netlify)
- Set up redirects if needed

## Environment Variables

No environment variables needed for the static portfolio version.

## Troubleshooting

- Make sure `dist/public` contains your built files
- Check that `index.html` is in the root of publish directory
- Verify all asset paths are relative

Your portfolio will be live at: `https://your-site-name.netlify.app`