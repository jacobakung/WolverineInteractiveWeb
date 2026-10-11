# Wolverine Interactive LLC Website

A modern, responsive website for Wolverine Interactive LLC game development company.

## Features

- Responsive design that works on desktop, tablet, and mobile devices
- Clean, modern interface
- Easy-to-update games showcase
- Smooth animations and transitions
- Mobile-friendly navigation menu

## File Structure

```
WolverineInteractiveWeb/
├── index.html          # Home page
├── wordrush.html       # WordRush game page
├── ratemyjumper.html   # RateMyJumper game page
├── styles.css          # All styling
├── script.js           # Nav, footer year, and home-page game cards
├── games-data.js       # Games data (easy to update!)
├── assets/
│   ├── icons/          # App icons (512px PNG)
│   ├── favicon.svg     # Site favicon
│   ├── documents/      # WordRush legal PDFs
│   └── RateMyJumper/   # RateMyJumper legal PDFs
└── README.md           # This file
```

## How to Use

1. Open `index.html` in a web browser to view the website locally
2. To deploy online, upload all files to your web hosting service

## Adding New Games

Adding new games is super simple! Just edit the `games-data.js` file:

1. Open `games-data.js`
2. Add a new game object to the `games` array following this format:

```javascript
{
    slug: "your-game",
    title: "Your Game Name",
    tagline: "One sentence that sells it",
    platforms: ["iOS", "Android"],
    icon: "assets/icons/your-game.png",
    accent: "#5b8cff",                 // card glow / button color
    page: "your-game.html",            // detail page on this site
    appStore: "https://apps.apple.com/app/idXXXXXXXXXX" // optional
}
```

Then copy `wordrush.html` to `your-game.html` and edit the hero, features, and legal links.

## Customization

### Changing Colors

Edit the CSS variables at the top of `styles.css`:

```css
:root {
    --bg: #0b0f1a;        /* Page background */
    --brand: #5b8cff;     /* Brand accent */
    --text: #f3f5f9;      /* Body text */
    /* ... more colors ... */
}
```

### Updating Company Information

Edit the content in `index.html` (About and Contact sections).

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Need Help?

If you need to make changes or have questions, the code is well-commented and organized for easy understanding.
