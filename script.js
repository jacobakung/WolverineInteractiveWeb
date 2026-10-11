(function () {
    // ----- Mobile navigation -----
    const toggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            const open = navLinks.classList.toggle('open');
            toggle.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', String(open));
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ----- Elevate the navbar once the page scrolls -----
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    // ----- Footer year -----
    document.querySelectorAll('[data-year]').forEach(el => {
        el.textContent = new Date().getFullYear();
    });

    // ----- Games grid (home page only) -----
    const grid = document.getElementById('gamesGrid');
    if (grid && typeof games !== 'undefined') {
        if (games.length === 0) {
            grid.innerHTML = '<p class="muted center">No games available yet. Check back soon!</p>';
            return;
        }
        games.forEach(game => grid.appendChild(createGameCard(game)));
    }

    function createGameCard(game) {
        const card = document.createElement('article');
        card.className = 'game-card';
        card.style.setProperty('--accent', game.accent || '#5b8cff');

        const icon = document.createElement('img');
        icon.className = 'game-card-icon';
        icon.src = game.icon;
        icon.alt = game.title + ' app icon';
        icon.width = 96;
        icon.height = 96;
        icon.loading = 'lazy';

        const body = document.createElement('div');
        body.className = 'game-card-body';

        const title = document.createElement('h3');
        title.className = 'game-card-title';
        const titleLink = document.createElement('a');
        titleLink.href = game.page;
        titleLink.textContent = game.title;
        title.appendChild(titleLink);

        const tagline = document.createElement('p');
        tagline.className = 'game-card-tagline';
        tagline.textContent = game.tagline;

        const platforms = document.createElement('ul');
        platforms.className = 'platform-list';
        platforms.setAttribute('aria-label', 'Platforms');
        (game.platforms || []).forEach(p => {
            const li = document.createElement('li');
            li.className = 'platform-tag';
            li.textContent = p;
            platforms.appendChild(li);
        });

        const actions = document.createElement('div');
        actions.className = 'game-card-actions';

        const more = document.createElement('a');
        more.className = 'btn btn-ghost';
        more.href = game.page;
        more.textContent = 'Learn more';
        actions.appendChild(more);

        if (game.appStore) {
            const store = document.createElement('a');
            store.className = 'btn btn-primary';
            store.href = game.appStore;
            store.target = '_blank';
            store.rel = 'noopener';
            store.textContent = 'App Store';
            actions.appendChild(store);
        }

        body.append(title, tagline, platforms, actions);
        card.append(icon, body);
        return card;
    }
})();
