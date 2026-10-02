# 🎓 Portfolio Professionnel BTS SIO SISR — Épreuve E5

Bienvenue dans le modèle de portfolio spécialement conçu pour l'épreuve **E5 (Administration des systèmes et des réseaux)** du **BTS SIO option SISR**.

Ce site est **100% prêt à l'emploi** : la structure, le design, la navigation, le mode sombre/clair, la visionneuse de schémas réseau et la configuration pour **O2switch** sont entièrement programmés. **Il ne vous reste plus qu'à remplacer les balises `[A REMPLIR]` par vos propres informations.**

---

## 📁 Structure du Projet

```text
Code E5/
├── index.html                 # Page d'accueil & profil complète (Hero, À propos, CV, Parcours, Fiches, Veille, Tableau E5, Contact)
├── fiches-e5.html             # Page détaillée des réalisations SISR (Fiches E5, schémas réseau zoomables, captures CLI/GUI)
├── veille.html                # Page dédiée à la veille technologique sur 2 ans (Méthode, flux RSS, revues d'articles, synthèses)
├── tableau-synthese.html      # Tableau de synthèse officiel interactif (Compétences Bloc 1 & Bloc 2 SISR + Export impression/PDF)
├── DESIGN.md                  # Spécification graphique et design system
├── .htaccess                  # Fichier de configuration Apache optimisé pour l'hébergement O2switch
├── css/
│   └── style.css              # Feuille de style complète (Dark/Light mode, animations légères, responsive, print)
├── js/
│   └── main.js                # Scripts (Thème sombre/clair, onglets, filtres, lightbox pour schémas et captures, menu mobile)
└── assets/
    ├── img/
    │   ├── avatar/            # Déposez ici votre photo de profil (ex: photo.jpg)
    │   ├── schemas/           # Déposez ici vos schémas réseau Draw.io / Visio (.png, .svg)
    │   └── captures/          # Déposez ici vos captures de configuration CLI (Bash, Cisco) et GUI (AD, Proxmox)
    └── docs/
        ├── cv.pdf             # Déposez votre CV au format PDF sous le nom "cv.pdf"
        └── tableau-synthese-e5.pdf # Déposez votre tableau de synthèse officiel signé
```

---

## ✏️ Guide pour Remplir Vos Informations

Toutes les zones à personnaliser sont repérées par des balises claires :
`<!-- [A REMPLIR] : ... -->` et le texte entre crochets `[A REMPLIR : ...]`.

### 1. Accueil & Profil (`index.html`)
- **Identité configurée** : Maël Bretagne — Technicien Systèmes et Réseaux — Session 2026 — Besné (44160).
- **Objectif Professionnel** : Continuer en tant qu'Administrateur Système et Réseau Junior.
- **Photo de profil** : Déposez votre photo dans `assets/img/avatar/photo.jpg` et modifiez la balise `<img>` correspondante dans `index.html`.
- **Curriculum Vitae (CV)** : Déposez votre CV sous le nom exact `assets/docs/cv.pdf`. Le bouton de téléchargement fonctionnera automatiquement !

### 2. À Propos & Parcours
- **Qui je suis ?** : Votre profil est pré-rempli et personnalisable.
- **Points forts** : Ajustez les jauges de compétences et vos spécialités techniques.
- **Centres d'intérêt** : Homelab (Proxmox, NAS, Docker), entraînements techniques, sports ou passions.
- **Parcours Pro & Académique** : Indiquez les dates, entreprises et missions de vos stages et postes.

### 3. Fiches E5 & Réalisations SISR (`fiches-e5.html`)
- Chaque fiche contient la structure officielle exigée par le jury :
  1. Contexte organisationnel
  2. Besoins et contraintes
  3. **Schéma réseau d'architecture** : Déposez vos schémas dans `assets/img/schemas/` et liez-les. Ils s'agrandissent automatiquement en plein écran grâce à la Lightbox !
  4. Solutions techniques détaillées
  5. **Captures de configuration** : Déposez vos captures CLI (switch Cisco, serveur Linux) ou interfaces GUI (Active Directory, Proxmox, supervision) dans `assets/img/captures/`.
  6. Compétences du référentiel mobilisées (Bloc 1 et Bloc 2 SISR)
  7. Bilan et démarche réflexive (difficultés rencontrées et solutions)

### 4. Veille Technologique (`veille.html`)
- Indiquez votre sujet de veille et votre problématique.
- Présentez vos outils de veille (Agrégateur RSS Feedly/Inoreader, bulletins CERT-FR/ANSSI, alertes).
- Renseignez vos articles annotés répartis sur les 2 années :
  - **Année 1** : Découverte et fondamentaux.
  - **Année 2** : Maturité, cas pratiques et réglementation (ex: NIS 2).
- Complétez les synthèses annuelles rédigées.

### 5. Tableau de Synthèse E5 (`tableau-synthese.html`)
- Le tableau reprend l'intégralité des compétences officielles des **Bloc 1** et **Bloc 2 SISR**.
- Modifiez les cases `✔` pour correspondre à vos réalisations.
- Le bouton **"Imprimer / Sauvegarder en PDF"** génère un rendu d'impression propre sans les menus.
- Vous pouvez également déposer votre document officiel signé dans `assets/docs/tableau-synthese-e5.pdf`.

---

## 🚀 Comment Déployer sur O2switch

Votre portfolio a été conçu en **HTML5 / CSS3 / Vanilla JavaScript** statique, ce qui est le choix le plus robuste, le plus rapide et le plus fiable pour un hébergement mutualisé comme **O2switch**. Il n'a besoin d'aucune base de données, ne nécessite aucun serveur Node.js et ne risque aucune erreur de version PHP.

### Méthode 1 : Via le Gestionnaire de Fichiers cPanel (Le plus simple)
1. Connectez-vous à votre espace **cPanel O2switch** (l'adresse ressemble à `https://votre-domaine.fr:2083` ou via votre espace client O2switch).
2. Cliquez sur **"Gestionnaire de fichiers"**.
3. Naviguez vers le dossier **`public_html/`** (ou le sous-dossier de votre sous-domaine si vous utilisez par exemple `portfolio.votre-domaine.fr`).
4. Compressez tous les fichiers du dossier de votre portfolio dans un fichier `.zip` (en incluant `index.html`, `fiches-e5.html`, `veille.html`, `tableau-synthese.html`, `.htaccess`, les dossiers `css`, `js`, et `assets`).
5. Cliquez sur **"Téléverser"** dans cPanel, envoyez votre fichier `.zip`, puis faites clic droit -> **"Extract"** (Extraire).
6. Votre site est immédiatement en ligne et sécurisé en HTTPS !

### Méthode 2 : Via FTP avec FileZilla
1. Téléchargez et ouvrez **FileZilla**.
2. Renseignez vos identifiants FTP fournis par O2switch :
   - **Hôte** : `ftp.votre-domaine.fr`
   - **Identifiant** : Votre nom d'utilisateur cPanel
   - **Mot de passe** : Votre mot de passe
   - **Port** : `21` (ou Connexion rapide)
3. Dans la fenêtre de droite (serveur distant), entrez dans le dossier **`public_html`**.
4. Dans la fenêtre de gauche (ordinateur local), sélectionnez l'ensemble des fichiers de votre portfolio et glissez-les vers `public_html`.
5. Le transfert s'exécute en quelques secondes.

---

## 💡 Conseils pour l'Épreuve E5

- **Les 10 premières minutes** : Vous présentez votre parcours, vos compétences et votre démarche de veille technologique. Utilisez la page d'accueil et la page de veille comme support visuel dynamique.
- **Choix de la situation par le jury (30 minutes)** : Le jury choisit l'une de vos situations professionnelles. Ouvrez directement la fiche correspondante sur `fiches-e5.html` pour projeter le schéma réseau en grand écran et dérouler votre exposé technique en vous appuyant sur vos captures de configuration.
- **Mode Clair / Sombre** : Si la salle d'examen dispose d'un vidéoprojecteur peu lumineux, basculez en **Mode Clair** d'un simple clic sur le bouton ☀️ pour garantir un contraste optimal pour le jury.
