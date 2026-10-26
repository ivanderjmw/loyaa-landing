// Static build: renders one HTML page per locale into ../dist. No dependencies.
import { mkdirSync, writeFileSync, readFileSync, copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { locales, WHATSAPP_NUMBER, WHATSAPP_DISPLAY } from './content.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const dist = join(here, '..', 'dist');
const css = readFileSync(join(here, 'styles.css'), 'utf8');
const js = readFileSync(join(here, 'script.js'), 'utf8');

const B = (process.env.BASE || '').replace(/\/$/, ''); // e.g. /loyaa-landing when hosted under a sub-path
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const waHref = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : '#contact';
const waAttrs = WHATSAPP_NUMBER ? 'target="_blank" rel="noopener"' : 'data-wa-missing';

const logo = `<svg class="logo-mark" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="3 3.2"/><circle cx="16" cy="16" r="8.5" fill="var(--coral)"/><path d="M12.2 16.3l2.7 2.7 5-5.4" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const wa = `<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm4.9 13.6c-.2.6-1.100 1.100-1.600 1.200-.4.100-.9.100-1.500-.1-3-1.200-4.900-4.200-5-4.400-.1-.2-1.200-1.600-1.200-3s.7-2.100 1-2.400c.2-.2.5-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 1.900c.1.200.1.400 0 .5l-.4.600c-.1.100-.3.300-.1.600.9 1.500 2.100 2.300 3.400 2.900.3.100.5.100.6-.1l.8-1c.2-.2.400-.2.600-.1l1.800.9c.2.100.4.200.4.300.1.300.1.800-.1 1.400z"/></svg>`;

const t = (L) => {
  const { nav, hero, card, problem, how, features, custom, who, pricing, faq, cta, footer } = L;
  const stampDots = Array.from({ length: 10 }, (_, i) => `<span class="dot${i < 7 ? ' on' : ''}"></span>`).join('');
  return `<!doctype html>
<html lang="${L.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(L.title)}</title>
<meta name="description" content="${esc(L.description)}">
<link rel="canonical" href="https://loyaa.me${L.path}">
<link rel="alternate" hreflang="id" href="https://loyaa.me/">
<link rel="alternate" hreflang="en" href="https://loyaa.me/en/">
<meta property="og:title" content="${esc(L.title)}">
<meta property="og:description" content="${esc(L.description)}">
<meta property="og:type" content="website">
<meta name="theme-color" content="#FFF8F0">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 32 32%27%3E%3Ccircle cx=%2716%27 cy=%2716%27 r=%2714%27 fill=%27%23F2542D%27/%3E%3Cpath d=%27M10 16.5l4 4 8-8.500%27 fill=%27none%27 stroke=%27white%27 stroke-width=%273%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27/%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap" rel="stylesheet">
<style>${css}</style>
</head>
<body>
<header class="nav"><div class="wrap nav-in">
  <a class="brand" href="${B}${L.path}" aria-label="Loyaa">${logo}<span>loyaa</span></a>
  <nav class="links" aria-label="Main">
    <a href="#how">${nav.how}</a><a href="#features">${nav.features}</a><a href="#pricing">${nav.pricing}</a><a href="#faq">${nav.faq}</a>
  </nav>
  <div class="nav-r"><a class="lang" href="${B}${L.altPath}" hreflang="${L.altLabel.toLowerCase()}">${L.altLabel}</a><a class="btn sm" href="#contact">${nav.cta}</a></div>
</div></header>

<main>
<section class="hero"><div class="wrap hero-in">
  <div class="hero-copy">
    <p class="eyebrow">${hero.eyebrow}</p>
    <h1>${hero.h1}</h1>
    <p class="lead">${hero.sub}</p>
    <div class="cta-row">
      <a class="btn wa" href="${waHref}" ${waAttrs}>${wa}${hero.cta1}</a>
      <a class="btn ghost" href="#how">${hero.cta2}</a>
    </div>
    <p class="note">${hero.note}</p>
  </div>
  <div class="hero-art" aria-hidden="true">
    <div class="phone"><div class="notch"></div>
      <div class="wallet">
        <div class="pass" data-theme="cafe">
          <div class="pass-top"><span class="pass-logo">K</span><span class="pass-name">${card.name}</span></div>
          <div class="dots">${stampDots}</div>
          <p class="pass-stat">${card.stamps}</p>
          <p class="pass-next">${card.next}</p>
          <div class="qr"></div>
        </div>
        <div class="pass ghostcard"></div>
      </div>
    </div>
    <span class="float f1">+1 ★</span><span class="float f2">${card.chip2}</span>
  </div>
</div></section>

<section class="problem"><div class="wrap">
  <h2>${problem.h2}</h2><p class="lead c">${problem.p}</p>
  <ul class="stats">${problem.stats.map(([a, b]) => `<li><strong>${a}</strong><span>${b}</span></li>`).join('')}</ul>
</div></section>

<section id="how" class="sec"><div class="wrap">
  <h2>${how.h2}</h2>
  <ol class="steps">${how.steps.map(([a, b], i) => `<li><span class="num">${i + 1}</span><h3>${a}</h3><p>${b}</p></li>`).join('')}</ol>
</div></section>

<section id="features" class="sec alt"><div class="wrap">
  <h2>${features.h2}</h2>
  <div class="grid">${features.items.map(([a, b], i) => `<article class="feat"><span class="ico i${i}"></span><h3>${a}</h3><p>${b}</p></article>`).join('')}</div>
</div></section>

<section class="sec"><div class="wrap custom">
  <div><h2>${custom.h2}</h2><p class="lead">${custom.p}</p>
    <div class="themes" role="group" aria-label="Theme">${custom.themes.map((n, i) => `<button type="button" class="theme${i === 0 ? ' active' : ''}" data-set="${['cafe', 'salon', 'bakery'][i]}">${n}</button>`).join('')}</div>
  </div>
  <div class="pass live" id="livepass" data-theme="cafe" aria-hidden="true">
    <div class="pass-top"><span class="pass-logo">K</span><span class="pass-name" id="passname">${card.name}</span></div>
    <div class="dots">${stampDots}</div>
    <p class="pass-stat">${card.stamps}</p><p class="pass-next">${card.next}</p><div class="qr"></div>
  </div>
</div></section>

<section class="sec alt who"><div class="wrap"><h2>${who.h2}</h2><div class="chips">${who.chips.map((c) => `<span>${c}</span>`).join('')}</div></div></section>

<section id="pricing" class="sec"><div class="wrap">
  <h2>${pricing.h2}</h2><p class="lead c">${pricing.p}</p>
  <div class="plans">${pricing.plans
    .map(
      (p) => `<article class="plan${p.highlight ? ' hl' : ''}${p.soon ? ' soon' : ''}"><h3>${p.name}</h3><p class="price">${p.price}<small>${p.per}</small></p>${p.sub ? `<p class="subprice">${p.sub}</p>` : ''}
      <ul>${p.feats.map((f) => `<li>${f}</li>`).join('')}</ul>
      ${p.soon ? `<span class="btn ghost disabled">${p.cta}</span>` : `<a class="btn" href="#contact">${p.cta}</a>`}</article>`
    )
    .join('')}</div>
</div></section>

<section id="faq" class="sec alt"><div class="wrap narrow"><h2>${faq.h2}</h2>
  ${faq.items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}
</div></section>

<section id="contact" class="sec final"><div class="wrap narrow">
  <h2>${cta.h2}</h2><p class="lead c">${cta.p}</p>
  <form id="lead" class="form" novalidate>
    <label>${cta.form.name}<input name="name" required autocomplete="name"></label>
    <label>${cta.form.biz}<input name="business" required></label>
    <label>${cta.form.wa}<input name="whatsapp" type="tel" inputmode="tel" required placeholder="+62 8…" autocomplete="tel"></label>
    <label>${cta.form.city}<input name="city" autocomplete="address-level2"></label>
    <label class="full">${cta.form.type}<select name="type">${cta.form.types.map((x) => `<option>${x}</option>`).join('')}</select></label>
    <label class="check full"><input type="checkbox" name="consent" required><span>${cta.form.consent}</span></label>
    <button class="btn full" type="submit">${cta.form.submit}</button>
    <p class="thanks" id="thanks" hidden>${cta.form.thanks}</p>
  </form>
  <p class="or">${cta.or}</p>
  <a class="btn wa" href="${waHref}" ${waAttrs}>${wa}${cta.wa}</a>
  <p class="wa-num">${WHATSAPP_NUMBER ? '' : `<span title="WhatsApp number to be provided">${WHATSAPP_DISPLAY}</span>`}</p>
</div></section>
</main>

<footer class="foot"><div class="wrap foot-in">
  <a class="brand" href="${B}${L.path}">${logo}<span>loyaa</span></a>
  <p>${footer.rights}</p>
  <nav><a href="https://card.loyaa.me/legal/privacy?lang=${L.lang}">${footer.privacy}</a><a href="https://card.loyaa.me/legal/terms?lang=${L.lang}">${footer.terms}</a><a href="mailto:hello-loyaa@gmail.com">${footer.contact}</a></nav>
</div></footer>
<script>${js}</script>
</body></html>`;
};

for (const L of Object.values(locales)) {
  const dir = join(dist, L.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), t(L));
}
console.log('built', Object.keys(locales).join(', '));
