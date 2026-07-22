// Shared nav and footer injected on all pages
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const navHTML = `
  <nav id="nav" role="navigation" aria-label="Navigation principale">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo" aria-label="Action Secours Formation – Accueil">
        <img src="logo.png" alt="Logo Action Secours Formation" width="52" height="52" style="height:52px;width:auto;">
        <div class="nav-logo-text">
          <strong>Action Secours Formation</strong>
          <span>Formateur certifié · Paris & Île-de-France</span>
        </div>
      </a>
      <ul class="nav-links" id="navLinks" role="menubar">
        <li><a href="index.html" ${currentPage==='index.html'?'class="active"':''}>Accueil</a></li>
        <li class="nav-dropdown">
          <a href="#" class="nav-dropdown-toggle" onclick="toggleDropdown(event)">
            Formations <span class="nav-arrow">▾</span>
          </a>
          <ul class="nav-dropdown-menu">
            <li><a href="formation-incendie.html" ${currentPage==='formation-incendie.html'?'class="active"':''}>🔥 Formation Incendie</a></li>
            <li><a href="formation-sst.html" ${currentPage==='formation-sst.html'?'class="active"':''}>🩺 Formation SST</a></li>
            <li><a href="formation-dae.html" ${currentPage==='formation-dae.html'?'class="active"':''}>❤️ Gestes qui sauvent / DAE</a></li>
          </ul>
        </li>
        <li><a href="index.html#tarifs">Tarifs</a></li>
        <li>
    <a href="blog.html"
       ${currentPage==='blog.html'?'class="active"':''}>
       Blog
    </a>
</li>
<li><a href="index.html#about">À propos</a></li>
<li><a href="index.html#contact">Contact</a></li>
<li><a href="index.html#contact" class="nav-cta">Demander un devis</a></li>
      </ul>
      <div class="hamburger" id="hamburger" onclick="toggleMenu()" aria-label="Menu" role="button" tabindex="0">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>`;

  const footerHTML = `
  <footer role="contentinfo">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="index.html" style="display:inline-flex;margin-bottom:14px;">
          <img src="logo.png" alt="Action Secours Formation" style="height:60px;width:auto;">
        </a>
        <p>Organisme de formation spécialisé en SST et sécurité incendie, basé en Île-de-France. Formateur certifié, sapeur-pompier volontaire. Déplacement possible partout en France sur demande.</p>
      </div>
      <div>
        <h4>Formations</h4>
        <ul>
          <li><a href="formation-incendie.html">🔥 Formation Incendie</a></li>
          <li><a href="formation-sst.html">🛡️ SST – Formation initiale</a></li>
          <li><a href="formation-sst.html#recyclage">🔄 SST – Recyclage (MAC)</a></li>
          <li><a href="formation-dae.html">❤️ Gestes qui sauvent / DAE</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li><a href="tel:0659038504">📞 06 59 03 85 04</a></li>
          <li><a href="mailto:action.secours.formation@gmail.com">✉️ action.secours.formation@gmail.com</a></li>
          <li><a href="index.html#contact">📋 Formulaire de contact</a></li>
          <li><a href="index.html#about">👤 À propos</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-social-section">

  <p class="footer-social-title">
    Suivez Action Secours Formation
  </p>

  <div class="footer-social-links">

    <a
      href="https://www.linkedin.com/company/action-secours-formation/?viewAsMember=true"
      target="_blank"
      rel="noopener noreferrer"
      class="footer-social-link linkedin"
      aria-label="Suivre Action Secours Formation sur LinkedIn"
    >

      <span class="footer-social-icon">

        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M6.5 8.3H3V21h3.5V8.3ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.7c0-3.8-2-5.6-4.7-5.6-2.2 0-3.1 1.2-3.7 2v-1.8H9.1V21h3.5v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2.1 1.9 2.1 3.4V21H21v-7.3Z"
          />
        </svg>

      </span>

      <span>LinkedIn</span>

    </a>

    <a
      href="https://www.instagram.com/action_secours_formation/"
      target="_blank"
      rel="noopener noreferrer"
      class="footer-social-link instagram"
      aria-label="Suivre Action Secours Formation sur Instagram"
    >

      <span class="footer-social-icon">

        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.7 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
          />
        </svg>

      </span>

      <span>Instagram</span>

    </a>

    <a
      href="https://www.tiktok.com/@action.secours.formation"
      target="_blank"
      rel="noopener noreferrer"
      class="footer-social-link tiktok"
      aria-label="Suivre Action Secours Formation sur TikTok"
    >

      <span class="footer-social-icon">

        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M16.6 3c.3 1.8 1.4 3.1 3.4 3.6v3.1a8.1 8.1 0 0 1-3.4-1v6.5a5.8 5.8 0 1 1-5-5.7v3.2a2.7 2.7 0 1 0 1.8 2.5V3h3.2Z"
          />
        </svg>

      </span>

      <span>TikTok</span>

    </a>

  </div>

</div>
   <div class="footer-bottom">

  <span>
    © 2026 Action Secours Formation – Alexis GALLOIS
  </span>

 <div class="footer-legal-links">

  <a href="mentions-legales.html">
    Mentions légales
  </a>

  <span aria-hidden="true">•</span>

  <a href="politique-confidentialite.html">
    Politique de confidentialité
  </a>

  <span aria-hidden="true">•</span>

  <a href="conditions-generales-vente.html">
    CGV
  </a>

  <span aria-hidden="true">•</span>

  <span>
    Paris · Île-de-France
  </span>

</div>

</div>
  </footer>`;

  // Inject nav before main
  const main = document.querySelector('main');
  if (main) main.insertAdjacentHTML('beforebegin', navHTML);

  // Inject footer after main
  if (main) main.insertAdjacentHTML('afterend', footerHTML);

  // Nav scroll shadow
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');
    if (nav) nav.style.boxShadow = window.scrollY > 20 ? '0 2px 20px rgba(0,0,0,0.08)' : 'none';
  });

  // Mobile menu
  window.toggleMenu = function() {
    document.getElementById('navLinks').classList.toggle('open');
  };
  document.addEventListener('click', (e) => {
    const links = document.getElementById('navLinks');
    if (links && !links.contains(e.target) && !document.getElementById('hamburger')?.contains(e.target)) {
      links.classList.remove('open');
    }
  });

  // Dropdown
  window.toggleDropdown = function(e) {
    e.preventDefault();
    const li = e.currentTarget.parentElement;
    li.classList.toggle('open');
  };

  // Scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  revealEls.forEach(el => observer.observe(el));
});
/* ═══════════════════════════════════════
   CARROUSEL DES AVIS GOOGLE
   ═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  const reviewsSection = document.querySelector(
    '.google-reviews-section'
  );

  if (!reviewsSection) {
    return;
  }

  const track = reviewsSection.querySelector(
    '.google-reviews-track'
  );

  const cards = Array.from(
    reviewsSection.querySelectorAll(
      '.google-review-card'
    )
  );

  const previousButton = reviewsSection.querySelector(
    '.google-review-arrow-left'
  );

  const nextButton = reviewsSection.querySelector(
    '.google-review-arrow-right'
  );

  const dotsContainer = reviewsSection.querySelector(
    '.google-reviews-dots'
  );

  if (
    !track ||
    cards.length === 0 ||
    !previousButton ||
    !nextButton ||
    !dotsContainer
  ) {
    return;
  }

  let currentIndex = 0;
  let visibleCards = getVisibleCards();

  function getVisibleCards() {
    if (window.innerWidth <= 650) {
      return 1;
    }

    if (window.innerWidth <= 900) {
      return 2;
    }

    return 3;
  }

  function getMaximumIndex() {
    return Math.max(
      0,
      cards.length - visibleCards
    );
  }

  function createDots() {
    dotsContainer.innerHTML = '';

    const maximumIndex = getMaximumIndex();

    for (
      let index = 0;
      index <= maximumIndex;
      index += 1
    ) {
      const dot = document.createElement('button');

      dot.type = 'button';
      dot.className = 'google-review-dot';

      dot.setAttribute(
        'aria-label',
        `Afficher l’avis ${index + 1}`
      );

      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });

      dotsContainer.appendChild(dot);
    }
  }

  function updateSlider() {
    const firstCard = cards[0];

    if (!firstCard) {
      return;
    }

    const trackStyle = window.getComputedStyle(track);

    const gap =
      parseFloat(trackStyle.columnGap) ||
      parseFloat(trackStyle.gap) ||
      0;

    const cardWidth =
      firstCard.getBoundingClientRect().width;

    const movement =
      currentIndex * (cardWidth + gap);

    track.style.transform =
      `translateX(-${movement}px)`;

    previousButton.disabled =
      currentIndex === 0;

    nextButton.disabled =
      currentIndex >= getMaximumIndex();

    const dots = dotsContainer.querySelectorAll(
      '.google-review-dot'
    );

    dots.forEach((dot, index) => {
      dot.classList.toggle(
        'active',
        index === currentIndex
      );
    });
  }

  previousButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateSlider();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < getMaximumIndex()) {
      currentIndex += 1;
      updateSlider();
    }
  });

  window.addEventListener('resize', () => {
    const newVisibleCards = getVisibleCards();

    if (newVisibleCards !== visibleCards) {
      visibleCards = newVisibleCards;

      currentIndex = Math.min(
        currentIndex,
        getMaximumIndex()
      );

      createDots();
    }

    updateSlider();
  });

  createDots();
  updateSlider();
});
/* ═══════════════════════════════════════
   CARROUSEL INFINI DES AVIS GOOGLE
════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector(
    '.google-reviews-carousel'
  );

  if (!carousel) {
    return;
  }

  const track = carousel.querySelector(
    '.google-carousel-track'
  );

  const windowElement = carousel.querySelector(
    '.google-carousel-window'
  );

  const previousButton = carousel.querySelector(
    '.google-carousel-prev'
  );

  const nextButton = carousel.querySelector(
    '.google-carousel-next'
  );

  const dotsContainer = document.querySelector(
    '.google-carousel-dots'
  );

  if (
    !track ||
    !windowElement ||
    !previousButton ||
    !nextButton ||
    !dotsContainer
  ) {
    return;
  }

  const originalCards = Array.from(
    track.querySelectorAll('.google-review-card')
  );

  if (originalCards.length === 0) {
    return;
  }

  let visibleCards = getVisibleCards();
  let currentIndex = visibleCards;
  let isMoving = false;
  let autoplayTimer = null;
  let resizeTimer = null;

  const transitionDuration = 500;
  const autoplayDelay = 4000;

  function getVisibleCards() {
    if (window.innerWidth <= 650) {
      return 1;
    }

    if (window.innerWidth <= 900) {
      return 2;
    }

    return 3;
  }

  function createInfiniteTrack() {
    track.innerHTML = '';

    const cardsAtStart = originalCards.slice(
      -visibleCards
    );

    const cardsAtEnd = originalCards.slice(
      0,
      visibleCards
    );

    cardsAtStart.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });

    originalCards.forEach((card) => {
      track.appendChild(card);
    });

    cardsAtEnd.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });

    currentIndex = visibleCards;

    requestAnimationFrame(() => {
      moveTrack(false);
    });
  }

  function getCardWidth() {
    const firstCard = track.querySelector(
      '.google-review-card'
    );

    if (!firstCard) {
      return 0;
    }

    return firstCard.getBoundingClientRect().width;
  }

  function getGap() {
    const trackStyle = window.getComputedStyle(track);

    return (
      parseFloat(trackStyle.columnGap) ||
      parseFloat(trackStyle.gap) ||
      0
    );
  }

  function moveTrack(animate = true) {
    const cardWidth = getCardWidth();
    const gap = getGap();

    track.style.transition = animate
      ? `transform ${transitionDuration}ms ease`
      : 'none';

    const movement =
      currentIndex * (cardWidth + gap);

    track.style.transform =
      `translateX(-${movement}px)`;

    updateDots();
  }

  function getRealIndex() {
    const total = originalCards.length;

    return (
      (currentIndex - visibleCards + total) %
      total
    );
  }

  function createDots() {
    dotsContainer.innerHTML = '';

    originalCards.forEach((card, index) => {
      const dot = document.createElement('button');

      dot.type = 'button';
      dot.className = 'google-carousel-dot';

      dot.setAttribute(
        'aria-label',
        `Afficher l’avis ${index + 1}`
      );

      dot.addEventListener('click', () => {
        if (isMoving) {
          return;
        }

        currentIndex = visibleCards + index;
        isMoving = true;
        moveTrack(true);
        restartAutoplay();
      });

      dotsContainer.appendChild(dot);
    });

    updateDots();
  }

  function updateDots() {
    const realIndex = getRealIndex();

    const dots = dotsContainer.querySelectorAll(
      '.google-carousel-dot'
    );

    dots.forEach((dot, index) => {
      dot.classList.toggle(
        'active',
        index === realIndex
      );
    });
  }

  function goNext() {
    if (isMoving) {
      return;
    }

    isMoving = true;
    currentIndex += 1;
    moveTrack(true);
  }

  function goPrevious() {
    if (isMoving) {
      return;
    }

    isMoving = true;
    currentIndex -= 1;
    moveTrack(true);
  }

  function correctInfinitePosition() {
    const total = originalCards.length;

    if (currentIndex >= total + visibleCards) {
      currentIndex = visibleCards;
      moveTrack(false);
    }

    if (currentIndex < visibleCards) {
      currentIndex = total + visibleCards - 1;
      moveTrack(false);
    }

    isMoving = false;
  }

  function startAutoplay() {
    stopAutoplay();

    autoplayTimer = window.setInterval(() => {
      goNext();
    }, autoplayDelay);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  nextButton.addEventListener('click', () => {
    goNext();
    restartAutoplay();
  });

  previousButton.addEventListener('click', () => {
    goPrevious();
    restartAutoplay();
  });

  track.addEventListener(
    'transitionend',
    correctInfinitePosition
  );

  carousel.addEventListener('mouseenter', stopAutoplay);
  carousel.addEventListener('mouseleave', startAutoplay);

  carousel.addEventListener('focusin', stopAutoplay);
  carousel.addEventListener('focusout', startAutoplay);

  carousel.addEventListener('touchstart', stopAutoplay, {
    passive: true
  });

  carousel.addEventListener('touchend', startAutoplay, {
    passive: true
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);

    resizeTimer = window.setTimeout(() => {
      const newVisibleCards = getVisibleCards();

      if (newVisibleCards !== visibleCards) {
        visibleCards = newVisibleCards;
        createInfiniteTrack();
        createDots();
      } else {
        moveTrack(false);
      }
    }, 150);
  });

  createInfiniteTrack();
  createDots();
  startAutoplay();
});
