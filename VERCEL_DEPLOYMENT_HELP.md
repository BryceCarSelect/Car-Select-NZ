# 🚀 Step-by-Step: GitHub to Vercel Deployment Guide

## Let's Fix This Together!

I'll walk you through each step with screenshots descriptions and solutions to common problems.

---

## Step 1: Make Sure Your Code is on GitHub First

### Check if your code is on GitHub:

1. **Go to:** `https://github.com/YOUR-USERNAME/car-select-nz`
   (Replace YOUR-USERNAME with your actual GitHub username)

2. **Do you see your files?**
   - ✅ YES → Great! Go to Step 2
   - ❌ NO → Your code isn't on GitHub yet. Follow "Push to GitHub First" below

---

### If Your Code ISN'T on GitHub Yet:

Run these commands in Emergent:

```bash
cd /app

# Check git status
git status

# Add all files
git add .

# Commit your code
git commit -m "Initial commit: Car Select NZ platform"

# Add GitHub remote (REPLACE YOUR-USERNAME!)
git remote add origin https://github.com/YOUR-USERNAME/car-select-nz.git

# Push to GitHub
git push -u origin main
```

**Now check GitHub again** - your files should be there!

---

## Step 2: Sign Up / Log In to Vercel

1. **Go to:** https://vercel.com

2. **Click "Sign Up"** (or "Log In" if you have an account)

3. **Choose: "Continue with GitHub"** ← IMPORTANT!
   - This connects Vercel to your GitHub account
   - Click "Authorize Vercel"

4. **You'll be redirected to Vercel Dashboard**

---

## Step 3: Import Your Repository

### On Vercel Dashboard:

1. **Click "Add New..."** (top right)
2. **Select "Project"**
3. **You'll see "Import Git Repository"**

### Can't See Your Repository?

#### Solution A: Search for it
- Type `car-select-nz` in the search box
- It should appear

#### Solution B: Install Vercel GitHub App
- Click "Adjust GitHub App Permissions"
- Click "Configure GitHub App"
- Select which repositories Vercel can access
- Choose: "Only select repositories"
- Select `car-select-nz`
- Click "Save"
- Go back to Vercel - it should show now!

#### Solution C: Repository is Private
- Make sure you authorized Vercel to access private repos
- Go to GitHub → Settings → Applications → Vercel
- Check permissions

---

## Step 4: Configure Your Project

After clicking "Import" on your repository:

### Important Configuration Settings:

```
Project Name: car-select-nz
Framework Preset: Create React App  ← Select this from dropdown
Root Directory: ./frontend          ← IMPORTANT! Click "Edit" and type this
Build Command: yarn build            (should auto-fill)
Output Directory: build              (should auto-fill)
Install Command: yarn install        (should auto-fill)
```

**⚠️ CRITICAL:** Make sure "Root Directory" is set to `./frontend` or just `frontend`

This tells Vercel your React app is in the frontend folder!

### Environment Variables (if needed):

Click "Environment Variables" and add:
```
Name: REACT_APP_BACKEND_URL
Value: https://your-backend-url.com
```

(You can skip this for now if you don't have a backend yet)

---

## Step 5: Deploy!

1. **Click "Deploy"** button (bottom of page)

2. **Wait 2-5 minutes** while Vercel:
   - Installs dependencies
   - Builds your app
   - Deploys it

3. **You'll see:**
   - Build logs scrolling
   - "Building..." message
   - Then: "🎉 Congratulations!"

4. **Click "Visit"** to see your live site!

---

## Common Errors & Solutions

### Error 1: "No such file or directory"

**Problem:** Vercel can't find package.json

**Solution:** Set Root Directory to `frontend`
```
Root Directory: ./frontend
```
Then click "Redeploy"

---

### Error 2: "Build failed"

**Problem:** Build errors in your code

**Solution:** Check the build logs. Common fixes:

1. **Missing vercel.json** - I just created this for you!

2. **Unused variables** - Comment them out:
   ```javascript
   // const unused = "something";
   ```

3. **Missing dependencies:**
   ```bash
   cd /app/frontend
   yarn add framer-motion react-router-dom
   git add .
   git commit -m "Fix dependencies"
   git push
   ```

---

### Error 3: "404 Not Found" after deployment

**Problem:** React Router not configured for Vercel

**Solution:** The `vercel.json` file I just created fixes this!

Make sure it's committed to GitHub:
```bash
cd /app
git add frontend/vercel.json
git commit -m "Add Vercel configuration"
git push
```

Then redeploy on Vercel.

---

### Error 4: "Repository not found"

**Problem:** Vercel can't access your GitHub repo

**Solution:**

1. **Check repo exists:**
   - Go to `https://github.com/YOUR-USERNAME/car-select-nz`
   - Can you see it?

2. **Grant Vercel access:**
   - Go to: https://github.com/settings/installations
   - Find "Vercel"
   - Click "Configure"
   - Add `car-select-nz` repository
   - Save

3. **Try importing again in Vercel**

---

### Error 5: "Authentication failed"

**Problem:** Vercel can't connect to GitHub

**Solution:**

1. **Reconnect GitHub:**
   - Vercel Dashboard → Settings → Connected Git Accounts
   - Disconnect GitHub
   - Reconnect with GitHub
   - Authorize all permissions

2. **Check GitHub token:**
   - Make sure you clicked "Authorize Vercel" when signing up

---

## Complete Checklist

Before deploying, make sure:

- ✅ Code is pushed to GitHub
- ✅ Repository is public or Vercel has access
- ✅ Signed up for Vercel with GitHub account
- ✅ Authorized Vercel to access repositories
- ✅ Selected correct repository in Vercel
- ✅ Root Directory set to `frontend`
- ✅ Framework Preset set to "Create React App"
- ✅ `vercel.json` file exists in frontend folder

---

## Alternative: Manual Method

If automatic import isn't working, try this:

### Install Vercel CLI:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Navigate to frontend folder
cd /app/frontend

# Deploy
vercel --prod
```

Follow the prompts:
- Set up and deploy? Y
- Which scope? Select your account
- Link to existing project? N
- Project name? car-select-nz
- Directory? `./`
- Override settings? N

**Your site will deploy and give you a URL!**

---

## What Should Happen After Success

### You'll get a URL like:
```
https://car-select-nz.vercel.app
```

or
```
https://car-select-nz-username.vercel.app
```

### Test your deployment:

1. **Homepage loads** ✅
2. **Click "BUY"** → Goes to Car Selector ✅
3. **Click "SELL"** → Goes to Sell page ✅
4. **Navigation works** ✅
5. **All pages load** (no 404s) ✅

---

## Still Having Issues?

### Tell me exactly what you see:

1. **Which step are you stuck on?**
   - Step 1 (GitHub)?
   - Step 2 (Vercel signup)?
   - Step 3 (Import)?
   - Step 4 (Configure)?
   - Step 5 (Deploy)?

2. **What error message do you see?**
   - Copy and paste it

3. **Can you see your repository on GitHub?**
   - Yes/No

4. **Have you connected Vercel to GitHub?**
   - Yes/No

**Tell me and I'll help you fix it!**

---

## Quick Troubleshooting Commands

### Check if code is on GitHub:
```bash
cd /app
git remote -v
git log --oneline
```

### Push any new changes:
```bash
cd /app
git add .
git commit -m "Add Vercel config"
git push
```

### Verify vercel.json exists:
```bash
cat /app/frontend/vercel.json
```

Should show:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## Need More Help?

I'm here to help! Just tell me:
1. What step you're on
2. What error you see
3. Screenshot of the error (if possible)

We'll get your site deployed! 🚀
