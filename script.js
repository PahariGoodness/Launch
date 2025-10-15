/** CONTACT — set these */
const CONTACT = {
  whatsappPhone: '918091399907', // country code + number (no +, no spaces)
  phoneDial: '918091399907',       // tel: link (no +, no spaces)
  phoneDisplay: '+91-98091-43210', // what to show on the page
  email: 'info@paharigoodness.com',
  instagram: 'pahari_goodness',
};

/** 13 products for launch */
const PRODUCTS = [
{ id:'p1',  name:'Himalayan Pine Nuts', tagline:'Appetite Control & Energy Boost — Pure Himalayan Fuel for Active Lives', price:920, image:'images/pin nuts.jpg' },
{ id:'p2',  name:'Apricot Oil – 100% Cold Pressed', tagline:'Gentle Yet Powerful — Soothes, Heals, and Protects Sensitive Skin', price:800, image:'images/oil.png' },
{ id:'p3',  name:'Walnuts', tagline:'Pure Mountain Nutrition — Protein, Fiber & Minerals for Energy & Vitality', price:550, image:'images/walnut.jpg' },
{ id:'p4', name:'Kinnauri Kala Shahi Jeera', tagline:'Kinnaur’s High-Altitude Jewel — Boosts Focus, Energy & Metabolism', price:350, image:'images/jira.png' }
//   { id:'p1',  name:'Himalayan Sun Dried Apricots', tagline:'Rich in Vitamin A for eye health', price:550, image:'images/walnut.jpg' },
//   { id:'p2',  name:'Walnut Oil – 100% Cold Pressed', tagline:'Vit A & E rich, light absorbing elixir', price:720, image:'images/walnut.jpg' },
//   { id:'p3',  name:'Apricot Oil – 100% Cold Pressed', tagline:'Omega 3 powerhouse for a healthy heart', price:800, image:'images/walnut.jpg' },
//   { id:'p4',  name:'Himalayan Pine Nuts', tagline:'Richest source of pinolenic acid for weight management', price:920, image:'images/walnut.jpg' },
//   { id:'p5',  name:'Mamra Almonds', tagline:'2× MUFA & PUFA (Omega 6 & 9) for brain power', price:720, image:'images/walnut.jpg' },
//   { id:'p6',  name:'Gurbandi Almonds', tagline:'60% more heart-healthy fats', price:520, image:'images/walnut.jpg' },
//   { id:'p7',  name:'Walnuts', tagline:'Omega 3 powerhouse for healthy heart', price:550, image:'images/walnut.jpg' },
//   { id:'p8',  name:'Gurbandi Almond Oil – 100% Cold Pressed', tagline:'Vitamin E, Omega 6 & 9 — Fuel for brain', price:800, image:'images/walnut.jpg' },
//   { id:'p9',  name:'Apple Blossom Honey', tagline:'Contains natural enzymes, bee pollen & propolis', price:550, image:'images/walnut.jpg' },
//   { id:'p10', name:'Kinnauri Kala Shahi Jeera', tagline:'Rich in essential oils for medicinal & culinary use', price:350, image:'images/walnut.jpg' },
//   { id:'p11', name:'Morels', tagline:'Rich in Vitamin D for bone health', price:850, image:'images/walnut.jpg' },
//   { id:'p12', name:'Powerhouse Trail Mix', tagline:'One mix. Three supernuts. Brain, heart & energy boost', price:900, image:'images/walnut.jpg' },
//   { id:'p13', name:'Himalayan Forest Honey', tagline:'2× antioxidants for immunity boost', price:600, image:'images/walnut.jpg' }
];


/** Helpers */
const waLink = (name) => {
  const text = name
    ? `Hello! Can you tell me more about the "${name}"? I’d love to know the price and availability.`
    : `Hi! I’d love to check out Pahari Goodness products. Please share the catalog and prices.`;
  return `https://wa.me/${CONTACT.whatsappPhone}?text=${encodeURIComponent(text)}`;
};
const escapeHtml = (s='') => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#039;");

/** Init */
document.addEventListener('DOMContentLoaded', () => {
  // year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // CTAs (guard each one)
  const headerCta = document.getElementById('ctaHeader');   // you removed this
  const heroCta   = document.getElementById('ctaHero');
  const midCta    = document.getElementById('ctaWhatsAppMid');

  if (headerCta) headerCta.href = waLink();
  if (heroCta)   heroCta.href   = waLink();
  if (midCta)    midCta.href    = waLink();

  // socials
  const li = document.getElementById('linkInsta');
  const lw = document.getElementById('linkWa');
  const lm = document.getElementById('linkMail');
  if (li) li.href = `https://instagram.com/${CONTACT.instagram}`;
  if (lw) lw.href = waLink();
  if (lm) lm.href = `mailto:${CONTACT.email}`;

  const aboutVid = document.getElementById('aboutHeroVideo');
  if (aboutVid) {
    const setRate = () => { try { aboutVid.playbackRate = 3.0; } catch (e) {} };
    aboutVid.addEventListener('canplay', setRate);
    setRate();
  }


  // Contact page fields (if present)
  const elEmail  = document.getElementById('contactEmail');
  const elEmailT = document.getElementById('contactEmailText');
  const elPhone  = document.getElementById('contactPhone');
  const elPhoneT = document.getElementById('contactPhoneText');
  const elWa     = document.getElementById('contactWhatsApp');

  if (elEmail)  elEmail.href  = `mailto:${CONTACT.email}`;
  if (elEmailT) elEmailT.textContent = CONTACT.email;

  if (elPhone)  elPhone.href  = `tel:+${CONTACT.phoneDial}`;
  if (elPhoneT) elPhoneT.textContent = CONTACT.phoneDisplay;

  if (elWa)     elWa.href     = waLink(); // prefilled WA message from your helper

  const ctaAbout = document.getElementById('ctaAboutWhatsApp');
  if (ctaAbout) ctaAbout.href = waLink();

  // render products
  const rail = document.getElementById('productRail');
  if (rail) {
    rail.innerHTML = PRODUCTS.map(p => `
      <li>
        <article class="card">
          <div class="card__media">
            <img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy">
          </div>
          <div class="card__body">
            <h3 class="card__name" title="${escapeHtml(p.name)}">${escapeHtml(p.name)}</h3>
            <div class="card__tag">${escapeHtml(p.tagline)}</div>
            <div class="card__bottom">
              <div class="card__price">₹${Number(p.price).toLocaleString('en-IN')}</div>
              <div class="card__buy">
                <a class="btn btn--dark" href="${waLink(p.name)}" target="_blank" rel="noopener"
                   aria-label="Buy ${escapeHtml(p.name)} on WhatsApp">Buy</a>
              </div>
            </div>
          </div>
        </article>
      </li>
    `).join('');
  }

  // responsive hero background (mobile/desktop)
  const hero = document.querySelector('.hero--immersive');
  if (hero) {
    const mobile  = hero.getAttribute('data-bg-mobile');
    const desktop = hero.getAttribute('data-bg-desktop') || mobile;
    const pick = () => {
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      hero.style.backgroundImage = `url('${(isMobile && mobile) ? mobile : desktop}')`;
    };
    pick();
    window.addEventListener('resize', pick);
  }

  // header solid on scroll
  const header = document.querySelector('.site-header');
  const onScroll = () => { if (header) header.dataset.scrolled = window.scrollY > 10 ? 'true' : 'false'; };
  onScroll();
  window.addEventListener('scroll', onScroll);
});

