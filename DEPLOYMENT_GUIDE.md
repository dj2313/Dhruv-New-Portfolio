# 🚀 Deployment Guide - Dhruv's Portfolio

## Quick Deploy to Vercel (Recommended - 5 minutes)

### Step 1: Push to GitHub
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Portfolio ready for deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your portfolio repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"
7. Done! Your site will be live at `your-project.vercel.app`

### Step 3: Add Custom Domain (Optional)
1. Buy a domain (e.g., from Namecheap, GoDaddy)
2. In Vercel project settings → Domains
3. Add your domain
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-60 minutes)

---

## Alternative: Deploy to Netlify

### Option 1: Drag & Drop (Easiest)
```bash
# Build your project
npm run build

# This creates a 'dist' folder
# Go to netlify.com
# Drag the 'dist' folder to Netlify
# Done!
```

### Option 2: Git Integration
1. Push code to GitHub (same as Vercel Step 1)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub
5. Select your repository
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Click "Deploy"

---

## Alternative: GitHub Pages

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json
Add these to your `package.json`:
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Update vite.config.ts
```typescript
export default defineConfig({
  base: '/portfolio/', // Your repo name
  // ... rest of config
})
```

### Step 4: Deploy
```bash
npm run deploy
```

Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio`

---

## After Deployment Checklist

### 1. Update URLs in Code
Replace placeholder URLs with your actual deployed URL:

**File**: `index.html`
```html
<!-- Update these URLs -->
<meta property="og:url" content="https://YOUR_ACTUAL_URL/" />
<meta property="og:image" content="https://YOUR_ACTUAL_URL/og-image.jpg" />
<link rel="canonical" href="https://YOUR_ACTUAL_URL/" />
```

**File**: `public/sitemap.xml`
```xml
<!-- Update all URLs -->
<loc>https://YOUR_ACTUAL_URL/</loc>
```

**File**: `public/robots.txt`
```
Sitemap: https://YOUR_ACTUAL_URL/sitemap.xml
```

### 2. Submit to Google Search Console
1. Go to: https://search.google.com/search-console
2. Click "Add Property"
3. Enter your URL
4. Verify ownership (use HTML tag method)
5. Submit sitemap: `https://YOUR_URL/sitemap.xml`
6. Request indexing for main page

### 3. Submit to Bing Webmaster Tools
1. Go to: https://www.bing.com/webmasters
2. Add your site
3. Verify ownership
4. Submit sitemap

### 4. Test Your SEO
Run these checks:
- ✅ Google Lighthouse (in Chrome DevTools)
- ✅ [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- ✅ [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- ✅ [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### 5. Create OG Images
Create these images and place in `public/` folder:
- `og-image.jpg` (1200x630px) - For Facebook, LinkedIn
- `twitter-image.jpg` (1200x600px) - For Twitter
- `profile-image.jpg` - Your professional photo

You can use:
- Canva (free templates)
- Figma
- Photoshop

### 6. Update Social Links
Replace all `#` links with your actual profiles:

**Files to update**:
- `src/sections/HeroSection.tsx`
- `src/sections/ContactSection.tsx`

```tsx
// Replace these:
{ icon: Github, href: "#", label: "GitHub" },
{ icon: Linkedin, href: "#", label: "LinkedIn" },
{ icon: Twitter, href: "#", label: "Twitter" },

// With your actual URLs:
{ icon: Github, href: "https://github.com/YOUR_USERNAME", label: "GitHub" },
{ icon: Linkedin, href: "https://linkedin.com/in/YOUR_USERNAME", label: "LinkedIn" },
{ icon: Twitter, href: "https://twitter.com/YOUR_USERNAME", label: "Twitter" },
```

---

## Performance Optimization (Optional)

### 1. Optimize Images
```bash
# Install image optimization tool
npm install --save-dev vite-plugin-imagemin

# Or use online tools:
# - TinyPNG.com
# - Squoosh.app
```

### 2. Add Analytics
```bash
# Install Vercel Analytics
npm install @vercel/analytics

# Add to src/main.tsx:
import { Analytics } from '@vercel/analytics/react';

// In your render:
<Analytics />
```

### 3. Add Error Tracking (Optional)
```bash
# Install Sentry
npm install @sentry/react

# Follow setup at: https://sentry.io
```

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### 404 on Refresh (SPA Routing)
Add this file for Netlify:

**File**: `public/_redirects`
```
/*    /index.html   200
```

For Vercel, add:

**File**: `vercel.json`
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

### Images Not Loading
- Check image paths are correct
- Ensure images are in `public/` folder
- Use absolute paths: `/image.jpg` not `./image.jpg`

---

## Domain Setup (If Using Custom Domain)

### Recommended Domains:
- `dhruvtrivedi.dev` - $12/year
- `dhruvtrivedi.com` - $15/year
- `dhruv.dev` - Check availability

### DNS Configuration (Example for Vercel):
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## Maintenance

### Regular Updates:
- Update projects as you build new ones
- Keep dependencies updated: `npm update`
- Monitor analytics monthly
- Refresh content every 3-6 months

### Backup:
- Keep code on GitHub
- Export analytics data quarterly
- Save copies of images

---

## Cost Breakdown

### Free Tier (Recommended for Starting):
- ✅ Vercel: Free (Hobby plan)
- ✅ Netlify: Free (100GB bandwidth/month)
- ✅ GitHub Pages: Free
- ✅ GitHub: Free
- ✅ Google Search Console: Free
- ✅ Vercel Analytics: Free

### Optional Paid:
- Custom domain: $10-15/year
- Professional email: $6/month (Google Workspace)
- Premium analytics: $10-50/month (optional)

**Total to start: $0** 🎉

---

## Support

If you encounter issues:
1. Check Vercel/Netlify deployment logs
2. Test locally: `npm run build && npm run preview`
3. Check browser console for errors
4. Google the error message
5. Ask me for help!

---

## 🎉 You're Ready!

Your portfolio is production-ready. Just:
1. Push to GitHub
2. Deploy to Vercel
3. Submit to Google Search Console
4. Share on social media

Good luck! 🚀
