/* =============================================
   WonderVoyage Admin Portal — admin.js
   ============================================= */

'use strict';

// =====================
// STORAGE KEYS
// =====================
const KEYS = {
  auth:         'wv_admin_auth',
  password:     'wv_admin_pass',
  tours:        'wv_tours',
  availability: 'wv_availability',
  bookings:     'wv_bookings',
  settings:     'wv_settings'
};

// =====================
// DEFAULT TOURS DATA (mirrors tours.js TOURS array, simplified)
// =====================
const TOURS_DEFAULT = [
  {
    id: 1,
    title: "Alpine Adventure Trek",
    location: "Swiss Alps, Switzerland",
    category: "adventure",
    days: 7,
    price: 1299,
    rating: 5.0,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900",
    description: "Embark on the ultimate alpine adventure through Switzerland's most breathtaking mountain landscapes.",
    highlights: [
      "Trek to the Jungfraujoch — Top of Europe",
      "Paragliding over Interlaken",
      "Visit Grindelwald and Lauterbrunnen valleys",
      "Scenic train ride on the Bernina Express",
      "Swiss cheese and chocolate tasting",
      "Stay in mountain lodge with panoramic views",
      "Guided glacier walk on Aletsch Glacier",
      "Fondue dinner with local mountain guides"
    ],
    includes: ["7 nights mountain lodge accommodation", "Daily breakfast + selected meals", "Professional UIAGM-certified mountain guide", "All internal train and cable car passes", "Glacier trek crampons and equipment", "Airport transfers", "Welcome and farewell dinners"],
    excludes: ["International flights", "Travel insurance (required)", "Optional activities", "Personal expenses and tips", "Alcoholic beverages"],
    groupSize: 12,
    difficulty: "Moderate",
    active: true
  },
  {
    id: 2,
    title: "Bali Island Paradise",
    location: "Bali, Indonesia",
    category: "beach",
    days: 10,
    price: 1599,
    rating: 4.5,
    reviews: 214,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900",
    description: "Discover the magical island of Bali — where ancient temples meet pristine beaches and lush rice terraces.",
    highlights: [
      "Private villa with infinity pool overlooking rice fields",
      "Sunrise hike up Mount Batur volcano",
      "Traditional Balinese cooking class in Ubud",
      "Sunset at Tanah Lot sea temple",
      "Surfing lesson at Kuta Beach",
      "Tegalalang Rice Terrace trek",
      "Balinese massage and spa experience",
      "Private beach dinner under the stars"
    ],
    includes: ["10 nights private villa accommodation", "Daily breakfast + selected meals", "Certified surf instructor", "All temple entrance fees", "Mount Batur volcano hike guide", "Nusa Penida day trip by speedboat", "3-hour Balinese spa treatment"],
    excludes: ["International flights", "Travel insurance (required)", "Visa on Arrival ($35)", "Optional diving courses", "Personal shopping expenses"],
    groupSize: 14,
    difficulty: "Easy",
    active: true
  },
  {
    id: 3,
    title: "Japanese Cultural Journey",
    location: "Kyoto & Tokyo, Japan",
    category: "cultural",
    days: 8,
    price: 2199,
    rating: 5.0,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=900",
    description: "Journey through the captivating contrasts of Japan — ancient Kyoto to dazzling Tokyo.",
    highlights: [
      "Private tea ceremony with a kimono-clad tea master",
      "Fushimi Inari shrine thousand torii gates at dawn",
      "Bullet train (Shinkansen) journey Tokyo-Kyoto",
      "Stay in a traditional Japanese Ryokan inn",
      "Arashiyama Bamboo Grove at sunrise",
      "Tsukiji outer market sushi breakfast tour",
      "Nara deer park and Todai-ji temple",
      "Tokyo TeamLab Planets digital art museum"
    ],
    includes: ["4 nights Tokyo boutique hotel", "3 nights traditional Ryokan inn", "Daily breakfast + selected meals", "Shinkansen bullet train pass", "English-speaking cultural guide", "Tea ceremony in private tatami room", "All entrance fees"],
    excludes: ["International flights", "Travel insurance (required)", "Japan Rail Pass upgrade", "Personal shopping expenses"],
    groupSize: 10,
    difficulty: "Easy",
    active: true
  },
  {
    id: 4,
    title: "Dubai Luxury Escape",
    location: "Dubai, UAE",
    category: "luxury",
    days: 6,
    price: 3499,
    rating: 5.0,
    reviews: 97,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900",
    description: "Experience the pinnacle of luxury travel in Dubai — where architectural marvels pierce the sky.",
    highlights: [
      "Stay at the iconic 7-star Burj Al Arab hotel",
      "Private desert safari with Bedouin dinner under stars",
      "Helicopter tour over the Palm Jumeirah and skyline",
      "Burj Khalifa At the Top — world's highest observation deck",
      "Private yacht cruise along Dubai Marina",
      "Gold Souk and Spice Souk walking tour",
      "Ski Dubai — indoor ski resort in the desert",
      "Private chef cooking class at a royal villa"
    ],
    includes: ["6 nights Burj Al Arab (Junior Suite)", "Daily breakfast + selected meals", "Private limousine transfers", "Helicopter city tour (40 min)", "Private desert safari + Bedouin camp dinner", "Burj Khalifa At the Top tickets", "Private yacht cruise (2 hours)"],
    excludes: ["International flights", "Travel insurance (recommended)", "Additional dining and drinks", "Ski equipment rental", "Personal shopping"],
    groupSize: 8,
    difficulty: "Easy",
    active: true
  },
  {
    id: 5,
    title: "Patagonia Wild Expedition",
    location: "Patagonia, Argentina & Chile",
    category: "adventure",
    days: 12,
    price: 2899,
    rating: 4.5,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900",
    description: "Venture to the raw, wind-swept edge of the world where jagged granite towers pierce the sky.",
    highlights: [
      "Trek the legendary W-Circuit in Torres del Paine",
      "Witness the sunrise at the iconic Torres del Paine granite towers",
      "Perito Moreno Glacier ice-trekking with crampons",
      "Kayaking on Lake Grey among floating icebergs",
      "Wildlife watching: condors, pumas, guanacos, and flamingos",
      "Border crossing into Chile via Los Glaciares National Park",
      "Camping under the Milky Way in pristine wilderness",
      "Authentic Argentine asado gaucho dinner"
    ],
    includes: ["4 nights hotel accommodation", "7 nights tented camp accommodation", "All meals during trek", "Professional Patagonia trekking guide", "Crampon ice trek on Perito Moreno", "Kayaking on Lake Grey", "All park entrance fees"],
    excludes: ["International flights", "Travel insurance (required)", "Personal trekking gear", "Optional horseback riding", "Alcoholic beverages"],
    groupSize: 10,
    difficulty: "Challenging",
    active: true
  },
  {
    id: 6,
    title: "Greek Islands Odyssey",
    location: "Santorini, Mykonos & Athens, Greece",
    category: "cultural beach",
    days: 9,
    price: 2099,
    rating: 5.0,
    reviews: 241,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=900",
    description: "Set sail on an unforgettable odyssey through the sun-drenched Greek islands.",
    highlights: [
      "Watch the world-famous Santorini caldera sunset from Oia",
      "Sail the Aegean on a private yacht day trip",
      "Guided tour of the Acropolis and Parthenon",
      "Catamaran cruise around Santorini's caldera",
      "Wine tasting at a Santorini volcanic winery",
      "Mykonos windmills and Little Venice at sunset",
      "Delos island archaeological tour",
      "Greek cooking class with a local family"
    ],
    includes: ["2 nights Athens boutique hotel", "3 nights Santorini clifftop cave hotel", "3 nights Mykonos boutique hotel", "Daily breakfast + selected meals", "Domestic flights", "Santorini-Mykonos ferry tickets", "Caldera catamaran cruise"],
    excludes: ["International flights", "Travel insurance (recommended)", "Optional day trips", "Personal expenses", "Alcoholic beverages"],
    groupSize: 12,
    difficulty: "Easy",
    active: true
  }
];

// =====================
// STATE
// =====================
let currentBookingFilter = 'all';
let currentAvailTourId   = null;
let editingAvailDate     = null; // track if we're editing an existing avail row

// =====================
// AUTH FUNCTIONS
// =====================
function _hashPass(pass) {
  return btoa(unescape(encodeURIComponent('wv_' + pass)));
}

function adminLogin() {
  const user = document.getElementById('loginUser').value.trim();
  const pass = document.getElementById('loginPass').value;
  const errEl = document.getElementById('loginError');

  errEl.style.display = 'none';

  if (user !== 'admin') {
    errEl.textContent = 'Invalid username or password.';
    errEl.style.display = 'block';
    return;
  }

  const stored = localStorage.getItem(KEYS.password) || _hashPass('admin123');
  if (_hashPass(pass) !== stored) {
    errEl.textContent = 'Invalid username or password.';
    errEl.style.display = 'block';
    return;
  }

  sessionStorage.setItem(KEYS.auth, '1');
  showDashboard();
}

function adminLogout() {
  sessionStorage.removeItem(KEYS.auth);
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('loginUser').value = '';
  document.getElementById('loginPass').value = '';
  document.getElementById('loginError').style.display = 'none';
}

function checkSession() {
  if (sessionStorage.getItem(KEYS.auth) === '1') {
    showDashboard();
  } else {
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('dashboard').style.display   = 'none';
  }
}

function showDashboard() {
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('dashboard').style.display   = 'block';
  showSection('dashboard');
}

function togglePassVis() {
  const inp  = document.getElementById('loginPass');
  const icon = document.getElementById('passEyeIcon');
  if (inp.type === 'password') {
    inp.type = 'text';
    icon.className = 'fas fa-eye-slash';
  } else {
    inp.type = 'password';
    icon.className = 'fas fa-eye';
  }
}

// =====================
// DATA FUNCTIONS
// =====================
function getAdminTours() {
  try {
    const raw = localStorage.getItem(KEYS.tours);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch(e) {}
  return JSON.parse(JSON.stringify(TOURS_DEFAULT));
}

function saveAdminTours(tours) {
  localStorage.setItem(KEYS.tours, JSON.stringify(tours));
  showSyncNotice();
}

function getAdminAvailability() {
  try {
    const raw = localStorage.getItem(KEYS.availability);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') return parsed;
    }
  } catch(e) {}
  return {};
}

function saveAdminAvailability(data) {
  localStorage.setItem(KEYS.availability, JSON.stringify(data));
  showSyncNotice();
}

function getAdminBookings() {
  try {
    const raw = localStorage.getItem(KEYS.bookings);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch(e) {}
  return [];
}

function saveAdminBookings(bookings) {
  localStorage.setItem(KEYS.bookings, JSON.stringify(bookings));
  showSyncNotice();
}

function getSettings() {
  try {
    const raw = localStorage.getItem(KEYS.settings);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return { adminEmail: 'admin@wondervoyage.com', password: null };
}

function saveSettings(s) {
  localStorage.setItem(KEYS.settings, JSON.stringify(s));
  showSyncNotice();
}

// =====================
// NAVIGATION
// =====================
const SECTION_TITLES = {
  dashboard:    'Dashboard',
  tours:        'Tours',
  availability: 'Availability',
  bookings:     'Bookings & Orders',
  settings:     'Settings'
};

function showSection(name) {
  // Hide all sections
  document.querySelectorAll('.admin-section').forEach(s => s.style.display = 'none');

  // Show target
  const sec = document.getElementById('sec-' + name);
  if (sec) sec.style.display = 'block';

  // Update sidebar active state
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.toggle('active', item.dataset.section === name);
  });

  // Update page title
  document.getElementById('pageTitle').textContent = SECTION_TITLES[name] || name;

  // Load section data
  switch(name) {
    case 'dashboard':    renderDashboard();           break;
    case 'tours':        renderToursTable();          break;
    case 'availability': renderAvailabilitySection(); break;
    case 'bookings':     renderBookings('all');        break;
    case 'settings':     loadSettingsForm();          break;
  }

  // Close mobile sidebar
  if (window.innerWidth <= 768) {
    document.getElementById('sidebar').classList.remove('open');
    const overlay = document.getElementById('sidebarOverlay');
    if (overlay) overlay.classList.remove('show');
  }
}

// =====================
// SIDEBAR TOGGLE (mobile)
// =====================
function toggleSidebar() {
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('sidebarOverlay');
  const isOpen   = sidebar.classList.contains('open');
  sidebar.classList.toggle('open', !isOpen);
  if (overlay) overlay.classList.toggle('show', !isOpen);
}

// =====================
// DASHBOARD
// =====================
function renderDashboard() {
  const tours    = getAdminTours();
  const bookings = getAdminBookings();

  // Stats
  document.getElementById('stat-tours').textContent    = tours.length;
  document.getElementById('stat-bookings').textContent = bookings.length;

  // Pending
  const pending = bookings.filter(b => (b.status || 'pending') === 'pending');
  document.getElementById('stat-pending').textContent  = pending.length;

  // Update notification badge
  const badge = document.getElementById('notifBadge');
  if (pending.length > 0) {
    badge.textContent = pending.length;
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }

  // This month revenue
  const now   = new Date();
  const month = now.getMonth();
  const year  = now.getFullYear();
  let revenue = 0;
  bookings.forEach(b => {
    if ((b.status || 'pending') === 'cancelled') return;
    if (!b.receivedAt) return;
    const d = new Date(b.receivedAt);
    if (d.getMonth() === month && d.getFullYear() === year) {
      const raw = (b.total_price || '0').toString().replace(/[^0-9.]/g, '');
      revenue += parseFloat(raw) || 0;
    }
  });
  document.getElementById('stat-revenue').textContent = '$' + revenue.toLocaleString();

  // Recent bookings (last 5)
  const recent = [...bookings].slice(0, 5);
  const tbody  = document.getElementById('recentBookingsTbody');
  if (recent.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" class="empty-row">No bookings yet.</td></tr>';
    return;
  }

  tbody.innerHTML = recent.map(b => {
    const status = b.status || 'pending';
    return `<tr>
      <td><strong>${escHtml(b.booking_ref || '')}</strong></td>
      <td>${escHtml(b.guest_name || '')}</td>
      <td class="cell-truncate">${escHtml(b.tour_name || '')}</td>
      <td>${escHtml(b.departure_date || '')}</td>
      <td><strong>${escHtml(b.total_price || '')}</strong></td>
      <td><span class="badge badge-${status}">${capitalize(status)}</span></td>
    </tr>`;
  }).join('');
}

// =====================
// TOURS CRUD
// =====================
function renderToursTable() {
  const tours = getAdminTours();
  const tbody = document.getElementById('toursAdminTbody');

  if (tours.length === 0) {
    tbody.innerHTML = '<tr><td colspan="8" class="empty-row">No tours yet. Click "Add New Tour" to get started.</td></tr>';
    return;
  }

  tbody.innerHTML = tours.map((t, i) => {
    const active = t.active !== false;
    return `<tr>
      <td>${i + 1}</td>
      <td><strong>${escHtml(t.title)}</strong></td>
      <td><span style="text-transform:capitalize">${escHtml(t.category || '')}</span></td>
      <td class="cell-truncate">${escHtml(t.location || '')}</td>
      <td>${t.days || '—'} days</td>
      <td><strong>$${(t.price || 0).toLocaleString()}</strong></td>
      <td>
        <span class="status-dot ${active ? 'dot-active' : 'dot-inactive'}"></span>
        ${active ? 'Active' : 'Inactive'}
      </td>
      <td>
        <div class="table-actions">
          <button class="btn btn-sm" style="background:#0d6efd;color:#fff;" onclick="openTourModal(${t.id})">
            <i class="fas fa-edit"></i> Edit
          </button>
          <button class="btn btn-sm btn-danger" onclick="deleteTour(${t.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>`;
  }).join('');
}

function generateTourId() {
  const tours = getAdminTours();
  if (tours.length === 0) return 1;
  return Math.max(...tours.map(t => t.id || 0)) + 1;
}

function openTourModal(id) {
  const modal = document.getElementById('tourModal');
  const title = document.getElementById('tourModalTitle');

  // Reset form
  document.getElementById('tourForm').reset();
  document.getElementById('tourFormId').value   = '';
  document.getElementById('tourFormError').style.display = 'none';

  if (id === null || id === undefined) {
    // New tour
    title.innerHTML = '<i class="fas fa-plus-circle"></i> Add New Tour';
    document.getElementById('tourFormActive').checked = true;
  } else {
    // Edit existing
    const tours = getAdminTours();
    const tour  = tours.find(t => t.id === id);
    if (!tour) return;

    title.innerHTML = '<i class="fas fa-edit"></i> Edit Tour';

    document.getElementById('tourFormId').value         = tour.id;
    document.getElementById('tourFormTitle').value      = tour.title || '';
    document.getElementById('tourFormLocation').value   = tour.location || '';
    document.getElementById('tourFormCategory').value   = tour.category || 'adventure';
    document.getElementById('tourFormDays').value       = tour.days || '';
    document.getElementById('tourFormPrice').value      = tour.price || '';
    document.getElementById('tourFormGroupSize').value  = tour.groupSize || tour.stats?.groupSize?.replace(/\D/g,'') || '';
    document.getElementById('tourFormDifficulty').value = tour.difficulty || tour.stats?.difficulty || 'Easy';
    document.getElementById('tourFormRating').value     = tour.rating || '5';
    document.getElementById('tourFormReviews').value    = tour.reviews || '';
    document.getElementById('tourFormImage').value      = tour.image || '';
    document.getElementById('tourFormDesc').value       = tour.description || '';

    // Highlights: array to lines
    const hl = tour.highlights || [];
    document.getElementById('tourFormHighlights').value = Array.isArray(hl) ? hl.join('\n') : hl;

    const inc = tour.includes || [];
    document.getElementById('tourFormIncludes').value   = Array.isArray(inc) ? inc.join('\n') : inc;

    const exc = tour.excludes || [];
    document.getElementById('tourFormExcludes').value   = Array.isArray(exc) ? exc.join('\n') : exc;

    document.getElementById('tourFormActive').checked   = tour.active !== false;
  }

  modal.style.display = 'flex';
}

function closeTourModal() {
  document.getElementById('tourModal').style.display = 'none';
}

function saveTour() {
  const errEl = document.getElementById('tourFormError');
  errEl.style.display = 'none';

  const title    = document.getElementById('tourFormTitle').value.trim();
  const location = document.getElementById('tourFormLocation').value.trim();

  if (!title) {
    errEl.textContent = 'Tour Title is required.';
    errEl.style.display = 'block';
    return;
  }
  if (!location) {
    errEl.textContent = 'Location / Destination is required.';
    errEl.style.display = 'block';
    return;
  }

  const idVal    = document.getElementById('tourFormId').value;
  const isNew    = !idVal;
  const id       = isNew ? generateTourId() : parseInt(idVal);

  const hlRaw    = document.getElementById('tourFormHighlights').value;
  const incRaw   = document.getElementById('tourFormIncludes').value;
  const excRaw   = document.getElementById('tourFormExcludes').value;

  const tour = {
    id,
    title,
    location,
    category:    document.getElementById('tourFormCategory').value,
    days:        parseInt(document.getElementById('tourFormDays').value) || 0,
    price:       parseFloat(document.getElementById('tourFormPrice').value) || 0,
    groupSize:   parseInt(document.getElementById('tourFormGroupSize').value) || 0,
    difficulty:  document.getElementById('tourFormDifficulty').value,
    rating:      parseFloat(document.getElementById('tourFormRating').value) || 5,
    reviews:     parseInt(document.getElementById('tourFormReviews').value) || 0,
    image:       document.getElementById('tourFormImage').value.trim(),
    description: document.getElementById('tourFormDesc').value.trim(),
    highlights:  parseLines(hlRaw),
    includes:    parseLines(incRaw),
    excludes:    parseLines(excRaw),
    active:      document.getElementById('tourFormActive').checked,
    // Keep stats object for compatibility with tours.js
    stats: {
      duration:  document.getElementById('tourFormDays').value ? `${document.getElementById('tourFormDays').value} Days` : '',
      groupSize: document.getElementById('tourFormGroupSize').value ? `Max ${document.getElementById('tourFormGroupSize').value}` : '',
      difficulty: document.getElementById('tourFormDifficulty').value
    }
  };

  const tours = getAdminTours();

  if (isNew) {
    tours.push(tour);
  } else {
    const idx = tours.findIndex(t => t.id === id);
    if (idx >= 0) {
      // Preserve itinerary and other deep data from original
      tours[idx] = { ...tours[idx], ...tour };
    } else {
      tours.push(tour);
    }
  }

  saveAdminTours(tours);
  closeTourModal();
  renderToursTable();
}

function deleteTour(id) {
  const tours = getAdminTours();
  const tour  = tours.find(t => t.id === id);
  if (!tour) return;

  if (!confirm(`Delete tour "${tour.title}"?\n\nThis action cannot be undone.`)) return;

  const updated = tours.filter(t => t.id !== id);
  saveAdminTours(updated);
  renderToursTable();
}

function parseLines(str) {
  return str.split('\n').map(l => l.trim()).filter(Boolean);
}

// =====================
// AVAILABILITY
// =====================
// ─────────────────────────────────────────────
//  AVAILABILITY — state
// ─────────────────────────────────────────────
let availCalYear  = new Date().getFullYear();
let availCalMonth = new Date().getMonth();

function renderAvailabilitySection() {
  const tours  = getAdminTours();
  const select = document.getElementById('availTourSelect');

  select.innerHTML = tours.map(t =>
    `<option value="${t.id}">${escHtml(t.title)}</option>`
  ).join('');

  if (tours.length > 0) {
    const firstId = currentAvailTourId && tours.find(t => t.id === currentAvailTourId)
      ? currentAvailTourId : tours[0].id;
    select.value = firstId;
    loadTourAvailability(firstId);
  }
}

// ─────────────────────────────────────────────
//  AVAILABILITY — load & stats
// ─────────────────────────────────────────────
function loadTourAvailability(tourId) {
  currentAvailTourId = tourId;
  renderAvailCalendar();
  renderAvailTable();
  updateAvailStats();
}

function updateAvailStats() {
  const avail = getAdminAvailability();
  const tourData = avail[currentAvailTourId] || {};
  let cntAv = 0, cntLi = 0, cntSo = 0, cntTotal = 0;
  Object.values(tourData).forEach(slots => {
    const arr = normaliseSlots(slots);
    arr.forEach(s => {
      cntTotal++;
      if (s.status === 'available') cntAv++;
      else if (s.status === 'limited') cntLi++;
      else if (s.status === 'sold-out') cntSo++;
    });
  });
  document.getElementById('cnt-available').textContent = cntAv;
  document.getElementById('cnt-limited').textContent   = cntLi;
  document.getElementById('cnt-soldout').textContent   = cntSo;
  document.getElementById('cnt-total').textContent     = cntTotal;
}

// normaliseSlots: always returns an array of slot objects
// handles both old format {status,spots,notes} and new [{...}]
function normaliseSlots(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return [{ slotId: 'legacy', time: '', spots: value.spots || 0, status: value.status || 'available', price: '', notes: value.notes || '' }];
}

// ─────────────────────────────────────────────
//  AVAILABILITY — mini calendar
// ─────────────────────────────────────────────
function renderAvailCalendar() {
  const avail    = getAdminAvailability();
  const tourData = avail[currentAvailTourId] || {};
  const today    = new Date(); today.setHours(0,0,0,0);

  const months   = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  document.getElementById('availCalTitle').textContent = `${months[availCalMonth]} ${availCalYear}`;

  const firstDay    = new Date(availCalYear, availCalMonth, 1).getDay();
  const daysInMonth = new Date(availCalYear, availCalMonth + 1, 0).getDate();
  const dayNames    = ['Su','Mo','Tu','We','Th','Fr','Sa'];

  let html = dayNames.map(d => `<div class="acal-name">${d}</div>`).join('');
  for (let i = 0; i < firstDay; i++) html += `<div class="acal-cell empty"></div>`;

  for (let d = 1; d <= daysInMonth; d++) {
    const key  = `${availCalYear}-${String(availCalMonth+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const slots = normaliseSlots(tourData[key]);
    const isToday = new Date(availCalYear, availCalMonth, d).getTime() === today.getTime();
    let dotsHtml = '';
    if (slots.length > 0) {
      dotsHtml = '<div class="acal-dots">' +
        slots.slice(0,3).map(s => `<span class="dot dot-${s.status === 'sold-out' ? 'so' : s.status === 'limited' ? 'li' : 'av'}"></span>`).join('') +
        (slots.length > 3 ? `<span class="acal-more">+${slots.length-3}</span>` : '') +
        '</div>';
    }
    html += `<div class="acal-cell${isToday ? ' acal-today' : ''}${slots.length ? ' acal-has-slots' : ''}" onclick="filterCalDay('${key}')" title="${key}${slots.length ? ' · '+slots.length+' slot(s)' : ''}">
      <span class="acal-num">${d}</span>${dotsHtml}
    </div>`;
  }
  document.getElementById('availCalGrid').innerHTML = html;
}

function availCalPrev() {
  availCalMonth--;
  if (availCalMonth < 0) { availCalMonth = 11; availCalYear--; }
  renderAvailCalendar();
}
function availCalNext() {
  availCalMonth++;
  if (availCalMonth > 11) { availCalMonth = 0; availCalYear++; }
  renderAvailCalendar();
}
function filterCalDay(dateKey) {
  document.getElementById('availSearch').value = dateKey;
  renderAvailTable();
  document.getElementById('availTbody').closest('.card').scrollIntoView({ behavior:'smooth', block:'start' });
}

// ─────────────────────────────────────────────
//  AVAILABILITY — tab switching
// ─────────────────────────────────────────────
function switchAvailTab(tab, btn) {
  document.querySelectorAll('.avail-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('avail-tab-bulk').style.display   = tab === 'bulk'   ? 'block' : 'none';
  document.getElementById('avail-tab-single').style.display = tab === 'single' ? 'block' : 'none';
}

// ─────────────────────────────────────────────
//  AVAILABILITY — slot row builder
// ─────────────────────────────────────────────
function addSlotRow(builderId, data) {
  const builder = document.getElementById(builderId);
  if (!builder) return;
  const d = data || {};
  const row = document.createElement('div');
  row.className = 'slot-row';
  row.innerHTML = `
    <div class="slot-field">
      <label>Departure Time</label>
      <input type="time" class="slot-time" value="${d.time || '08:00'}" />
    </div>
    <div class="slot-field">
      <label>Spots</label>
      <input type="number" class="slot-spots" min="0" max="999" value="${d.spots !== undefined ? d.spots : 12}" placeholder="12" />
    </div>
    <div class="slot-field">
      <label>Status</label>
      <select class="slot-status">
        <option value="available"${(d.status||'available')==='available'?' selected':''}>Available</option>
        <option value="limited"${d.status==='limited'?' selected':''}>Limited</option>
        <option value="sold-out"${d.status==='sold-out'?' selected':''}>Sold Out</option>
      </select>
    </div>
    <div class="slot-field">
      <label>Price Override ($)</label>
      <input type="number" class="slot-price" min="0" value="${d.price || ''}" placeholder="Default" />
    </div>
    <div class="slot-field slot-notes-field">
      <label>Notes</label>
      <input type="text" class="slot-notes" value="${escHtml(d.notes || '')}" placeholder="e.g. Morning group" />
    </div>
    <button class="slot-remove-btn" type="button" onclick="removeSlotRow(this)" title="Remove slot">
      <i class="fas fa-times"></i>
    </button>`;
  builder.appendChild(row);
}

function removeSlotRow(btn) {
  const row = btn.closest('.slot-row');
  const builder = row.parentElement;
  if (builder.querySelectorAll('.slot-row').length <= 1) {
    alert('At least one time slot is required.'); return;
  }
  row.remove();
}

function getSlotRows(builderId) {
  const rows = document.querySelectorAll(`#${builderId} .slot-row`);
  return Array.from(rows).map(row => ({
    slotId: 'slot_' + Date.now().toString(36) + Math.random().toString(36).slice(2,5),
    time:   row.querySelector('.slot-time').value,
    spots:  parseInt(row.querySelector('.slot-spots').value) || 0,
    status: row.querySelector('.slot-status').value,
    price:  row.querySelector('.slot-price').value || '',
    notes:  row.querySelector('.slot-notes').value.trim()
  }));
}

// ─────────────────────────────────────────────
//  AVAILABILITY — bulk generate
// ─────────────────────────────────────────────
function bulkGenerateSlots() {
  const fromVal   = document.getElementById('bulkFrom').value;
  const toVal     = document.getElementById('bulkTo').value;
  const overwrite = document.getElementById('bulkOverwrite').checked;
  const notes     = document.getElementById('bulkNotes').value.trim();
  const slots     = getSlotRows('bulkSlotsBuilder');

  if (!fromVal || !toVal) { alert('Please select both From and To dates.'); return; }
  if (new Date(fromVal) > new Date(toVal)) { alert('From date must be before To date.'); return; }
  if (slots.length === 0) { alert('Please add at least one time slot.'); return; }

  // Collect checked days-of-week
  const checkedDOW = Array.from(document.querySelectorAll('#bulkDOW input:checked')).map(cb => parseInt(cb.value));
  if (checkedDOW.length === 0) { alert('Please select at least one departure day.'); return; }

  const avail = getAdminAvailability();
  if (!avail[currentAvailTourId]) avail[currentAvailTourId] = {};

  // Attach shared notes to each slot
  const slotsWithNotes = slots.map(s => ({ ...s, notes: s.notes || notes }));

  let generated = 0, skipped = 0;
  const from = new Date(fromVal + 'T00:00:00');
  const to   = new Date(toVal   + 'T00:00:00');

  for (let dt = new Date(from); dt <= to; dt.setDate(dt.getDate() + 1)) {
    if (!checkedDOW.includes(dt.getDay())) continue;
    const key = dt.toISOString().slice(0, 10);
    if (avail[currentAvailTourId][key] && !overwrite) { skipped++; continue; }
    avail[currentAvailTourId][key] = slotsWithNotes.map(s => ({ ...s, slotId: 'slot_' + Date.now().toString(36) + Math.random().toString(36).slice(2,5) }));
    generated++;
  }

  saveAdminAvailability(avail);
  loadTourAvailability(currentAvailTourId);

  const resultEl = document.getElementById('bulkResult');
  resultEl.style.display = 'block';
  resultEl.className = 'bulk-result ' + (generated > 0 ? 'bulk-success' : 'bulk-info');
  resultEl.innerHTML = generated > 0
    ? `<i class="fas fa-check-circle"></i> <strong>${generated}</strong> departure date${generated>1?'s':''} generated successfully!${skipped ? ` (${skipped} skipped — already existed)` : ''}`
    : `<i class="fas fa-info-circle"></i> No new dates were created. ${skipped} date${skipped>1?'s':''} already existed. Check "Overwrite" to replace them.`;
  setTimeout(() => { resultEl.style.display = 'none'; }, 5000);
}

// ─────────────────────────────────────────────
//  AVAILABILITY — single date
// ─────────────────────────────────────────────
function saveSingleDate() {
  const dateVal = document.getElementById('singleDate').value;
  const notes   = document.getElementById('singleNotes').value.trim();
  const slots   = getSlotRows('singleSlotsBuilder');

  if (!dateVal) { alert('Please select a departure date.'); return; }
  if (slots.length === 0) { alert('Please add at least one time slot.'); return; }

  const avail = getAdminAvailability();
  if (!avail[currentAvailTourId]) avail[currentAvailTourId] = {};

  const slotsWithNotes = slots.map(s => ({ ...s, notes: s.notes || notes }));
  avail[currentAvailTourId][dateVal] = slotsWithNotes;

  saveAdminAvailability(avail);
  loadTourAvailability(currentAvailTourId);
  clearSingleForm();
  showSyncNotice('Date saved!');
}

function clearSingleForm() {
  document.getElementById('singleDate').value  = '';
  document.getElementById('singleNotes').value = '';
  const builder = document.getElementById('singleSlotsBuilder');
  builder.innerHTML = '';
  addSlotRow('singleSlotsBuilder');
}

// ─────────────────────────────────────────────
//  AVAILABILITY — table
// ─────────────────────────────────────────────
function renderAvailTable() {
  const avail     = getAdminAvailability();
  const tourData  = avail[currentAvailTourId] || {};
  const search    = (document.getElementById('availSearch')?.value || '').toLowerCase();
  const statusF   = document.getElementById('availFilterStatus')?.value || '';
  const tbody     = document.getElementById('availTbody');

  let dates = Object.keys(tourData).sort();

  // Apply filters
  if (search) dates = dates.filter(d => d.includes(search) ||
    normaliseSlots(tourData[d]).some(s => (s.notes||'').toLowerCase().includes(search)));
  if (statusF) dates = dates.filter(d =>
    normaliseSlots(tourData[d]).some(s => s.status === statusF));

  if (dates.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="empty-row">${
      search || statusF ? 'No slots match your filter.' : 'No departure slots yet. Use Bulk Generate or Single Date above.'
    }</td></tr>`;
    return;
  }

  const rows = [];
  dates.forEach(date => {
    const slots  = normaliseSlots(tourData[date]);
    const fmtDate = new Date(date+'T00:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
    const dow     = new Date(date+'T00:00:00').toLocaleDateString('en-US',{weekday:'short'});
    const tourId  = currentAvailTourId;

    if (statusF) {
      // filtered — only show matching slots
      slots.filter(s => s.status === statusF).forEach(slot => rows.push(slotRow(tourId, date, fmtDate, dow, slot)));
    } else {
      // date header row if multiple slots
      if (slots.length > 1) {
        rows.push(`<tr class="date-group-header">
          <td colspan="7"><i class="fas fa-calendar-day"></i> <strong>${fmtDate}</strong> — ${dow} — ${slots.length} slots</td>
          <td><button class="btn btn-sm btn-danger" onclick="deleteDateAllSlots(${tourId},'${date}')"><i class="fas fa-trash"></i> All</button></td>
        </tr>`);
        slots.forEach(slot => rows.push(slotRow(tourId, date, '', '', slot)));
      } else {
        slots.forEach(slot => rows.push(slotRow(tourId, date, fmtDate, dow, slot)));
      }
    }
  });

  tbody.innerHTML = rows.join('');
}

function slotRow(tourId, date, fmtDate, dow, slot) {
  const statusCls = slot.status === 'sold-out' ? 'soldout' : slot.status;
  const timeDisp  = slot.time ? slot.time : '<span style="color:#bbb">—</span>';
  const priceDisp = slot.price ? `$${slot.price}` : '<span style="color:#bbb">Default</span>';
  return `<tr>
    <td><strong>${fmtDate}</strong></td>
    <td>${dow}</td>
    <td>${timeDisp}</td>
    <td>${slot.spots}</td>
    <td><span class="badge badge-${statusCls}">${statusLabel(slot.status)}</span></td>
    <td>${priceDisp}</td>
    <td class="cell-truncate">${escHtml(slot.notes||'')}</td>
    <td><div class="table-actions">
      <button class="btn btn-sm" style="background:#0d6efd;color:#fff;" onclick="editSlot(${tourId},'${date}','${slot.slotId}')" title="Edit slot"><i class="fas fa-edit"></i></button>
      <button class="btn btn-sm btn-danger" onclick="deleteSlot(${tourId},'${date}','${slot.slotId}')" title="Delete slot"><i class="fas fa-trash"></i></button>
    </div></td>
  </tr>`;
}

function editSlot(tourId, date, slotId) {
  const avail = getAdminAvailability();
  const slots = normaliseSlots((avail[tourId]||{})[date]);
  const slot  = slots.find(s => s.slotId === slotId);
  if (!slot) return;

  const fmtDate = new Date(date + 'T00:00:00').toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });

  document.getElementById('editSlotTourId').value    = tourId;
  document.getElementById('editSlotDate').value      = date;
  document.getElementById('editSlotId').value        = slotId;
  document.getElementById('editSlotDateDisplay').value = fmtDate;
  document.getElementById('editSlotTime').value      = slot.time || '';
  document.getElementById('editSlotSpots').value     = slot.spots !== undefined ? slot.spots : 12;
  document.getElementById('editSlotStatus').value    = slot.status || 'available';
  document.getElementById('editSlotPrice').value     = slot.price || '';
  document.getElementById('editSlotNotes').value     = slot.notes || '';

  document.getElementById('editSlotModal').style.display = 'flex';
}

function closeEditSlotModal() {
  document.getElementById('editSlotModal').style.display = 'none';
}

function saveEditSlotModal() {
  const tourId = parseInt(document.getElementById('editSlotTourId').value);
  const date   = document.getElementById('editSlotDate').value;
  const slotId = document.getElementById('editSlotId').value;

  const avail  = getAdminAvailability();
  const slots  = normaliseSlots((avail[tourId]||{})[date]);
  const idx    = slots.findIndex(s => s.slotId === slotId);
  if (idx < 0) { closeEditSlotModal(); return; }

  slots[idx] = {
    ...slots[idx],
    time:   document.getElementById('editSlotTime').value.trim(),
    spots:  parseInt(document.getElementById('editSlotSpots').value) || 0,
    status: document.getElementById('editSlotStatus').value,
    price:  document.getElementById('editSlotPrice').value || '',
    notes:  document.getElementById('editSlotNotes').value.trim()
  };

  avail[tourId][date] = slots;
  saveAdminAvailability(avail);
  loadTourAvailability(tourId);
  closeEditSlotModal();
  showSyncNotice();
}

function deleteSlot(tourId, date, slotId) {
  if (!confirm('Delete this time slot?')) return;
  const avail = getAdminAvailability();
  const slots = normaliseSlots((avail[tourId]||{})[date]);
  const updated = slots.filter(s => s.slotId !== slotId);
  if (updated.length === 0) {
    delete avail[tourId][date];
  } else {
    avail[tourId][date] = updated;
  }
  saveAdminAvailability(avail);
  loadTourAvailability(tourId);
}

function deleteDateAllSlots(tourId, date) {
  if (!confirm(`Delete ALL slots for ${date}?`)) return;
  const avail = getAdminAvailability();
  if (avail[tourId]) delete avail[tourId][date];
  saveAdminAvailability(avail);
  loadTourAvailability(tourId);
}

function deleteAllForTour() {
  const tours = getAdminTours();
  const tour  = tours.find(t => t.id === currentAvailTourId);
  if (!confirm(`Delete ALL availability slots for "${tour?.title}"?\nThis cannot be undone.`)) return;
  const avail = getAdminAvailability();
  avail[currentAvailTourId] = {};
  saveAdminAvailability(avail);
  loadTourAvailability(currentAvailTourId);
}

// ─────────────────────────────────────────────
//  AVAILABILITY — Create New Session (PDF-style form)
// ─────────────────────────────────────────────

const CSF_DAYS = [
  { dow: 1, abbr: 'Mon', name: 'Monday',    color: '#3b82f6' },
  { dow: 2, abbr: 'Tue', name: 'Tuesday',   color: '#10b981' },
  { dow: 3, abbr: 'Wed', name: 'Wednesday', color: '#8b5cf6' },
  { dow: 4, abbr: 'Thu', name: 'Thursday',  color: '#f59e0b' },
  { dow: 5, abbr: 'Fri', name: 'Friday',    color: '#06b6d4' },
  { dow: 6, abbr: 'Sat', name: 'Saturday',  color: '#ef4444' },
  { dow: 0, abbr: 'Sun', name: 'Sunday',    color: '#6b7280' },
];

function openCreateSession() {
  const panel  = document.getElementById('createSessionPanel');
  const tours  = getAdminTours();
  const select = document.getElementById('csfProduct');

  select.innerHTML = tours.map(t =>
    `<option value="${t.id}">${escHtml(t.title)}</option>`
  ).join('');

  if (currentAvailTourId && tours.find(t => t.id === currentAvailTourId)) {
    select.value = currentAvailTourId;
  }

  csfUpdatePriceTourName();

  document.getElementById('csfCapacity').value  = '12';
  document.getElementById('csfFrom').value      = '';
  document.getElementById('csfTo').value        = '';
  document.getElementById('csfNotes').value     = '';
  document.getElementById('csfPriceAdult').value  = '';
  document.getElementById('csfPriceChild').value  = '';
  document.getElementById('csfPriceInfant').value = '';
  document.getElementById('csfDayBlocks').innerHTML =
    '<p class="csf-hint"><i class="fas fa-arrow-up"></i> Select a date range above to configure departure times per day.</p>';
  document.getElementById('csfCopyRow').style.display = 'none';
  document.getElementById('csfResult').style.display  = 'none';

  panel.style.display = 'block';
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });

  document.getElementById('createSessionBtn').style.display = 'none';
}

function closeCreateSession() {
  document.getElementById('createSessionPanel').style.display = 'none';
  document.getElementById('createSessionBtn').style.display  = '';
}

function csfUpdatePriceTourName() {
  const select = document.getElementById('csfProduct');
  const el     = document.getElementById('csfPriceTourName');
  if (!select || !el) return;
  const opt = select.options[select.selectedIndex];
  el.textContent = opt ? opt.text : '—';
}

function csfUpdateDayBlocks() {
  const from      = document.getElementById('csfFrom').value;
  const to        = document.getElementById('csfTo').value;
  const container = document.getElementById('csfDayBlocks');
  const copyRow   = document.getElementById('csfCopyRow');

  if (!from || !to) {
    container.innerHTML = '<p class="csf-hint"><i class="fas fa-arrow-up"></i> Select a date range above to configure departure times per day.</p>';
    copyRow.style.display = 'none';
    return;
  }

  const fromDate = new Date(from + 'T00:00:00');
  const toDate   = new Date(to   + 'T00:00:00');

  if (fromDate > toDate) {
    container.innerHTML = '<p class="csf-hint csf-hint-error"><i class="fas fa-exclamation-triangle"></i> "From" date must be before "To" date.</p>';
    copyRow.style.display = 'none';
    return;
  }

  // Collect which days-of-week appear in the range (cap at 7 iterations once all found)
  const daysPresent = new Set();
  for (let d = new Date(fromDate); d <= toDate; d.setDate(d.getDate() + 1)) {
    daysPresent.add(d.getDay());
    if (daysPresent.size === 7) break;
  }

  const presentDays = CSF_DAYS.filter(d => daysPresent.has(d.dow));

  container.innerHTML = presentDays.map(d => `
    <div class="csf-day-block" data-dow="${d.dow}">
      <div class="csf-day-header">
        <label class="csf-day-check-label">
          <input type="checkbox" class="csf-day-cb" checked />
          <span class="csf-day-circle" style="background:${d.color}">${d.abbr}</span>
        </label>
        <span class="csf-day-name">${d.name}</span>
      </div>
      <div class="csf-time-slots">
        <div class="csf-time-row">
          <span class="csf-time-lbl">From</span>
          <input type="time" class="csf-time-from" value="08:00" />
          <span class="csf-time-arrow">&#8594;</span>
          <span class="csf-time-lbl">To</span>
          <input type="time" class="csf-time-to" value="17:00" />
          <button class="csf-slot-remove" type="button" onclick="csfRemoveTimeSlot(this)" title="Remove"><i class="fas fa-times"></i></button>
        </div>
      </div>
      <button class="csf-add-slot-btn" type="button" onclick="csfAddTimeSlot(this)">
        <i class="fas fa-plus"></i> Add Slot
      </button>
    </div>
  `).join('');

  copyRow.style.display = presentDays.length > 1 ? 'flex' : 'none';
}

function csfAddTimeSlot(btn) {
  const block     = btn.closest('.csf-day-block');
  const container = block.querySelector('.csf-time-slots');
  const row = document.createElement('div');
  row.className = 'csf-time-row';
  row.innerHTML = `
    <span class="csf-time-lbl">From</span>
    <input type="time" class="csf-time-from" value="14:00" />
    <span class="csf-time-arrow">&#8594;</span>
    <span class="csf-time-lbl">To</span>
    <input type="time" class="csf-time-to" value="23:00" />
    <button class="csf-slot-remove" type="button" onclick="csfRemoveTimeSlot(this)" title="Remove"><i class="fas fa-times"></i></button>
  `;
  container.appendChild(row);
}

function csfRemoveTimeSlot(btn) {
  const row       = btn.closest('.csf-time-row');
  const container = row.parentElement;
  if (container.querySelectorAll('.csf-time-row').length <= 1) {
    alert('At least one time slot is required per day. Uncheck the day instead if you don\'t want it.');
    return;
  }
  row.remove();
}

function csfCopyToSelectedDays() {
  const blocks        = Array.from(document.querySelectorAll('.csf-day-block'));
  const checkedBlocks = blocks.filter(b => b.querySelector('.csf-day-cb').checked);

  if (checkedBlocks.length < 2) {
    alert('Check at least 2 days to use "Copy to Selected Days".');
    return;
  }

  // Read time rows from the FIRST checked block
  const sourceRows = Array.from(checkedBlocks[0].querySelectorAll('.csf-time-row')).map(row => ({
    from: row.querySelector('.csf-time-from').value,
    to:   row.querySelector('.csf-time-to').value
  }));

  // Apply to all OTHER checked blocks
  checkedBlocks.slice(1).forEach(block => {
    const container = block.querySelector('.csf-time-slots');
    container.innerHTML = sourceRows.map(s => `
      <div class="csf-time-row">
        <span class="csf-time-lbl">From</span>
        <input type="time" class="csf-time-from" value="${s.from}" />
        <span class="csf-time-arrow">&#8594;</span>
        <span class="csf-time-lbl">To</span>
        <input type="time" class="csf-time-to" value="${s.to}" />
        <button class="csf-slot-remove" type="button" onclick="csfRemoveTimeSlot(this)" title="Remove"><i class="fas fa-times"></i></button>
      </div>
    `).join('');
  });

  showSyncNotice();
}

function csfCreateAvailability() {
  const tourId   = parseInt(document.getElementById('csfProduct').value);
  const capacity = parseInt(document.getElementById('csfCapacity').value) || 12;
  const from     = document.getElementById('csfFrom').value;
  const to       = document.getElementById('csfTo').value;
  const notes    = document.getElementById('csfNotes').value.trim();
  const priceAdult  = document.getElementById('csfPriceAdult').value || '';
  const priceChild  = document.getElementById('csfPriceChild').value || '';
  const priceInfant = document.getElementById('csfPriceInfant').value || '';

  if (!tourId)      { csfShowResult('error', '<i class="fas fa-exclamation-circle"></i> Please select a product.'); return; }
  if (!from || !to) { csfShowResult('error', '<i class="fas fa-exclamation-circle"></i> Please select a date range.'); return; }
  if (new Date(from + 'T00:00:00') > new Date(to + 'T00:00:00')) {
    csfShowResult('error', '<i class="fas fa-exclamation-circle"></i> "From" date must be before "To" date.');
    return;
  }

  const blocks        = Array.from(document.querySelectorAll('.csf-day-block'));
  const checkedBlocks = blocks.filter(b => b.querySelector('.csf-day-cb').checked);

  if (checkedBlocks.length === 0) {
    csfShowResult('error', '<i class="fas fa-exclamation-circle"></i> Please select at least one departure day.');
    return;
  }

  // Build dow → [{from, to}] map
  const dowMap = {};
  checkedBlocks.forEach(block => {
    const dow  = parseInt(block.dataset.dow);
    const rows = Array.from(block.querySelectorAll('.csf-time-row'));
    dowMap[dow] = rows.map(row => ({
      from: row.querySelector('.csf-time-from').value,
      to:   row.querySelector('.csf-time-to').value
    }));
  });

  const avail    = getAdminAvailability();
  if (!avail[tourId]) avail[tourId] = {};

  let generated = 0;
  const fromDate = new Date(from + 'T00:00:00');
  const toDate   = new Date(to   + 'T00:00:00');

  for (let dt = new Date(fromDate); dt <= toDate; dt.setDate(dt.getDate() + 1)) {
    const dow = dt.getDay();
    if (!(dow in dowMap)) continue;

    const dateKey = dt.toISOString().slice(0, 10);
    const newSlots = dowMap[dow].map(t => ({
      slotId: 'slot_' + Date.now().toString(36) + Math.random().toString(36).slice(2,5),
      time:   t.from + (t.to ? ' - ' + t.to : ''),
      spots:  capacity,
      status: 'available',
      price:  priceAdult,
      priceChild,
      priceInfant,
      notes:  notes
    }));

    if (avail[tourId][dateKey]) {
      avail[tourId][dateKey] = [...normaliseSlots(avail[tourId][dateKey]), ...newSlots];
    } else {
      avail[tourId][dateKey] = newSlots;
    }
    generated++;
  }

  saveAdminAvailability(avail);

  // Sync the tour selector and reload table
  const topSelect = document.getElementById('availTourSelect');
  if (topSelect) topSelect.value = tourId;
  currentAvailTourId = tourId;
  loadTourAvailability(tourId);

  const tourName = document.getElementById('csfProduct').options[document.getElementById('csfProduct').selectedIndex]?.text || '';
  csfShowResult('success',
    `<i class="fas fa-check-circle"></i> <strong>${generated}</strong> departure date${generated !== 1 ? 's' : ''} created for <strong>${escHtml(tourName)}</strong>!`
  );

  setTimeout(() => closeCreateSession(), 3500);
}

function csfShowResult(type, html) {
  const el = document.getElementById('csfResult');
  el.style.display = 'block';
  el.className = 'csf-result csf-result-' + type;
  el.innerHTML = html;
}

function toggleHelpItem(btn) {
  const item    = btn.closest('.help-item');
  const body    = item.querySelector('.help-item-body');
  const chevron = btn.querySelector('.help-chevron');
  const isOpen  = body.style.display === 'block';
  body.style.display      = isOpen ? 'none'  : 'block';
  chevron.style.transform = isOpen ? ''       : 'rotate(180deg)';
}

// ─────────────────────────────────────────────
//  AVAILABILITY — CSV export
// ─────────────────────────────────────────────
function exportAvailabilityCSV() {
  const avail  = getAdminAvailability();
  const tours  = getAdminTours();
  const rows   = ['Tour ID,Tour Name,Date,Time,Status,Spots Available,Price Override,Notes'];

  Object.entries(avail).forEach(([tid, dates]) => {
    const tourId   = parseInt(tid);
    const tour     = tours.find(t => t.id === tourId);
    const tourName = tour ? tour.title : `Tour ${tourId}`;

    Object.entries(dates).sort(([a],[b]) => a.localeCompare(b)).forEach(([date, value]) => {
      normaliseSlots(value).forEach(slot => {
        rows.push([
          tourId, csvEscape(tourName), date,
          slot.time || '',
          slot.status || 'available',
          slot.spots !== undefined ? slot.spots : '',
          slot.price || '',
          csvEscape(slot.notes || '')
        ].join(','));
      });
    });
  });

  downloadCSV('availability_export.csv', rows.join('\n'));
}

// =====================
// BOOKINGS
// =====================
function setBookingFilter(filter, btn) {
  currentBookingFilter = filter;
  document.querySelectorAll('.btn-filter').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderBookings(filter);
}

function renderBookings(filter) {
  currentBookingFilter = filter || 'all';
  const bookings  = getAdminBookings();
  const search    = (document.getElementById('bookingSearch')?.value || '').toLowerCase().trim();
  const tbody     = document.getElementById('bookingsTbody');

  let filtered = bookings;

  if (currentBookingFilter !== 'all') {
    filtered = filtered.filter(b => (b.status || 'pending') === currentBookingFilter);
  }

  if (search) {
    filtered = filtered.filter(b =>
      (b.guest_name   || '').toLowerCase().includes(search) ||
      (b.guest_email  || '').toLowerCase().includes(search) ||
      (b.tour_name    || '').toLowerCase().includes(search) ||
      (b.booking_ref  || '').toLowerCase().includes(search) ||
      (b.guest_phone  || '').toLowerCase().includes(search)
    );
  }

  // Update notification badge
  const allPending = bookings.filter(b => (b.status || 'pending') === 'pending').length;
  const badge = document.getElementById('notifBadge');
  if (badge) {
    if (allPending > 0) { badge.textContent = allPending; badge.style.display = 'flex'; }
    else badge.style.display = 'none';
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="11" class="empty-row">No bookings found${search ? ' for "' + escHtml(search) + '"' : ''}.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(b => {
    const status    = b.status || 'pending';
    const received  = b.receivedAt ? new Date(b.receivedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—';
    const travelers = b.total_travelers !== undefined ? b.total_travelers : '—';

    return `<tr>
      <td><strong>${escHtml(b.booking_ref || '')}</strong></td>
      <td style="white-space:nowrap">${received}</td>
      <td style="white-space:nowrap">${escHtml(b.guest_name || '')}</td>
      <td class="cell-truncate">${escHtml(b.guest_email || '')}</td>
      <td>${escHtml(b.guest_phone || '')}</td>
      <td class="cell-truncate">${escHtml(b.tour_name || '')}</td>
      <td style="white-space:nowrap">${escHtml(b.departure_date || '')}</td>
      <td style="text-align:center">${travelers}</td>
      <td><strong>${escHtml(b.total_price || '')}</strong></td>
      <td><span class="badge badge-${status === 'cancelled' ? 'cancelled' : status}">${capitalize(status)}</span></td>
      <td>
        <div class="table-actions">
          <button class="btn btn-sm" style="background:#0d6efd;color:#fff;" onclick="viewBooking('${escAttr(b.booking_ref || '')}')">
            <i class="fas fa-eye"></i> View
          </button>
          <select class="action-status-select" onchange="updateBookingStatus('${escAttr(b.booking_ref || '')}', this.value)">
            <option value="pending"   ${status==='pending'   ? 'selected':''}>Pending</option>
            <option value="confirmed" ${status==='confirmed' ? 'selected':''}>Confirmed</option>
            <option value="cancelled" ${status==='cancelled' ? 'selected':''}>Cancelled</option>
          </select>
        </div>
      </td>
    </tr>`;
  }).join('');
}

function viewBooking(ref) {
  const bookings = getAdminBookings();
  const b = bookings.find(bk => bk.booking_ref === ref);
  if (!b) return;

  const status   = b.status || 'pending';
  const received = b.receivedAt ? new Date(b.receivedAt).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short' }) : '—';

  const body = document.getElementById('bookingDetailBody');
  body.innerHTML = `
    <div class="booking-detail-section">
      <h4><i class="fas fa-tag"></i> Booking Reference</h4>
      <div class="booking-detail-grid">
        <div class="booking-detail-row">
          <label>Reference</label>
          <span><strong>${escHtml(b.booking_ref || '')}</strong></span>
        </div>
        <div class="booking-detail-row">
          <label>Date Received</label>
          <span>${received}</span>
        </div>
        <div class="booking-detail-row">
          <label>Status</label>
          <span><span class="badge badge-${status === 'cancelled' ? 'cancelled' : status}">${capitalize(status)}</span></span>
        </div>
        <div class="booking-detail-row">
          <label>Booking Date</label>
          <span>${escHtml(b.booking_date || '—')}</span>
        </div>
      </div>
    </div>

    <div class="booking-detail-section">
      <h4><i class="fas fa-map-marked-alt"></i> Tour Details</h4>
      <div class="booking-detail-grid">
        <div class="booking-detail-row">
          <label>Tour</label>
          <span>${escHtml(b.tour_name || '—')}</span>
        </div>
        <div class="booking-detail-row">
          <label>Destination</label>
          <span>${escHtml(b.destination || '—')}</span>
        </div>
        <div class="booking-detail-row">
          <label>Category</label>
          <span>${escHtml(b.category || '—')}</span>
        </div>
        <div class="booking-detail-row">
          <label>Duration</label>
          <span>${escHtml(b.duration || '—')}</span>
        </div>
        <div class="booking-detail-row">
          <label>Departure Date</label>
          <span>${escHtml(b.departure_date || '—')}</span>
        </div>
        <div class="booking-detail-row">
          <label>Return Date</label>
          <span>${escHtml(b.return_date || '—')}</span>
        </div>
      </div>
    </div>

    <div class="booking-detail-section">
      <h4><i class="fas fa-users"></i> Travelers</h4>
      <div class="booking-detail-grid">
        <div class="booking-detail-row">
          <label>Adults</label>
          <span>${escHtml(String(b.adults ?? '—'))}</span>
        </div>
        <div class="booking-detail-row">
          <label>Children</label>
          <span>${escHtml(String(b.children ?? '0'))}</span>
        </div>
        <div class="booking-detail-row">
          <label>Infants</label>
          <span>${escHtml(String(b.infants ?? '0'))}</span>
        </div>
        <div class="booking-detail-row">
          <label>Total Travelers</label>
          <span>${escHtml(String(b.total_travelers ?? '—'))}</span>
        </div>
      </div>
    </div>

    <div class="booking-detail-section">
      <h4><i class="fas fa-dollar-sign"></i> Pricing</h4>
      <div class="booking-detail-grid">
        <div class="booking-detail-row">
          <label>Price per Person</label>
          <span>${escHtml(b.price_per_person || '—')}</span>
        </div>
        <div class="booking-detail-row">
          <label>Total Price</label>
          <span><strong>${escHtml(b.total_price || '—')}</strong></span>
        </div>
        <div class="booking-detail-row" style="grid-column:1/-1">
          <label>Breakdown</label>
          <span style="white-space:pre-line">${escHtml(b.pax_breakdown || '—')}</span>
        </div>
      </div>
    </div>

    <div class="booking-detail-section">
      <h4><i class="fas fa-user"></i> Guest Information</h4>
      <div class="booking-detail-grid">
        <div class="booking-detail-row">
          <label>Name</label>
          <span>${escHtml(b.guest_name || '—')}</span>
        </div>
        <div class="booking-detail-row">
          <label>Email</label>
          <span>${escHtml(b.guest_email || '—')}</span>
        </div>
        <div class="booking-detail-row">
          <label>Phone</label>
          <span>${escHtml(b.guest_phone || '—')}</span>
        </div>
        <div class="booking-detail-row">
          <label>Nationality</label>
          <span>${escHtml(b.guest_nationality || '—')}</span>
        </div>
        <div class="booking-detail-row">
          <label>Heard From</label>
          <span>${escHtml(b.heard_from || '—')}</span>
        </div>
        <div class="booking-detail-row">
          <label>Special Requests</label>
          <span>${escHtml(b.special_requests || 'None')}</span>
        </div>
      </div>
    </div>

    <div class="booking-status-change">
      <label>Change Status:</label>
      <select id="detailStatusSelect" onchange="updateBookingStatus('${escAttr(b.booking_ref || '')}', this.value); closeBookingModal();">
        <option value="pending"   ${status==='pending'   ? 'selected':''}>Pending</option>
        <option value="confirmed" ${status==='confirmed' ? 'selected':''}>Confirmed</option>
        <option value="cancelled" ${status==='cancelled' ? 'selected':''}>Cancelled</option>
      </select>
    </div>
  `;

  // Set reply button
  const replyBtn = document.getElementById('bookingReplyBtn');
  const subject  = encodeURIComponent(`Re: Booking ${b.booking_ref || ''} — ${b.tour_name || ''}`);
  const bodyTxt  = encodeURIComponent(`Dear ${b.guest_name || 'Guest'},\n\nThank you for booking ${b.tour_name || 'your tour'} with WonderVoyage.\n\nBooking Reference: ${b.booking_ref || ''}\nDeparture: ${b.departure_date || ''}\n\nBest regards,\nWonderVoyage Team`);
  replyBtn.onclick = () => {
    window.location.href = `mailto:${b.guest_email || ''}?subject=${subject}&body=${bodyTxt}`;
  };

  document.getElementById('bookingDetailModal').style.display = 'flex';
}

function closeBookingModal() {
  document.getElementById('bookingDetailModal').style.display = 'none';
}

function updateBookingStatus(ref, newStatus) {
  const bookings = getAdminBookings();
  const idx      = bookings.findIndex(b => b.booking_ref === ref);
  if (idx < 0) return;

  bookings[idx].status = newStatus;
  saveAdminBookings(bookings);
  renderBookings(currentBookingFilter);
}

function filterBookings(term) {
  renderBookings(currentBookingFilter);
}

function exportBookingsCSV() {
  const bookings = getAdminBookings();
  if (bookings.length === 0) {
    alert('No bookings to export.');
    return;
  }

  const headers = [
    'Booking Ref', 'Date Received', 'Status',
    'Guest Name', 'Email', 'Phone', 'Nationality',
    'Tour', 'Destination', 'Category', 'Duration',
    'Departure Date', 'Return Date',
    'Adults', 'Children', 'Infants', 'Total Travelers',
    'Price Per Person', 'Total Price', 'Pax Breakdown',
    'Heard From', 'Special Requests'
  ];

  const rows = [headers.join(',')];

  bookings.forEach(b => {
    rows.push([
      csvEscape(b.booking_ref     || ''),
      csvEscape(b.receivedAt ? new Date(b.receivedAt).toLocaleDateString('en-US') : ''),
      csvEscape(b.status          || 'pending'),
      csvEscape(b.guest_name      || ''),
      csvEscape(b.guest_email     || ''),
      csvEscape(b.guest_phone     || ''),
      csvEscape(b.guest_nationality || ''),
      csvEscape(b.tour_name       || ''),
      csvEscape(b.destination     || ''),
      csvEscape(b.category        || ''),
      csvEscape(b.duration        || ''),
      csvEscape(b.departure_date  || ''),
      csvEscape(b.return_date     || ''),
      b.adults            ?? '',
      b.children          ?? '',
      b.infants           ?? '',
      b.total_travelers   ?? '',
      csvEscape(b.price_per_person || ''),
      csvEscape(b.total_price      || ''),
      csvEscape(b.pax_breakdown    || ''),
      csvEscape(b.heard_from       || ''),
      csvEscape(b.special_requests || '')
    ].join(','));
  });

  downloadCSV('bookings_export.csv', rows.join('\n'));
}

function clearAllBookings() {
  const count = getAdminBookings().length;
  if (count === 0) {
    alert('There are no bookings to clear.');
    return;
  }

  if (!confirm(`Are you sure you want to permanently delete ALL ${count} booking(s)?\n\nThis action CANNOT be undone.`)) return;
  if (!confirm('Last warning: this will delete all booking records. Proceed?')) return;

  localStorage.setItem(KEYS.bookings, JSON.stringify([]));
  showSyncNotice();
  renderBookings('all');
  alert('All bookings have been cleared.');
}

// =====================
// SETTINGS
// =====================
function loadSettingsForm() {
  const s = getSettings();
  document.getElementById('settingAdminEmail').value = s.adminEmail || 'admin@wondervoyage.com';
  document.getElementById('settingCurrentPass').value  = '';
  document.getElementById('settingNewPass').value      = '';
  document.getElementById('settingConfirmPass').value  = '';

  const pMsg = document.getElementById('passSettingMsg');
  const eMsg = document.getElementById('emailSettingMsg');
  if (pMsg) pMsg.style.display = 'none';
  if (eMsg) eMsg.style.display = 'none';
}

function savePasswordSetting() {
  const msgEl   = document.getElementById('passSettingMsg');
  const current = document.getElementById('settingCurrentPass').value;
  const newPass = document.getElementById('settingNewPass').value;
  const confirm = document.getElementById('settingConfirmPass').value;

  msgEl.style.display = 'none';
  msgEl.className = 'settings-msg';

  // Validate current password
  const storedHash = localStorage.getItem(KEYS.password) || _hashPass('admin123');
  if (_hashPass(current) !== storedHash) {
    msgEl.textContent = 'Current password is incorrect.';
    msgEl.classList.add('error');
    msgEl.style.display = 'block';
    return;
  }

  if (newPass.length < 6) {
    msgEl.textContent = 'New password must be at least 6 characters.';
    msgEl.classList.add('error');
    msgEl.style.display = 'block';
    return;
  }

  if (newPass !== confirm) {
    msgEl.textContent = 'New passwords do not match.';
    msgEl.classList.add('error');
    msgEl.style.display = 'block';
    return;
  }

  localStorage.setItem(KEYS.password, _hashPass(newPass));
  showSyncNotice();

  msgEl.textContent = 'Password updated successfully!';
  msgEl.classList.add('success');
  msgEl.style.display = 'block';

  document.getElementById('settingCurrentPass').value = '';
  document.getElementById('settingNewPass').value     = '';
  document.getElementById('settingConfirmPass').value = '';
}

function saveEmailSetting() {
  const msgEl = document.getElementById('emailSettingMsg');
  const email = document.getElementById('settingAdminEmail').value.trim();

  msgEl.style.display = 'none';
  msgEl.className = 'settings-msg';

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msgEl.textContent = 'Please enter a valid email address.';
    msgEl.classList.add('error');
    msgEl.style.display = 'block';
    return;
  }

  const s = getSettings();
  s.adminEmail = email;
  saveSettings(s);

  msgEl.textContent = 'Admin email saved!';
  msgEl.classList.add('success');
  msgEl.style.display = 'block';
}

// =====================
// SYNC NOTICE
// =====================
let syncNoticeTimer = null;

function showSyncNotice() {
  const el = document.getElementById('syncNotice');
  if (!el) return;

  el.style.display = 'flex';

  if (syncNoticeTimer) clearTimeout(syncNoticeTimer);
  syncNoticeTimer = setTimeout(() => {
    el.style.display = 'none';
  }, 2200);
}

// =====================
// CSV UTILITIES
// =====================
function csvEscape(str) {
  const s = String(str);
  if (s.includes(',') || s.includes('"') || s.includes('\n')) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

function downloadCSV(filename, content) {
  const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// =====================
// HTML HELPERS
// =====================
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escAttr(str) {
  return String(str).replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function statusLabel(s) {
  if (s === 'available')  return 'Available';
  if (s === 'limited')    return 'Limited';
  if (s === 'sold-out')   return 'Sold Out';
  return capitalize(s);
}

// =====================
// INIT
// =====================
document.addEventListener('DOMContentLoaded', () => {
  // Ensure default password is set
  if (!localStorage.getItem(KEYS.password)) {
    localStorage.setItem(KEYS.password, _hashPass('admin123'));
  }

  // Prime tours storage with defaults if empty
  if (!localStorage.getItem(KEYS.tours)) {
    localStorage.setItem(KEYS.tours, JSON.stringify(TOURS_DEFAULT));
  }

  // Check session
  checkSession();

  // Create sidebar overlay for mobile
  const overlay = document.createElement('div');
  overlay.id = 'sidebarOverlay';
  overlay.className = 'sidebar-overlay';
  overlay.onclick = toggleSidebar;
  document.body.appendChild(overlay);
});
