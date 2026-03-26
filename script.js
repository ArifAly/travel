// =====================
// NAVBAR SCROLL
// =====================
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
    backToTop.classList.add('visible');
  } else {
    navbar.classList.remove('scrolled');
    backToTop.classList.remove('visible');
  }
});

// =====================
// HAMBURGER MENU
// =====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// =====================
// TOUR FILTERS
// =====================
const filterBtns = document.querySelectorAll('.filter-btn');
const tourCards = document.querySelectorAll('.tour-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    // Clear any active search when using category filters
    clearSearchBanner();

    tourCards.forEach(card => {
      const category = card.dataset.category || '';
      if (filter === 'all' || category.includes(filter)) {
        card.style.display = 'block';
        card.style.animation = 'fadeIn 0.4s ease';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// =====================
// HERO SEARCH
// =====================
function handleSearch() {
  const query = document.getElementById('searchDestination').value.trim().toLowerCase();
  const date = document.getElementById('searchDate').value;
  const guests = document.getElementById('searchGuests').value;
  const banner = document.getElementById('searchResultBanner');
  const toursSection = document.getElementById('tours');

  // Reset category filter buttons to "All"
  filterBtns.forEach(b => b.classList.remove('active'));
  document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');

  let matchCount = 0;

  tourCards.forEach(card => {
    const location = (card.dataset.location || '').toLowerCase();
    const title = (card.dataset.title || '').toLowerCase();
    const category = (card.dataset.category || '').toLowerCase();

    const matchesQuery = !query ||
      location.includes(query) ||
      title.includes(query) ||
      category.includes(query);

    if (matchesQuery) {
      card.style.display = 'block';
      card.style.animation = 'fadeIn 0.5s ease';
      matchCount++;
    } else {
      card.style.display = 'none';
    }
  });

  // Build banner message
  let msg = '';
  if (query || date || guests) {
    const parts = [];
    if (query) parts.push(`<strong>"${escapeHtml(query)}"</strong>`);
    if (date) parts.push(`date <strong>${formatDate(date)}</strong>`);
    if (guests) parts.push(`<strong>${guests === '6' ? '6+' : guests} person(s)</strong>`);

    if (matchCount > 0) {
      msg = `<i class="fas fa-check-circle"></i> Found <strong>${matchCount}</strong> tour${matchCount !== 1 ? 's' : ''} matching ${parts.join(', ')}
             <button class="clear-search-btn" onclick="clearSearch()"><i class="fas fa-times"></i> Clear</button>`;
      banner.className = 'search-result-banner found';
    } else {
      msg = `<i class="fas fa-info-circle"></i> No tours found for ${parts.join(', ')}. Showing all tours.
             <button class="clear-search-btn" onclick="clearSearch()"><i class="fas fa-times"></i> Clear</button>`;
      banner.className = 'search-result-banner not-found';
      // Show all cards if nothing matched
      tourCards.forEach(card => {
        card.style.display = 'block';
        card.style.animation = 'fadeIn 0.4s ease';
      });
    }
    banner.innerHTML = msg;
    banner.style.display = 'flex';
  } else {
    clearSearchBanner();
  }

  // Scroll to tours section
  toursSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function clearSearch() {
  document.getElementById('searchDestination').value = '';
  document.getElementById('searchDate').value = '';
  document.getElementById('searchGuests').value = '';
  clearSearchBanner();
  tourCards.forEach(card => {
    card.style.display = 'block';
    card.style.animation = 'fadeIn 0.4s ease';
  });
  filterBtns.forEach(b => b.classList.remove('active'));
  document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
}

function clearSearchBanner() {
  const banner = document.getElementById('searchResultBanner');
  if (banner) {
    banner.style.display = 'none';
    banner.innerHTML = '';
  }
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Allow pressing Enter in destination input to trigger search
document.addEventListener('DOMContentLoaded', () => {
  const destInput = document.getElementById('searchDestination');
  if (destInput) {
    destInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') handleSearch();
    });
  }
});

// =====================
// SCROLL ANIMATIONS
// =====================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
  .tour-card, .dest-card, .feature-card, .testimonial-card, .stat-item {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .tour-card.animate-in, .dest-card.animate-in, .feature-card.animate-in,
  .testimonial-card.animate-in, .stat-item.animate-in {
    opacity: 1;
    transform: translateY(0);
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

document.querySelectorAll('.tour-card, .dest-card, .feature-card, .testimonial-card, .stat-item').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  observer.observe(el);
});

// =====================
// COUNTER ANIMATION
// =====================
function animateCounter(el, target, suffix = '') {
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString() + suffix;
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statItems = entry.target.querySelectorAll('.stat-item h3');
      statItems.forEach(el => {
        const text = el.textContent;
        const num = parseInt(text.replace(/[^0-9]/g, ''));
        const suffix = text.replace(/[0-9,]/g, '');
        el.textContent = '0';
        animateCounter(el, num, suffix);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) statsObserver.observe(statsSection);

// =====================
// FORMS
// =====================
function handleNewsletter(e) {
  e.preventDefault();
  const input = e.target.querySelector('input');
  const btn = e.target.querySelector('button');
  btn.textContent = 'Subscribed!';
  btn.style.background = '#27ae60';
  input.value = '';
  setTimeout(() => {
    btn.textContent = 'Subscribe';
    btn.style.background = '';
  }, 3000);
}

function handleContact(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const originalHTML = btn.innerHTML;
  btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
  btn.style.background = '#27ae60';
  e.target.reset();
  setTimeout(() => {
    btn.innerHTML = originalHTML;
    btn.style.background = '';
  }, 4000);
}

// =====================
// ACTIVE NAV LINKS
// =====================
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });
  navAnchors.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === `#${current}`) {
      if (navbar.classList.contains('scrolled')) {
        a.style.color = 'var(--primary)';
      }
    }
  });
});
