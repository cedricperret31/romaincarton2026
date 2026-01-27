# Système de gestion des newsletters

## Comment ça fonctionne

Ce système permet de gérer automatiquement les newsletters avec un menu de navigation dynamique, sans avoir à modifier toutes les pages à chaque ajout.

### Fichiers principaux

- **index.html** : Redirige automatiquement vers la newsletter la plus récente
- **newsletters.js** : Fichier de configuration qui liste toutes les newsletters disponibles
- **newsletter-YYYY-MM.html** : Les newsletters individuelles (ex: newsletter-2026-01.html)

### Menu de navigation

Le menu est généré automatiquement sur chaque page de newsletter grâce au script `newsletters.js`. Il affiche :
- La newsletter actuelle en surbrillance
- Des liens vers toutes les autres newsletters
- Les newsletters les plus récentes en premier

## Comment ajouter une nouvelle newsletter

### Étape 1 : Créer le fichier HTML

Créez un nouveau fichier en suivant la convention de nommage :
```
newsletter-YYYY-MM.html
```

Par exemple : `newsletter-2026-02.html` pour février 2026

### Étape 2 : Copier le template

Copiez le contenu d'une newsletter existante (ex: newsletter-2026-01.html) et modifiez le contenu.

**Important** : Assurez-vous que votre newsletter contient :

1. Le CSS du menu (dans la section `<style>`) :
```css
/* Navigation Menu */
.nav-menu {
  max-width: 675px;
  width: 100%;
  margin: 0 auto 15px;
  background-color: #070782;
  padding: 15px;
  border-radius: 4px;
  text-align: center;
}

.nav-menu a {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 15px;
  margin: 0 5px;
  display: inline-block;
}

.nav-menu a:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

.nav-menu-current {
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 8px 15px;
  margin: 0 5px;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

@media screen and (max-width: 600px) {
  .nav-menu {
    padding: 10px !important;
  }

  .nav-menu a, .nav-menu-current {
    display: block !important;
    margin: 5px 0 !important;
  }
}
```

2. La balise script juste avant `</head>` :
```html
<script src="newsletters.js"></script>
</head>
```

### Étape 3 : Mettre à jour newsletters.js

Ouvrez le fichier `newsletters.js` et ajoutez votre nouvelle newsletter à la fin du tableau `NEWSLETTERS` :

```javascript
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
    },
    {
        file: 'newsletter-2026-02.html',  // Nouvelle ligne
        year: 2026,                        // Nouvelle ligne
        month: 2,                          // Nouvelle ligne
        label: 'Février 2026'             // Nouvelle ligne
    }
];
```

**C'est tout !** Le menu sera automatiquement mis à jour sur toutes les pages et index.html redirigera vers la nouvelle newsletter.

## Avantages du système

✅ **Pas de modification des pages existantes** : Ajoutez une newsletter sans toucher aux autres
✅ **Menu automatique** : Le menu se met à jour partout automatiquement
✅ **Redirection automatique** : index.html pointe toujours vers la plus récente
✅ **Compatible GitHub Pages** : Utilise uniquement HTML/CSS/JavaScript
✅ **Navigation facile** : Les visiteurs peuvent naviguer entre toutes les newsletters

## Ajouter une page spéciale (ex: Voeux, Événements)

En plus des newsletters mensuelles, vous pouvez ajouter des pages spéciales qui apparaîtront dans le menu.

### Étape 1 : Créer le fichier HTML

Créez votre page HTML (ex: `voeux2026.html`) avec le même template que les newsletters.

**Important** : Assurez-vous d'inclure :
- Le CSS du menu (voir section "Copier le template" plus haut)
- La balise `<script src="newsletters.js"></script>` avant `</head>`

### Étape 2 : Ajouter dans newsletters.js

Ouvrez `newsletters.js` et ajoutez votre page dans le tableau `SPECIAL_PAGES` :

```javascript
const SPECIAL_PAGES = [
    {
        file: 'voeux2026.html',
        label: 'Voeux 2026'
    },
    {
        file: 'evenement-special.html',  // Nouvelle page
        label: 'Événement Spécial'       // Nouvelle page
    }
];
```

Les pages spéciales apparaîtront **après** les newsletters dans le menu.

## Structure des fichiers

```
romaincarton2026/
├── index.html                      # Redirige vers la newsletter la plus récente
├── newsletters.js                  # Configuration des newsletters et pages spéciales
├── newsletter-2025-12.html         # Newsletter décembre 2025
├── newsletter-2026-01.html         # Newsletter janvier 2026
├── voeux2026.html                  # Page spéciale Voeux 2026
├── Newsletter Janvier 2026.html    # Template email Mailjet
└── README-NEWSLETTERS.md           # Ce fichier
```
