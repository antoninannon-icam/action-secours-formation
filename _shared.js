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
        <li><a href="index.html#about">À propos</a></li>
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
    <div class="footer-bottom">
      <span>© 2025 Action Secours Formation – Alexis GALLOIS</span>
      <span>Île-de-France · Partout en France</span>
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
