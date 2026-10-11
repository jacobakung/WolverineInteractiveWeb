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
1. **WordRush** - Boggle-style timed word game (Classic 4×4/5×5, Daily Board, Marathon, Quick Match)
   - Platforms: iOS
   - App Store: https://apps.apple.com/app/id6754856456 (listed as "WordRush GO")
   - Icon: `assets/icons/wordrush.png`
2. **RateMyJumper** - Rate your basketball jump shot (crowd Elo rating + AI baseline vs NBA forms, Guess the NBA Jumper)
   - Platforms: iOS
   - App Store: https://apps.apple.com/app/id6776380978
   - Icon: `assets/icons/ratemyjumper.png`

## File Structure
```
WolverineInteractiveWeb/
├── index.html              # Home page
├── wordrush.html           # WordRush game page
├── ratemyjumper.html       # RateMyJumper game page
├── styles.css              # All styling (CSS variables at the top)
├── script.js               # Nav toggle, footer year, home-page game cards
├── games-data.js           # Games database (EDIT THIS TO ADD GAMES)
├── assets/icons/           # App icons, 512px PNG
├── assets/favicon.svg      # Site favicon (inline "W" monogram; no logo.png needed)
├── assets/documents/       # WordRush legal PDFs
├── assets/RateMyJumper/    # RateMyJumper legal PDFs
├── README.md               # User documentation
└── PROJECT_INFO.md         # This file - for Claude reference
```

## How to Add New Games

**Edit `games-data.js` and add a new object to the `games` array:**

```javascript
{
    slug: "game-name",
    title: "Game Name",
    tagline: "One sentence that sells it",
    platforms: ["iOS", "Android"],
    icon: "assets/icons/game-name.png",
    accent: "#5b8cff",
    page: "game-name.html",
    appStore: "https://apps.apple.com/app/idXXXXXXXXXX"  // Optional
}
```

The home page card is generated automatically. Copy `wordrush.html` for the detail page.

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
- The nav uses an inline "W" monogram (`.brand-mark` in styles.css) and `assets/favicon.svg`.
- To use a real logo, replace the monogram span in all three HTML files.

### Updating Content

**To change company information:**
- Edit `index.html` (sections: About, Contact)

**To change colors/styling:**
- Edit CSS variables at the top of `styles.css`

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
- [ ] Replace the "W" monogram with a real company logo
- [ ] Add more games as they're developed
- [x] Add app store links to WordRush and RateMyJumper
- [ ] Consider adding blog/news section
- [ ] Add social media links

## Project History
- **Created:** October 22, 2025
- **First Deploy:** October 22, 2025
- **Initial Games:** WordRush
