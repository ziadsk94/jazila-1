# Cloudflare Pages Deployment Guide

This project is configured for deployment on Cloudflare Pages.

## Prerequisites

- A Cloudflare account
- Your repository hosted on GitHub, GitLab, or Bitbucket

## Deployment Steps

### 1. Connect Repository to Cloudflare Pages

1. Log in to your Cloudflare dashboard
2. Go to **Pages** → **Create a project**
3. Connect your Git repository
4. Select the repository containing this project

### 2. Configure Build Settings

Cloudflare Pages will automatically detect Next.js, but you can verify these settings:

- **Framework preset**: Next.js (auto-detected)
- **Build command**: `npm run build`
- **Build output directory**: `.next`
- **Root directory**: `/` (leave empty if project is in root)
- **Node.js version**: 20.x or latest LTS

### 3. Environment Variables

No environment variables are required for this project.

### 4. Deploy

1. Click **Save and Deploy**
2. Cloudflare Pages will build and deploy your site
3. Your site will be available at `https://your-project.pages.dev`

## Build Configuration

The project is configured with:

- **Next.js 16** with App Router
- **TypeScript** support
- **Tailwind CSS v4** for styling
- **Image optimization** via Next.js Image component
- **Static assets** in `/public/images/` folder

## Custom Domain (Optional)

1. Go to your project settings in Cloudflare Pages
2. Click **Custom domains**
3. Add your custom domain
4. Follow the DNS configuration instructions

## Notes

- Images are automatically optimized by Cloudflare's CDN
- Static assets are served from the `/public` folder
- The site is fully responsive and mobile-first
- All fonts are loaded via Next.js font optimization

## Troubleshooting

If you encounter build issues:

1. Ensure Node.js version is 20.x or higher
2. Check that all dependencies are installed: `npm install`
3. Verify the build works locally: `npm run build`
4. Check Cloudflare Pages build logs for errors

## Support

For Cloudflare Pages documentation, visit:
https://developers.cloudflare.com/pages/

