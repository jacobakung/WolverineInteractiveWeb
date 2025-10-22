// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');

mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Logo Visibility - Show logo if logo.png exists
const logo = document.getElementById('logo');
const logoImg = new Image();
logoImg.onload = function() {
    logo.classList.add('visible');
};
logoImg.onerror = function() {
    // Logo doesn't exist yet, keep it hidden
    logo.classList.remove('visible');
};
logoImg.src = 'logo.png';

// Dynamically Load Games
function loadGames() {
    const gamesGrid = document.getElementById('gamesGrid');

    if (games.length === 0) {
        gamesGrid.innerHTML = '<p style="text-align: center; color: #666;">No games available yet. Check back soon!</p>';
        return;
    }

    games.forEach(game => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
    });
}

function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';

    // Create image section
    const imageDiv = document.createElement('div');
    imageDiv.className = 'game-image';

    if (game.image) {
        const img = document.createElement('img');
        img.src = game.image;
        img.alt = game.title;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        imageDiv.appendChild(img);
    } else {
        // Use first letter of game title as placeholder
        imageDiv.textContent = game.title.charAt(0);
    }

    // Create content section
    const content = document.createElement('div');
    content.className = 'game-content';

    const title = document.createElement('h3');
    title.className = 'game-title';
    title.textContent = game.title;

    const description = document.createElement('p');
    description.className = 'game-description';
    description.textContent = game.description;

    const platformsDiv = document.createElement('div');
    platformsDiv.className = 'game-platforms';

    game.platforms.forEach(platform => {
        const tag = document.createElement('span');
        tag.className = 'platform-tag';
        tag.textContent = platform;
        platformsDiv.appendChild(tag);
    });

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(platformsDiv);

    card.appendChild(imageDiv);
    card.appendChild(content);

    // Add click handler if link is available
    if (game.link) {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            window.open(game.link, '_blank');
        });
    }

    return card;
}

// Initialize games when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadGames();
});

// Smooth scroll for navigation links (fallback for browsers that don't support CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
