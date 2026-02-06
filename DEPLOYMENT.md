# Deployment Guide - Vercel

This guide will help you deploy the Laxmi Engineering Equipments website to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Your code pushed to GitHub, GitLab, or Bitbucket
3. Your domain (optional, Vercel provides a free domain)

## Step-by-Step Deployment

### 1. Prepare Your Repository

Ensure all files are committed and pushed to your repository:

```bash
git add .
git commit -m "Production ready code"
git push origin main
```

### 2. Import Project to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your Git repository
4. Vercel will auto-detect Next.js

### 3. Configure Environment Variables

In the Vercel project settings, add the following environment variable:

- **Key**: `NEXT_PUBLIC_SITE_URL`
- **Value**: Your production domain (e.g., `https://laxmiengineering.com`)

If you don't have a custom domain yet, use the Vercel-provided domain:
- **Value**: `https://your-project.vercel.app`

### 4. Build Settings

Vercel will auto-detect these settings from `vercel.json`:
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### 5. Deploy

1. Click "Deploy"
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at the provided URL

## Post-Deployment Checklist

- [ ] Update `NEXT_PUBLIC_SITE_URL` in Vercel environment variables
- [ ] Update `robots.txt` with your actual domain
- [ ] Update `sitemap.ts` with your actual domain
- [ ] Test all pages and functionality
- [ ] Verify images are loading correctly
- [ ] Test contact form (if integrated with backend)
- [ ] Check mobile responsiveness
- [ ] Verify SEO metadata

## Custom Domain Setup

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow Vercel's DNS configuration instructions
4. Update environment variables with new domain

## Performance Optimization

The site is already optimized with:
- ✅ Image optimization (Next.js Image component)
- ✅ Code splitting
- ✅ Static generation for product pages
- ✅ Compressed assets
- ✅ Minimal JavaScript bundle

## Monitoring

- Use Vercel Analytics (optional, add in project settings)
- Monitor build logs in Vercel dashboard
- Check function logs for any errors

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (should be 18+)

### Images Not Loading
- Verify image domains in `next.config.js`
- Check image URLs are accessible
- Ensure `static.wixstatic.com` is in allowed domains

### Environment Variables Not Working
- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding new variables
- Check variable names match exactly

## Support

For issues:
1. Check Vercel documentation: https://vercel.com/docs
2. Check Next.js documentation: https://nextjs.org/docs
3. Review build logs in Vercel dashboard
