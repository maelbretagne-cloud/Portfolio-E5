# Spécification de Design & Architecture Technique — Portfolio BTS SIO SISR (Épreuve E5)

> **Document de référence UI/UX & Architecture Web**  
> Spécification conforme au skill standard `web-design`.  
> Projet optimisé pour un hébergement mutualisé haute performance sur **O2switch**.

---

## 1. Palette de Couleurs & Tokens de Design

Le design adopte une identité visuelle **Tech / Sysadmin / Cyber** inspirée des consoles d'infrastructure modernes (Vercel, Cloudflare, Proxmox, Cisco), avec un mode sombre par défaut et un mode clair contrasté pour la projection devant le jury.

### 1.1 Thème Sombre (Par Défaut)
| Token | Valeur Hex / RGBA | Usage |
| :--- | :--- | :--- |
| `--bg-body` | `#090d16` | Fond d'écran principal (bleu nuit profond) |
| `--bg-surface` | `#0f172a` | Fond des barres de navigation et éléments de structure |
| `--bg-surface-elevated` | `#162032` | Fond des éléments secondaires et badges |
| `--bg-card` | `rgba(17, 24, 39, 0.75)` | Cartes avec effet de transparence glassmorphism |
| `--text-main` | `#f8fafc` | Titres et texte principal (contraste élevé) |
| `--text-muted` | `#94a3b8` | Paragraphes et descriptions secondaires |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | Séparateurs et bordures de cartes |
| `--primary` | `#0ea5e9` | Accent Cyan réseau (boutons principaux, liens, focus) |
| `--secondary` | `#10b981` | Accent Émeraude sysadmin (status OK, badges validés) |
| `--accent-purple` | `#8b5cf6` | Accent Violet infrastructure (virtualisation, cloud) |

### 1.2 Thème Clair (Alternatif)
| Token | Valeur Hex / RGBA | Usage |
| :--- | :--- | :--- |
| `--bg-body` | `#f8fafc` | Fond clair anti-fatigue visuelle |
| `--bg-surface` | `#ffffff` | Cartes blanches et conteneurs |
| `--text-main` | `#0f172a` | Texte foncé pour lisibilité optimale sur vidéoprojecteur |
| `--text-muted` | `#475569` | Descriptions secondaires |
| `--primary` | `#0284c7` | Bleu tech soutenu |

---

## 2. Typographie & Hiérarchie

- **Police de labeur & Titres** : `'Plus Jakarta Sans'`, sans-serif moderne, haute lisibilité sur écran.
- **Police Monospace (Technique)** : `'JetBrains Mono'`, monospace pour les adresses IP, masques de sous-réseau, ports, commandes CLI Cisco/Linux, codes de compétences (`B1.1`, `B2.2`).

### Échelle Modulaire :
- `Hero H1` : `2.85rem` (`45px`), poids `800`, line-height `1.15`
- `Section H2` : `2.25rem` (`36px`), poids `800`, letter-spacing `-0.02em`
- `Card H3` : `1.25rem` (`20px`), poids `700`
- `Body text` : `1rem` (`16px`), line-height `1.6`
- `Code & Badges` : `0.75rem` — `0.85rem` (`12-14px`), poids `600-700`

---

## 3. Composants d'Interface

1. **Header Sticky avec Effet de Flou (`backdrop-filter`)** :
   - Logo candidat + badge SISR
   - Menu d'ancrage fluide (Accueil, À propos, Parcours, Fiches E5, Veille, Tableau E5)
   - Sélecteur de mode Sombre / Clair persistant via `localStorage`
   - Bouton de téléchargement rapide du CV (PDF)
2. **Hero Profil (Accueil)** :
   - Photo de profil / avatar avec indicateur de statut actif
   - Titre avec dégradé cyan/indigo
   - Présentation des objectifs professionnels
   - Badges des domaines de compétences clés
3. **Timeline Parcours (Double vue : Professionnel vs Académique)** :
   - Alternance d'onglets instantanée sans rechargement
   - Points de repère colorés (émeraude pour l'entreprise, cyan pour la formation)
4. **Cartes Fiches E5 avec Visionneuse Agrandie (Lightbox)** :
   - Aperçu miniature des schémas d'architecture et des terminaux CLI
   - Clic pour zoom plein écran avec touche `Échap` pour fermer
   - Badges du référentiel officiel associés à chaque situation
5. **Espace Veille Technologique sur 2 Ans** :
   - Présentation de la problématique officielle
   - Outils de collecte (flux RSS, newsletters, lab)
   - Cartes d'articles avec méta-données, résumé et analyse réflexive
   - Synthèses thématiques Année 1 et Année 2
6. **Tableau de Synthèse Interactif (Épreuve E5)** :
   - Grille complète du référentiel BTS SIO SISR (Bloc 1 et Bloc 2)
   - En-tête fixe au défilement horizontal (`sticky header`)
   - Bouton d'impression optimisé (génération automatique d'un PDF clair et net)
   - Bouton de téléchargement du fichier PDF / Excel officiel

---

## 4. Règles de Conception (Do's & Don'ts pour le BTS)

### ✅ À FAIRE (Do's)
- **Rigueur technique** : Utiliser la bonne terminologie réseau (adressage CIDR, encapsulation 802.1Q, routage dynamique, PRA/PCA).
- **Lisibilité immédiate** : Permettre au jury d'accéder en un clic aux schémas réseau et au tableau de synthèse.
- **Transparence sur les sources** : Dater systématiquement les articles de veille et expliciter l'apport personnel.
- **Portabilité maximale** : Code 100% autonome, zéro dépendance à des CDN externes susceptibles d'être bloqués en salle d'examen.

### ❌ À ÉVITER (Don'ts)
- **Ne pas surcharger d'animations distrayantes** : Les transitions restent discrètes (`0.2s - 0.3s`).
- **Ne pas masquer le tableau de synthèse** : Il doit être visible à la fois sur l'accueil et sur sa page dédiée.
- **Ne pas dépendre d'une base de données** : Le format statique évite tout risque de panne de base de données le jour de l'épreuve.

---

## 5. Déploiement Spécifique sur O2switch

### Compatibilité Serveur :
- **Serveur web** : Apache 2.4 / LiteSpeed Enterprise (standard O2switch cPanel).
- **Racine du site** : `/home/[identifiant_o2switch]/public_html/`.
- **Fichier de configuration** : [`.htaccess`](file:///C:/Users/maelb/Desktop/Code%20E5/.htaccess) inclus à la racine avec :
  - Redirection automatique vers HTTPS
  - Compression Deflate/Gzip (HTML, CSS, JS, SVG, JSON)
  - Mise en cache navigateur (`mod_expires`)
  - En-têtes HTTP de sécurité (`X-Frame-Options`, `nosniff`, `XSS protection`)
