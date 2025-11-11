# Cloudflare Pages Deployment

This project is configured for deployment on Cloudflare Pages.

## Build Configuration

- **Framework**: Next.js 16
- **Build Command**: `npm run build`
- **Build Output Directory**: `.next`
- **Node Version**: 20 (or latest LTS)

## Deployment Steps

1. Connect your repository to Cloudflare Pages
2. Set the build command: `npm run build`
3. Set the build output directory: `.next`
4. Cloudflare Pages will automatically detect Next.js and configure accordingly

## Environment Variables

No environment variables are required for this project.

## Notes

- Images are served from the `/public/images/` folder
- Static assets are automatically optimized by Cloudflare
- The site uses Next.js Image component for optimized image delivery

