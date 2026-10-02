/**
 * Portfolio BTS SIO SISR - JavaScript Principal Optimisé
 * Haute performance, 60 FPS, zéro reflow inutile, compatible O2switch
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initTabs();
  initFicheFilters();
  initLightbox();
  initScrollSpy();
});

/* -------------------------------------------------------------
 * 1. Gestion du Thème (Dark / Light) avec Persistance LocalStorage
 * ----------------------------------------------------------- */
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle');
  if (!themeBtn) return;

  const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(themeBtn, currentTheme);

  themeBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(themeBtn, newTheme);
  });
}

function updateThemeIcon(button, theme) {
  if (theme === 'light') {
    button.innerHTML = '🌙 <span>Sombre</span>';
    button.setAttribute('aria-label', 'Activer le mode sombre');
  } else {
    button.innerHTML = '☀️ <span>Clair</span>';
    button.setAttribute('aria-label', 'Activer le mode clair');
  }
}

/* -------------------------------------------------------------
 * 2. Menu Mobile Responsive avec fermeture intelligente
 * ----------------------------------------------------------- */
function initMobileMenu() {
  const burger = document.getElementById('burger-menu');
  const navLinks = document.getElementById('nav-links');
  if (!burger || !navLinks) return;

  const toggleMenu = (open) => {
    const shouldOpen = open !== undefined ? open : !navLinks.classList.contains('open');
    navLinks.classList.toggle('open', shouldOpen);
    burger.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    burger.innerHTML = shouldOpen ? '✕' : '☰';
  };

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Fermer le menu lors du clic sur un lien
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggleMenu(false);
    });
  });

  // Fermer si clic en dehors du menu
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && e.target !== burger) {
      toggleMenu(false);
    }
  });

  // Fermer sur touche Echap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      toggleMenu(false);
    }
  });
}

/* -------------------------------------------------------------
 * 3. Gestion des Onglets (Parcours, Veille, etc.)
 * ----------------------------------------------------------- */
function initTabs() {
  const tabContainers = document.querySelectorAll('[data-tabs]');

  tabContainers.forEach(container => {
    const tabButtons = container.querySelectorAll('.tab-btn');
    const tabPanels = container.querySelectorAll('.tab-panel');

    tabButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = btn.getAttribute('data-target');
        if (!targetId) return;

        tabButtons.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.style.display = 'none');

        btn.classList.add('active');
        const targetPanel = container.querySelector(targetId);
        if (targetPanel) {
          targetPanel.style.display = 'block';
        }
      });
    });
  });
}

/* -------------------------------------------------------------
 * 4. Filtres des Fiches E5 (Réseau, Système, etc.)
 * ----------------------------------------------------------- */
function initFicheFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.fiche-card');
  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* -------------------------------------------------------------
 * 5. Lightbox Modal pour Schémas Réseau et Captures (Bug Fixé)
 * ----------------------------------------------------------- */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');

  if (!modal || !modalImg) return;

  // Ouvrir au clic sur les éléments avec la classe .zoomable-img
  document.querySelectorAll('.zoomable-img').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      
      const childImg = trigger.querySelector('img');
      // Résolution fiable de l'URL : data-full > href > child img src > trigger src
      const src = trigger.getAttribute('data-full') ||
                  trigger.getAttribute('href') ||
                  (childImg ? childImg.getAttribute('src') : '') ||
                  trigger.getAttribute('src');

      if (!src) return;

      const caption = trigger.getAttribute('data-caption') || 
                      (childImg ? childImg.getAttribute('alt') : '') || 
                      '';

      modalImg.src = src;
      modalImg.alt = caption;
      if (modalCaption) modalCaption.textContent = caption;

      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    modalImg.src = '';
    document.body.classList.remove('modal-open');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* -------------------------------------------------------------
 * 6. ScrollSpy Haute Performance (IntersectionObserver)
 * ----------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (!sections.length || !navLinks.length) return;

  // Utilisation de IntersectionObserver pour éliminer le lag au scroll
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('active');
            } else if (href.startsWith('#')) {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  } else {
    // Fallback passif throttlé
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let scrollPos = window.scrollY + 140;
          sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
              navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
              });
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }
}

/* -------------------------------------------------------------
 * 7. Tableau de Synthèse Interactif (Cocher / Décocher au clic)
 * ----------------------------------------------------------- */
function initInteractiveTable() {
  const checkCells = document.querySelectorAll('.synthese-official-table td.cell-check');
  if (!checkCells.length) return;

  // Restaurer l'état sauvegardé si présent
  const savedState = JSON.parse(localStorage.getItem('synthese_checks_v1') || '{}');

  checkCells.forEach((cell, index) => {
    if (savedState[index]) {
      cell.textContent = '✔';
      cell.classList.add('checked');
    }

    cell.addEventListener('click', () => {
      const isChecked = cell.textContent.trim() === '✔';
      if (isChecked) {
        cell.textContent = '';
        cell.classList.remove('checked');
        delete savedState[index];
      } else {
        cell.textContent = '✔';
        cell.classList.add('checked');
        savedState[index] = true;
      }
      localStorage.setItem('synthese_checks_v1', JSON.stringify(savedState));
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initInteractiveTable();
});
