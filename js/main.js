// ---------- Horarios por casa (minutos desde las 00:00; >1440 = pasada la medianoche) ----------
// shortcut: horarios de Preciados (esMadrid) sin confirmar y Majadahonda sin publicar; cambiar aquí cuando el restaurante los confirme.
const CASAS = {
  'felix-boix': { name: 'Félix Boix', services: [[13 * 60, 16 * 60 + 30], [20 * 60 + 30, 25 * 60]], tel: '913 596 507', email: 'demariafelixboix@demariarestaurante.es' },
  preciados: { name: 'Preciados', services: [[12 * 60 + 30, 25 * 60 + 30]], tel: '915 211 603' },
  majadahonda: { name: 'Majadahonda', services: null, tel: '916 027 419' },
};
const hhmm = (m) => `${String(Math.floor(m / 60) % 24).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;

// Devuelve {open, until} o {open:false, next, tomorrow}; null si la casa no publica horario
function status(services, mins) {
  if (!services) return null;
  for (const [, b] of services) if (b > 1440 && mins < b - 1440) return { open: true, until: b };
  for (const [a, b] of services) if (mins >= a && mins < b) return { open: true, until: b };
  for (const [a] of services) if (mins < a) return { open: false, next: a, tomorrow: false };
  return { open: false, next: services[0][0], tomorrow: true };
}
const FB = CASAS['felix-boix'].services;
console.assert(status(FB, 14 * 60).open && status(FB, 14 * 60).until === 990, 'Félix Boix 14:00 abierto hasta 16:30');
console.assert(!status(FB, 18 * 60).open && status(FB, 18 * 60).next === 1230, 'Félix Boix 18:00 cerrado, abre 20:30');
console.assert(status(FB, 45).open, 'Félix Boix 00:45 sigue la cena');
console.assert(!status(FB, 70).open && status(FB, 70).next === 780, 'Félix Boix 01:10 cerrado, abre 13:00');
console.assert(status(CASAS.preciados.services, 60).open && !status(CASAS.preciados.services, 100).open, 'Preciados cierra a la 1:30');
console.assert(status(null, 0) === null, 'sin horario no hay estado');

function madridMins() {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
    .formatToParts(new Date()).map((x) => [x.type, x.value]));
  return +p.hour * 60 + +p.minute;
}

function paintStatus() {
  const mins = madridMins();
  document.querySelectorAll('[data-status]').forEach((el) => {
    const casa = CASAS[el.dataset.status];
    const s = status(casa.services, mins);
    el.classList.toggle('open', !!s?.open);
    el.textContent = !s ? 'Horario por teléfono'
      : s.open ? `Abierto · hasta las ${hhmm(s.until)}`
      : `Cerrado · abre ${s.tomorrow ? 'mañana ' : ''}a las ${hhmm(s.next)}`;
  });
}
paintStatus();
setInterval(paintStatus, 60_000);

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Cabecera: sólida al bajar, menú de casas y menú móvil ----------
const header = document.querySelector('[data-header]');
if (header) {
  const onScroll = () => header.classList.toggle('solid', scrollY > 40);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const casasBtn = header.querySelector('.casas-btn');
  const casasPanel = header.querySelector('.casas-panel');
  const menuBtn = header.querySelector('.menu-btn');
  const setCasas = (open) => { casasBtn.setAttribute('aria-expanded', open); casasPanel.hidden = !open; };
  const setMenu = (open) => {
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.textContent = open ? 'Cerrar' : 'Menú';
    header.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  casasBtn.addEventListener('click', () => setCasas(casasPanel.hidden));
  menuBtn.addEventListener('click', () => setMenu(!header.classList.contains('menu-open')));
  document.addEventListener('click', (e) => { if (!e.target.closest('.nav-casas')) setCasas(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if (!casasPanel.hidden) { setCasas(false); casasBtn.focus(); }
    if (header.classList.contains('menu-open')) { setMenu(false); menuBtn.focus(); }
  });
  header.querySelectorAll('.nav a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
}

// ---------- Portada: las fotos se funden despacio, como la luz en la sala ----------
const fade = document.querySelector('[data-fade]');
if (fade && !reduced) {
  const imgs = [...fade.querySelectorAll('img')];
  const cap = document.querySelector('[data-fade-cap]');
  const mobile = matchMedia('(max-width: 899px)');
  const caption = (img) => (mobile.matches ? img.dataset.capM : img.dataset.cap) ?? '';
  if (cap) cap.textContent = caption(imgs[0]);
  let i = 0;
  setInterval(() => {
    if (document.hidden) return;
    imgs[i].classList.remove('on');
    i = (i + 1) % imgs.length;
    imgs[i].classList.add('on');
    if (cap) cap.textContent = caption(imgs[i]);
  }, 6000);
}

// ---------- Entradas escalonadas por sección ----------
// Se revela todo lo que ya ha asomado por abajo, aunque se haya pasado de largo (scroll rápido o salto a un ancla)
document.querySelectorAll('ul[data-reveal], ol[data-reveal]').forEach((list) => {
  list.removeAttribute('data-reveal');
  [...list.children].forEach((li) => li.setAttribute('data-reveal', '')); // las listas entran fila a fila
});
const order = new Map(); // el retraso se cuenta dentro de cada sección
let pending = [...document.querySelectorAll('[data-reveal]')];
pending.forEach((el) => {
  const group = el.closest('section, .foot') ?? el.parentElement;
  const n = order.get(group) ?? 0;
  order.set(group, n + 1);
  el.style.setProperty('--d', `${Math.min(n, 6) * 70}ms`);
});
let ticking = false;
const reveal = () => {
  ticking = false;
  const limit = innerHeight * 0.92;
  pending = pending.filter((el) => {
    if (el.getBoundingClientRect().top > limit) return true;
    el.classList.add('in');
    return false;
  });
  if (!pending.length) removeEventListener('scroll', onScrollReveal);
};
const onScrollReveal = () => { if (!ticking) { ticking = true; requestAnimationFrame(reveal); } };
addEventListener('scroll', onScrollReveal, { passive: true });
addEventListener('resize', onScrollReveal);
requestAnimationFrame(() => requestAnimationFrame(reveal)); // tras el primer pintado, para que lo visible también entre

// ---------- Carril de fotos: flechas que avanzan una pantalla y se apagan en los extremos ----------
document.querySelectorAll('[data-rail]').forEach((rail) => {
  const track = rail.querySelector('.rail-track');
  const [prev, next] = rail.querySelectorAll('.rail-btn');
  const update = () => {
    prev.disabled = track.scrollLeft < 8;
    next.disabled = track.scrollLeft + track.clientWidth > track.scrollWidth - 8;
  };
  const go = (dir) => track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: reduced ? 'auto' : 'smooth' });
  prev.addEventListener('click', () => go(-1));
  next.addEventListener('click', () => go(1));
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); go(e.key === 'ArrowRight' ? 1 : -1); }
  });
  track.addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
});

// ---------- Carta: índice que sigue a la sección en pantalla ----------
const cartaNav = document.querySelector('.carta-nav');
if (cartaNav) {
  const links = [...cartaNav.querySelectorAll('a')];
  const spy = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const link = links.find((a) => a.hash === `#${e.target.id}`);
      links.forEach((a) => a.toggleAttribute('aria-current', a === link));
      const ul = cartaNav;
      if (link && ul.scrollWidth > ul.clientWidth) ul.scrollTo({ left: link.offsetLeft - (ul.clientWidth - link.offsetWidth) / 2, behavior: reduced ? 'auto' : 'smooth' });
    }
  }, { rootMargin: '-30% 0px -65% 0px' });
  links.forEach((a) => { const s = document.querySelector(a.hash); if (s) spy.observe(s); });
}

// ---------- Mapa de cortes: tocar una pieza muestra su ficha ----------
const cortes = document.querySelector('[data-cortes]');
if (cortes) {
  const show = (id) => {
    cortes.querySelectorAll('[data-cut]').forEach((el) => el.classList.toggle('on', el.dataset.cut === id));
    cortes.querySelectorAll('.corte').forEach((el) => el.classList.toggle('on', el.id === `corte-${id}`));
  };
  cortes.addEventListener('click', (e) => {
    const a = e.target.closest('[data-cut]');
    if (!a) return;
    e.preventDefault();
    show(a.dataset.cut);
  });
  show('lomo-alto');
}

// ---------- Reserva ----------
const book = document.querySelector('[data-book]');
if (book) {
  const out = book.querySelector('[data-people]');
  const day = book.elements.dia;
  const hourSel = book.elements.hora;
  const hourFree = book.elements.hora_libre;
  const summary = document.querySelector('[data-summary]');
  const send = document.querySelector('[data-send]');
  const note = document.querySelector('[data-send-note]');
  let people = 2;

  const pre = new URLSearchParams(location.search).get('casa');
  if (pre && CASAS[pre]) book.elements.casa.value = pre;

  const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  day.min = iso(new Date());
  day.value = day.min;

  const casa = () => CASAS[book.elements.casa.value];
  const fecha = () => new Date(`${day.value}T12:00`).toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
  const hora = () => (casa().services ? hourSel.value : hourFree.value);

  const fillHours = () => {
    const c = casa();
    hourSel.closest('.field').hidden = !c.services;
    hourFree.closest('.field').hidden = !!c.services;
    hourSel.required = !!c.services;
    hourFree.required = !c.services;
    // el reservado sólo existe en Félix Boix
    const reservado = book.querySelector('input[name=zona][value=Reservado]');
    reservado.disabled = c !== CASAS['felix-boix'];
    if (reservado.disabled && reservado.checked) book.elements.zona.value = 'Salón';
    if (!c.services) return;
    const prev = hourSel.value;
    hourSel.innerHTML = '';
    // último turno de mesa una hora antes del cierre
    // hoy no se ofrecen horas que ya han pasado (con media hora de margen)
    const from = day.value === day.min ? madridMins() + 30 : 0;
    for (const [a, b] of c.services) for (let m = a; m <= b - 60; m += 30) if (m >= from) hourSel.add(new Option(hhmm(m), hhmm(m)));
    if (!hourSel.options.length) hourSel.add(new Option('No quedan horas hoy, elige otro día', ''));
    const vals = [...hourSel.options].map((o) => o.value);
    hourSel.value = vals.includes(prev) ? prev : vals.includes('21:30') ? '21:30' : vals[0];
  };

  const paint = () => {
    const c = casa();
    const zona = book.elements.zona.value.toLowerCase();
    summary.textContent = `Mesa para ${people} ${people === 1 ? 'persona' : 'personas'} en ${c.name}, el ${fecha()}${hora() ? ` a las ${hora()}` : ''}, en ${zona}.`;
    send.textContent = c.email ? 'Enviar la petición por correo' : `Llamar a ${c.name}, ${c.tel}`;
    note.textContent = c.email
      ? 'Se abre tu correo con la petición escrita. La casa te confirma la mesa.'
      : `${c.name} reserva por teléfono. Ten a mano este resumen al llamar.`;
  };

  book.querySelectorAll('[data-step]').forEach((b) => b.addEventListener('click', () => {
    people = Math.min(50, Math.max(1, people + +b.dataset.step));
    out.textContent = people;
    paint();
  }));
  book.addEventListener('change', (e) => { if (e.target.name === 'casa' || e.target.name === 'dia') fillHours(); paint(); });
  book.addEventListener('input', paint);
  fillHours();
  paint();

  book.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!book.reportValidity()) return;
    const c = casa();
    if (!c.email) { location.href = `tel:+34${c.tel.replace(/\D/g, '')}`; return; }
    const body = `Hola,\n\n${summary.textContent}\n\nNombre: ${book.elements.nombre.value}\nTeléfono: ${book.elements.telefono.value}\n\nGracias.`;
    location.href = `mailto:${c.email}?subject=${encodeURIComponent(`Reserva · ${people} pers. · ${fecha()} ${hora()}`)}&body=${encodeURIComponent(body)}`;
  });
}

// ---------- Grupos: petición de presupuesto por correo ----------
const grupo = document.querySelector('[data-grupo]');
if (grupo) {
  grupo.elements.fecha.min = new Date().toISOString().slice(0, 10);
  grupo.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!grupo.reportValidity()) return;
    const f = grupo.elements;
    const body = `Hola,\n\nQuería pedir presupuesto para ${f.tipo.value.toLowerCase()}.\n\nCasa: ${f.casa.value}\nFecha: ${f.fecha.value}\nPersonas: ${f.personas.value}\n\n${f.mensaje.value}\n\nNombre: ${f.nombre.value}\nTeléfono: ${f.telefono.value}\nCorreo: ${f.correo.value}`;
    location.href = `mailto:${CASAS['felix-boix'].email}?subject=${encodeURIComponent(`Grupo · ${f.personas.value} pers. · ${f.fecha.value}`)}&body=${encodeURIComponent(body)}`;
  });
}
