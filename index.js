// ════════════════════════════════════════════════════
//  FINETURA — PORTFOLIO ENGINE
//  Clean Four-Tab Navigation System
// ════════════════════════════════════════════════════

// ────────────────────────────────────────────────────
//  TAB NAVIGATION SYSTEM
// ────────────────────────────────────────────────────
const TABS = ['tab-1', 'tab-2', 'tab-3', 'tab-4'];
let currentTab = 'tab-1';

function showTab(targetId) {
    TABS.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (id === targetId) {
            el.classList.add('active-tab');
        } else {
            el.classList.remove('active-tab');
        }
    });
    currentTab = targetId;

    // Show footer only on tab-4
    const footer = document.getElementById('site-footer');
    if (footer) {
        footer.style.display = (targetId === 'tab-4') ? 'block' : 'none';
    }

    // Scroll to top when switching
    window.scrollTo({ top: 0, behavior: 'instant' });
}

// ────────────────────────────────────────────────────
//  INIT — Single DOMContentLoaded
// ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initHero();
    initNavButtons();
    initOptionBubbles();
    initKeyboardClose();
    showTab('tab-1');
    switchTab('projects');
});

// ────────────────────────────────────────────────────
//  1. HERO — Gemini card reveal
// ────────────────────────────────────────────────────
function initHero() {
    const trigger = document.getElementById('gemini-trigger');
    const hero = document.getElementById('tab-1');
    if (!trigger || !hero) return;

    trigger.addEventListener('click', () => {
        hero.classList.add('cards-revealed');
    });
}

// ────────────────────────────────────────────────────
//  2. NAVIGATION BUTTONS (forward / back)
// ────────────────────────────────────────────────────
function initNavButtons() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            if (target) {
                showTab(target);
            }
        });
    });
}

// ────────────────────────────────────────────────────
//  3. OPTION BUBBLES (Tab 3 → Tab 4)
// ────────────────────────────────────────────────────
function initOptionBubbles() {
    document.querySelectorAll('.option-bubble').forEach(bubble => {
        bubble.addEventListener('click', () => {
            const option = bubble.dataset.option;
            if (option) {
                switchTab(option);
                showTab('tab-4');
            }
        });
    });
}

// ────────────────────────────────────────────────────
//  4. PORTAL TAB SWITCHER (inside Tab 4)
// ────────────────────────────────────────────────────
function switchTab(tabId) {
    document.querySelectorAll('.portal-nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.portal-panel').forEach(panel => panel.classList.remove('active'));

    const activeBtn   = document.getElementById(`btn-tab-${tabId}`);
    const activePanel = document.getElementById(`tab-${tabId}`);
    if (activeBtn) activeBtn.classList.add('active');
    if (activePanel) activePanel.classList.add('active');
}

// ────────────────────────────────────────────────────
//  5. CARD TOGGLE (slide up / down)
// ────────────────────────────────────────────────────
function toggleCard(cardEl) {
    const deck  = cardEl.parentElement;
    const cards = deck.querySelectorAll('.deal-card, .modal-deal-card');

    if (cardEl.classList.contains('is-slid-up')) {
        cardEl.classList.remove('is-slid-up');
    } else {
        cards.forEach(c => c.classList.remove('is-slid-up'));
        cardEl.classList.add('is-slid-up');
    }
}

// ────────────────────────────────────────────────────
//  6. PROJECT DATABASE
// ────────────────────────────────────────────────────
const PROJECTS = {
    'bamboo-bottle': {
        title: 'Bamboo Wellness Vessel',
        rawImg: 'Images/Bamboo_Bottle/Sample.webp',
        rawMeta: 'PLASTIC BACKGROUND • HARSH FLUORESCENT GLARE • REFLECTION ARTIFACTS',
        logs: [
            'Analyzing cylindrical bamboo fiber volume & density...',
            'Extracting surface glare & balancing ambient exposure...',
            'Staging premium outdoor river stones & foliage backdrop...',
            'Applying morning sun ray shadow filters & caustics...',
            'Finalizing high-end studio advertising rendering...'
        ],
        techNote: 'Isolates bamboo wood surface textures, cleans up reflective light artifacts, and stages inside luxury outdoor river stone arrangement.',
        gallery: [
            { src: 'Images/Bamboo_Bottle/Sample.webp', label: 'Raw Capture', isRaw: true },
            { src: 'Images/Bamboo_Bottle/Bamboo_1.png', label: 'Ad Variant 1' },
            { src: 'Images/Bamboo_Bottle/Bamboo_2.png', label: 'Ad Variant 2' },
            { src: 'Images/Bamboo_Bottle/Bamboo_3.png', label: 'Ad Variant 3' },
            { src: 'Images/Bamboo_Bottle/Bamboo_4.png', label: 'Ad Variant 4' }
        ]
    },
    'leaf-plates': {
        title: 'Bio-Degradable Platter',
        rawImg: 'Images/Leaf_Plates/Sample.jpg',
        rawMeta: 'OVEREXPOSED DIRECT SUNLIGHT • DISTRACTING GRASS GROUND • HARSH SHADOWS',
        logs: [
            'Initializing deep plate surface edge extraction...',
            'Compiling raw leaf plate reflection index... Balanced.',
            'Synthesizing high-end organic linen backdrop...',
            'Applying micro-shadow maps beneath plate borders...',
            'Composing premium rustic background (F/1.8 lens simulated).'
        ],
        techNote: 'Isolates leafy micro-textures, filters harsh highlights, and synthesizes premium catering placements with warm wood details.',
        gallery: [
            { src: 'Images/Leaf_Plates/Sample.jpg', label: 'Raw Capture', isRaw: true },
            { src: 'Images/Leaf_Plates/Plate_1.png', label: 'Ad Variant 1' },
            { src: 'Images/Leaf_Plates/Plate_2.png', label: 'Ad Variant 2' },
            { src: 'Images/Leaf_Plates/Plate_3.png', label: 'Ad Variant 3' },
            { src: 'Images/Leaf_Plates/Plate_4.png', label: 'Ad Variant 4' }
        ]
    },
    'masala-box': {
        title: 'Artisanal Spice Container',
        rawImg: 'Images/Masala_Box/Sample.png',
        rawMeta: 'FLAT COMPARTMENT VIEW • DULL INDOOR ILLUMINATION • TEXTURELESS BASE',
        logs: [
            'Tracing circular glass/plastic partition compartments...',
            'Reconstructing textured teak wood base paneling...',
            'Injecting high-speed volumetric spice explosion layers...',
            'Synthesizing motion blur & physical particle drag indices...',
            'Applying high-contrast golden studio backlight gradients.'
        ],
        techNote: 'Extracts box compartments, generates organic wood grain finishes, and composites dynamic floating spice particle explosions.',
        gallery: [
            { src: 'Images/Masala_Box/Sample.png', label: 'Raw Capture', isRaw: true },
            { src: 'Images/Masala_Box/Masala_1.png', label: 'Ad Variant 1' },
            { src: 'Images/Masala_Box/Masala_2.png', label: 'Ad Variant 2' },
            { src: 'Images/Masala_Box/Masala_3.png', label: 'Ad Variant 3' },
            { src: 'Images/Masala_Box/Masala_4.png', label: 'Ad Variant 4' }
        ]
    },
    'perfume-wood': {
        title: 'Oud Forest Fragrance',
        rawImg: 'Images/Perfume_Wood/Sample.webp',
        rawMeta: 'CLOUDY FLUID CONTOURS • FLAT STAGING SHELF • NO BRAND IDENTITY',
        logs: [
            'Tracing bottle profile contours & geometric glass vectors...',
            'Synthesizing physical light refractions inside fluid body...',
            'Composing wet volcanic rock pedestals & organic textures...',
            'Generating dynamic ambient water splashes & mist overlays...',
            'Applying cinematic luxury amber backlight film filters.'
        ],
        techNote: 'Analyzes glass light refraction, synthesizes volcanic stone mountings, renders splash ripples and deep foggy forest backgrounds.',
        gallery: [
            { src: 'Images/Perfume_Wood/Sample.webp', label: 'Raw Capture', isRaw: true },
            { src: 'Images/Perfume_Wood/Per_1.png', label: 'Ad Variant 1' },
            { src: 'Images/Perfume_Wood/Per_2.png', label: 'Ad Variant 2' },
            { src: 'Images/Perfume_Wood/Per_3.png', label: 'Ad Variant 3' },
            { src: 'Images/Perfume_Wood/Per_4.png', label: 'Ad Variant 4' }
        ]
    },
    'plant-stand': {
        title: 'Geometric Botanical Mount',
        rawImg: 'Images/Plant_Stand/Sample.webp',
        rawMeta: 'CONGESTED CORNER PHOTO • DISTRACTING BASEBOARDS • POOR HARMONY',
        logs: [
            'Compiling geometric steel rod coordinate maps...',
            'Synthesizing rich organic monstera leaf textures & volumes...',
            'Rendering clean modern Scandinavian architectural loft scene...',
            'Aligning soft physical drop shadows to hardwood floors...',
            'Applying realistic afternoon window sunlight ray casting.'
        ],
        techNote: 'Calculates geometry maps for steel rods, models organic plant leaves, renders inside a luxury Scandinavian loft space.',
        gallery: [
            { src: 'Images/Plant_Stand/Sample.webp', label: 'Raw Capture', isRaw: true },
            { src: 'Images/Plant_Stand/Stand_1.png', label: 'Ad Variant 1' },
            { src: 'Images/Plant_Stand/Stand_2.png', label: 'Ad Variant 2' },
            { src: 'Images/Plant_Stand/Stand_3.png', label: 'Ad Variant 3' },
            { src: 'Images/Plant_Stand/Stand_4.png', label: 'Ad Variant 4' }
        ]
    },
    'water-pot': {
        title: 'Zen Clay Thermal Pot',
        rawImg: 'Images/Water_Pot/Sample.webp',
        rawMeta: 'FLAT DULL AMBIENT ROOM LIGHT • DULL BACKGROUND • NO DEPTH',
        logs: [
            'Analyzing terracotta clay surface porosity...',
            'Compiling depth map for cylinder body...',
            'Synthesizing moist Zen stones backdrop...',
            'Applying volumetric morning dew overlay...',
            'Composing high-contrast studio scene lighting.'
        ],
        techNote: 'Extracts the porous terracotta body, renders realistic splash caustics, and stages it on wet Zen river stones with realistic morning mist.',
        gallery: [
            { src: 'Images/Water_Pot/Sample.webp', label: 'Raw Capture', isRaw: true },
            { src: 'Images/Water_Pot/Water_1.png', label: 'Ad Variant 1' },
            { src: 'Images/Water_Pot/Water_2.png', label: 'Ad Variant 2' },
            { src: 'Images/Water_Pot/Water_3.png', label: 'Ad Variant 3' },
            { src: 'Images/Water_Pot/Water_4.png', label: 'Ad Variant 4' }
        ]
    }
};

// ────────────────────────────────────────────────────
//  7. MODAL — Project Case Study
// ────────────────────────────────────────────────────
function openModal(id) {
    const data = PROJECTS[id];
    if (!data) return;

    const modalOverlay = document.getElementById('project-modal');
    modalOverlay.classList.remove('cards-revealed');

    document.getElementById('modal-title').textContent = `${data.title} — AI Case Study`;

    const adVariants = data.gallery.filter(g => !g.isRaw);

    const deckHTML = adVariants.map((g, index) => {
        const idx = index + 1;
        return `
            <div class="modal-deal-card" data-index="${idx}" onclick="toggleCard(this)">
                <img src="${g.src}" alt="${g.label}">
                <span class="deal-card-badge">${g.label.toUpperCase()}</span>
                <div class="deal-card-inspect" onclick="event.stopPropagation(); openLightbox('${g.src}')">
                    <i class="fa-solid fa-expand"></i> Inspect
                </div>
            </div>
        `;
    }).join('');

    const galleryHTML = data.gallery.map(g =>
        `<div class="modal-gallery-item${g.isRaw ? ' is-raw' : ''}" onclick="openLightbox('${g.src}')">
            <img src="${g.src}" alt="${g.label}">
            <span class="modal-gallery-item-label">${g.label}</span>
        </div>`
    ).join('');

    document.getElementById('modal-body').innerHTML = `
        <!-- Section 01: Cards Staging & Transformation -->
        <div class="modal-hero-container" id="modal-hero-container">
            <div class="modal-raw-panel">
                <span class="hud-panel-tag">STEP 01 // SMARTPHONE INPUT</span>
                <div class="viewfinder-mockup">
                    <img src="${data.rawImg}" alt="Raw Snapshot">
                    <span class="viewfinder-corner tl"></span>
                    <span class="viewfinder-corner tr"></span>
                    <span class="viewfinder-corner bl"></span>
                    <span class="viewfinder-corner br"></span>
                </div>
                <div class="hud-meta-row">
                    <span><i class="fa-solid fa-triangle-exclamation"></i> DETECTED ARTIFACTS</span>
                    <span>12 MP SNAP</span>
                </div>
                <div class="modal-meta-desc">${data.rawMeta}</div>
            </div>

            <div class="modal-arrow-panel">
                <i class="fa-solid fa-arrow-right-long arrow-icon"></i>
            </div>

            <div class="modal-ai-panel">
                <div class="gemini-btn-wrap" id="modal-gemini-trigger" onclick="revealModalCards()">
                    <div class="gemini-btn-glow"></div>
                    <button class="gemini-btn">
                        <img src="Images/ai_logo.png" class="gemini-icon-img" alt="AI Transformation Logo">
                    </button>
                    <span class="gemini-btn-label">INITIATE TRANSFORMATION</span>
                </div>
                <div class="modal-cards-deck" id="modal-cards-deck" data-count="${adVariants.length}">
                    ${deckHTML}
                </div>
            </div>
        </div>

        <!-- Section 02: Full Product Gallery Accordion -->
        <div class="modal-revealed-details" id="modal-revealed-details">
            <div class="modal-gallery-hint" id="modal-gallery-toggle" style="margin-top:32px;margin-bottom:8px;">
                <div class="modal-gallery-hint-left">
                    <i class="fa-solid fa-images"></i>
                    <span>Full Product Gallery</span>
                    <span class="modal-gallery-hint-count">${data.gallery.length} images inside</span>
                </div>
                <div class="modal-gallery-hint-arrow">
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
            </div>

            <div class="modal-gallery" id="modal-gallery-accordion">
                <div class="modal-gallery-header">
                    <div>
                        <span class="modal-panel-tag">Complete Product Grid</span>
                        <h4>Raw Asset to AI Ad Variant Overview</h4>
                    </div>
                </div>
                <div class="modal-gallery-grid">${galleryHTML}</div>
            </div>
        </div>
    `;

    // Wire up collapsible accordion click event
    const toggleBtn = document.getElementById('modal-gallery-toggle');
    const accordion = document.getElementById('modal-gallery-accordion');
    if (toggleBtn && accordion) {
        toggleBtn.addEventListener('click', () => {
            const isOpen = accordion.classList.toggle('is-open');
            toggleBtn.classList.toggle('is-open');
        });
    }

    modalOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function revealModalCards() {
    const modalOverlay = document.getElementById('project-modal');
    if (modalOverlay) {
        modalOverlay.classList.add('cards-revealed');
    }
}

function closeModal() {
    document.getElementById('project-modal').classList.remove('is-open');
    document.body.style.overflow = '';
}

// ────────────────────────────────────────────────────
//  8. LIGHTBOX
// ────────────────────────────────────────────────────
function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('is-open');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('is-open');
    document.getElementById('lightbox-img').src = '';
}

// ────────────────────────────────────────────────────
//  9. KEYBOARD SHORTCUTS
// ────────────────────────────────────────────────────
function initKeyboardClose() {
    window.addEventListener('keydown', e => {
        if (e.key === 'Escape') { closeModal(); closeLightbox(); }
    });
}
