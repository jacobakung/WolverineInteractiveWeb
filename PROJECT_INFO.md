# Wolverine Interactive LLC - Project Information

## Project Overview
This is the company website for **Wolverine Interactive LLC**, a game development company. The website showcases games and company information.

## Live Website
- **Production URL:** https://wolverineinteractive.com
- **GitHub Pages URL:** https://jacobakung.github.io/WolverineInteractiveWeb/
- **Repository:** https://github.com/jacobakung/WolverineInteractiveWeb

## Contact Information
- **Company Email:** wolverineinteractive@gmail.com

## Current Games
1. **WordRush** - Word puzzle game
   - Platforms: iOS, Android
   - App Icon: `WordRush.AppIcon.png`

## File Structure
```
WolverineInteractiveWeb/
├── index.html              # Main HTML file
├── styles.css              # All styling
├── script.js               # JavaScript functionality
├── games-data.js           # Games database (EDIT THIS TO ADD GAMES)
├── WordRush.AppIcon.png    # WordRush game icon
├── logo.png                # Company logo (NOT YET ADDED)
├── README.md               # User documentation
└── PROJECT_INFO.md         # This file - for Claude reference
```

## How to Add New Games

**Edit `games-data.js` and add a new object to the `games` array:**

```javascript
{
    title: "Game Name",
    description: "Brief description of the game",
    platforms: ["iOS", "Android", "Web"],
    image: "path/to/game-icon.png",  // Optional
    link: "https://app-store-link.com"  // Optional
}
```

The website will automatically display the new game card.

## Git Workflow

### Making Updates to the Website:

1. **Edit files locally** (in `/Users/jacobkung/Work/WolverineInteractiveWeb`)

2. **Commit and push changes:**
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

3. **Changes go live automatically** (GitHub Pages rebuilds in 1-2 minutes)

### GitHub Authentication:
- GitHub CLI is installed and authenticated as `jacobakung`
- Use `gh auth status` to check authentication
- Use `gh auth login` if re-authentication is needed

## Domain Configuration

### Domain Registrar
- **Provider:** GoDaddy
- **Domain:** wolverineinteractive.com

### DNS Records (Already Configured in GoDaddy):
- **A Records (4):** Point to GitHub Pages IPs
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- **CNAME Record:** www → jacobakung.github.io
- **TXT Record:** GitHub domain verification (already verified)

### GitHub Pages Settings:
- Custom domain: wolverineinteractive.com
- Domain is verified in GitHub account settings
- HTTPS should be enabled (check Settings → Pages)

## Important Notes

### Logo
- Company logo should be saved as `logo.png` in the root directory
- Logo will automatically appear in navigation bar when added
- Recommended size: 40px height

### Updating Content

**To change company information:**
- Edit `index.html` (sections: About, Contact)

**To change colors/styling:**
- Edit CSS variables in `styles.css` (lines 11-20)

**To add game images:**
- Save image in project folder
- Update `image` field in `games-data.js` with the file path

### Testing Locally
- Open `index.html` in browser: `open index.html`
- Or use: `python3 -m http.server 8000` and visit http://localhost:8000

## Technology Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Hosting:** GitHub Pages (free)
- **Version Control:** Git + GitHub
- **Domain:** GoDaddy DNS → GitHub Pages

## Common Tasks

### View repository in browser:
```bash
gh repo view --web
```

### Check GitHub Pages status:
```bash
gh api repos/jacobakung/WolverineInteractiveWeb/pages
```

### Open live website:
```bash
open https://wolverineinteractive.com
```

## Future TODOs
- [ ] Add company logo (logo.png)
- [ ] Add more games as they're developed
- [ ] Add app store links to WordRush when available
- [ ] Consider adding blog/news section
- [ ] Add social media links

## Project History
- **Created:** October 22, 2025
- **First Deploy:** October 22, 2025
- **Initial Games:** WordRush
