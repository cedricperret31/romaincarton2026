// Liste des newsletters disponibles
// Ajouter chaque nouvelle newsletter ici dans l'ordre chronologique (la plus récente en dernier)
const NEWSLETTERS = [
    {
        file: 'newsletter-2025-12.html',
        year: 2025,
        month: 12,
        label: 'Décembre 2025'
    },
    {
        file: 'newsletter-2026-01.html',
        year: 2026,
        month: 1,
        label: 'Janvier 2026'
    }
];

// Pages spéciales (affichées après les newsletters dans le menu)
const SPECIAL_PAGES = [
    {
        file: 'voeux2026.html',
        label: 'Voeux 2026'
    }
];

// Fonction pour obtenir la newsletter la plus récente
function getLatestNewsletter() {
    return NEWSLETTERS[NEWSLETTERS.length - 1];
}

// Fonction pour obtenir une newsletter spécifique par filename
function getNewsletterByFile(filename) {
    return NEWSLETTERS.find(nl => nl.file === filename);
}

// Fonction pour générer le menu HTML
function generateNewsletterMenu(currentFile) {
    // Générer les items pour les newsletters (inversés pour afficher les plus récents en premier)
    const newsletterItems = NEWSLETTERS.map(nl => {
        const isCurrent = nl.file === currentFile;
        if (isCurrent) {
            return `<span class="nav-menu-current">${nl.label}</span>`;
        } else {
            return `<a href="${nl.file}">${nl.label}</a>`;
        }
    }).reverse().join('');

    // Générer les items pour les pages spéciales
    const specialItems = SPECIAL_PAGES.map(page => {
        const isCurrent = page.file === currentFile;
        if (isCurrent) {
            return `<span class="nav-menu-current">${page.label}</span>`;
        } else {
            return `<a href="${page.file}">${page.label}</a>`;
        }
    }).join('');

    return `
        <div class="nav-menu">
            ${newsletterItems}
            ${specialItems}
        </div>
    `;
}

// Fonction pour injecter le menu dans la page
function injectNewsletterMenu() {
    // Obtenir le nom du fichier actuel
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';

    // Générer et injecter le menu
    const menuHtml = generateNewsletterMenu(currentFile);
    const bodyElement = document.body;

    if (bodyElement) {
        bodyElement.insertAdjacentHTML('afterbegin', menuHtml);
    }
}

// Auto-inject le menu quand le DOM est chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNewsletterMenu);
} else {
    injectNewsletterMenu();
}
