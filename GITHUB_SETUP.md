# GitHub Setup Instructions

## Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `portfolio-website` (or your choice)
3. Description: "Cyberpunk-themed portfolio website"
4. Choose **Public** or **Private**
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **"Create repository"**

## Step 2: Connect and Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Navigate to your project (if not already there)
cd "H:\0 PROJECTS D\PORTFOLIO-TESTING"

# Add the remote repository (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push your code to GitHub
git push -u origin main
```

## Example:
If your GitHub username is `johndoe` and repository name is `portfolio-website`:

```bash
git remote add origin https://github.com/johndoe/portfolio-website.git
git push -u origin main
```

## Step 3: Verify

After pushing, refresh your GitHub repository page. You should see all your files!

## Troubleshooting

### If you get authentication errors:
- Use GitHub CLI: `gh auth login`
- Or use a Personal Access Token instead of password
- Or use SSH: `git remote set-url origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git`

### If you need to update later:
```bash
git add .
git commit -m "Your commit message"
git push
```

