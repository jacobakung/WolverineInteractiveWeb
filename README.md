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
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── games-data.js       # Games data (easy to update!)
├── logo.png            # Company logo (add this file)
└── README.md           # This file
```

## How to Use

1. Open `index.html` in a web browser to view the website locally
2. To deploy online, upload all files to your web hosting service

## Adding Your Logo

1. Save your logo as `logo.png` in the same directory as `index.html`
2. The logo will automatically appear in the navigation bar
3. Recommended logo size: 40px height (width will auto-adjust)

## Adding New Games

Adding new games is super simple! Just edit the `games-data.js` file:

1. Open `games-data.js`
2. Add a new game object to the `games` array following this format:

```javascript
{
    title: "Your Game Name",
    description: "Brief description of your game",
    platforms: ["iOS", "Android", "Web"],
    image: "path/to/game-image.jpg", // Optional
    link: "https://your-game-link.com" // Optional
}
```

### Example:

```javascript
const games = [
    {
        title: "WordDash",
        description: "An exciting word puzzle game that challenges your vocabulary and quick thinking skills.",
        platforms: ["iOS", "Android"],
        image: null,
        link: null
    },
    {
        title: "Your New Game",
        description: "Description of your new amazing game",
        platforms: ["iOS", "Android", "Web"],
        image: "images/new-game.jpg",
        link: "https://apps.apple.com/your-game"
    }
];
```

## Customization

### Changing Colors

Edit the CSS variables in `styles.css` (lines 11-20):

```css
:root {
    --primary-color: #1a73e8;      /* Main brand color */
    --secondary-color: #34a853;    /* Secondary accent color */
    --dark-bg: #1a1a2e;            /* Dark background */
    /* ... more colors ... */
}
```

### Updating Company Information

Edit the content in `index.html`:
- Company name: Line 13 and Line 16
- About section: Lines 47-51
- Contact information: Lines 57-63

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Need Help?

If you need to make changes or have questions, the code is well-commented and organized for easy understanding.
