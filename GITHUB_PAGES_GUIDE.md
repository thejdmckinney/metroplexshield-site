# 🚀 GitHub Pages Deployment Guide

## Deploy Your MetroPlex Shield Website to GitHub Pages

Since you're already using GitHub for your other sites, this is the perfect solution! GitHub Pages is **completely free** and will work great for your business website.

## 📋 **Quick GitHub Pages Setup**

### Step 1: Create GitHub Repository
1. Go to **github.com** and sign in
2. Click **"New repository"** (green button)
3. Name it: `metroplex-shield-website` (or similar)
4. Make it **Public** (required for free GitHub Pages)
5. ✅ Check **"Add a README file"**
6. Click **"Create repository"**

### Step 2: Upload Your Website Files
**Option A: Drag & Drop (Easiest)**
1. Click **"uploading an existing file"** 
2. **Drag your entire project folder** into the browser
3. **Commit changes** with message: "Initial website upload"

**Option B: GitHub Desktop (If you use it)**
1. Clone the repository to your computer
2. Copy all your website files into the folder
3. Commit and push changes

### Step 3: Enable GitHub Pages  
1. Go to **Settings** tab in your repository
2. Scroll down to **"Pages"** in the left menu
3. Under **"Source"** select **"Deploy from a branch"**
4. Choose **"main"** branch and **"/ (root)"**
5. Click **"Save"**

### Step 4: Your Site Is Live!
- GitHub will give you a URL like: `https://yourusername.github.io/metroplex-shield-website`
- **Takes 5-10 minutes** for first deployment
- **Updates go live automatically** when you push changes

## 🌐 **Custom Domain Setup (Optional)**

### If You Own metroplexshield.com:
1. In **Pages settings**, add **"metroplexshield.com"** as custom domain
2. **Update your DNS** with your domain registrar:
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   
   Type: A
   Name: @
   Values: 
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
3. GitHub automatically provides **free SSL certificate**

## ✅ **Files Ready for GitHub Pages**

Your website is already perfectly set up for GitHub Pages:
```
Repository Root:
├── index.html ← Main homepage (GitHub Pages looks for this)
├── essential-plan.html
├── guardian-plan.html  
├── premier-plan.html
├── sitemap.xml
├── robots.txt
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── metroplex-shield-logo.svg
```

## 🔧 **Pre-Deployment Updates**

Before uploading, I should update a few URLs from localhost to your live domain. Let me do that now...

## ✅ **GitHub Pages Advantages**
- ✅ **Completely free** (no monthly costs)
- ✅ **Automatic deployments** (push code = live updates)
- ✅ **Free SSL certificate** (secure https://)
- ✅ **Custom domain support** (metroplexshield.com)
- ✅ **Reliable hosting** (99.9% uptime)
- ✅ **Version control** (track all changes)
- ✅ **Easy rollbacks** (undo changes easily)

## 📱 **What Works on GitHub Pages**
- ✅ **All your HTML/CSS/JavaScript** works perfectly
- ✅ **Contact forms** (via Formspree) work great
- ✅ **Stripe payment buttons** work normally
- ✅ **Mobile responsiveness** fully functional
- ✅ **SEO optimization** works completely

## 🚀 **Deployment Process**
1. **Create repository** (2 minutes)
2. **Upload files** (3 minutes)  
3. **Enable GitHub Pages** (1 minute)
4. **Wait for deployment** (5-10 minutes)
5. **Test everything** on live site
6. **Connect custom domain** (optional)

## 🔄 **Easy Updates**
- **Edit files** in GitHub web interface, or
- **Push changes** from your computer
- **Updates go live automatically** in 1-2 minutes

## 📞 **Next Steps**
1. **Create the GitHub repository**
2. **Let me update the URLs** in your files for the live domain
3. **Upload all files** to the repository
4. **Enable GitHub Pages**
5. **Your business website is live!**

Would you like me to help update the URLs in your files so they're ready for GitHub Pages deployment?