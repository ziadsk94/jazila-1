# Cloudflare Pages Build Configuration

## Quick Deploy Settings

When setting up your project in Cloudflare Pages dashboard, use these settings:

### Build Settings
- **Framework preset**: Next.js (auto-detected)
- **Build command**: `npm run build`
- **Build output directory**: `.next`
- **Root directory**: `/` (leave empty)
- **Node.js version**: `20` or `latest`

### Environment Variables
No environment variables required.

### Build Command Details
```bash
npm ci
npm run build
```

## What Gets Deployed

- All static assets from `/public` folder
- Optimized images from `/public/images`
- Next.js optimized JavaScript and CSS
- All fonts (Playfair Display, Lato, Cairo, Dancing Script)

## Post-Deployment

After deployment, your site will be available at:
- `https://your-project.pages.dev`

You can add a custom domain in the Cloudflare Pages dashboard under **Custom domains**.

## Notes

- The build creates a static export that works perfectly with Cloudflare Pages
- Images are automatically optimized by Cloudflare's CDN
- All routes are pre-rendered for optimal performance
- The site is fully responsive and mobile-optimized

