const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const body = document.body, view = $('.view'), list = $('.list'), hl = $('.hl');
const q = new URLSearchParams(location.search);
for (const k of ['mobile', 'look', 'safe']) if (q.get(k)) body.dataset[k] = q.get(k);
const reduced = matchMedia('(prefers-reduced-motion:reduce)').matches;
const phone = () => innerWidth < 820;
let idx = 0, t = 0, last = 0, fired = 0, win, cur, screens, screen, speed = 1, focus = null, shot = null;
const hold = new Set();
const PACE = .75; // Demos run at three-quarter speed; cue times in demos.js are before this is applied

/* ---------- chrome ---------- */
DEMOS.forEach((d, i) => {
  const li = document.createElement('li');
  li.innerHTML = `<button class="item"><span class="ico">${d.icon}</span><span><b>${d.title}</b><span class="d">${d.desc}</span></span></button>`;
  list.append(li); li.firstChild.onclick = () => select(i);
  $('.bgs').insertAdjacentHTML('beforeend', `<i style="--c:${d.color};--art:url(${art(d.art)})"></i>`);
  $('.m-segs').insertAdjacentHTML('beforeend', '<i></i>');
  const rw = document.createElement('button'); rw.innerHTML = `${d.icon}<span>${d.title}<small>${d.desc}</small></span>`; rw.onclick = () => select(i); $('.m-rows').append(rw);
});
const items = $$('.item');
list.addEventListener('keydown', e => { const k = { ArrowDown: 1, ArrowUp: -1 }[e.key]; if (!k) return; e.preventDefault(); const n = (idx + k + DEMOS.length) % DEMOS.length; select(n); items[n].focus(); });
$('.dl').onclick = e => e.preventDefault();
$('.m-nav .prev').onclick = () => step(-1); $('.m-nav .next').onclick = () => step(1);
/* phone gestures: tap a side, swipe, or press and hold to pause */
const taps = $('.m-taps'); let g = null;
taps.addEventListener('pointerdown', e => { if (!e.isPrimary) return; taps.setPointerCapture(e.pointerId); g = { x: e.clientX, y: e.clientY, at: performance.now(), timer: setTimeout(() => { g.held = true; hold.add('press'); paintPause(); }, 260) }; });
const endTap = e => { if (!g) return; const s = g, dx = e.clientX - s.x, dy = e.clientY - s.y; clearTimeout(s.timer); g = null; hold.delete('press'); paintPause(); if (e.type === 'pointercancel') return;
  if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) return step(dx < 0 ? 1 : -1);
  if (s.held || Math.abs(dy) > 20) return; tapSide(e.clientX < innerWidth / 2 ? -1 : 1); };
taps.addEventListener('pointerup', endTap); taps.addEventListener('pointercancel', endTap); taps.addEventListener('contextmenu', e => e.preventDefault());
function tapSide(k) { const el = $(`[data-k="${k}"]`, taps); el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash'); step(k); }
const hint = $('.m-hint'); let hintT;
function showHint() { if (!phone() || body.dataset.mobile !== 'stories') return; hint.hidden = false; hint.classList.remove('bye'); hold.add('hint'); clearTimeout(hintT); if (!reduced) hintT = setTimeout(hideHint, 4200); }
function hideHint() { clearTimeout(hintT); hold.delete('hint'); hint.classList.add('bye'); setTimeout(() => hint.hidden = true, reduced ? 0 : 260); }
hint.onclick = e => { const k = e.clientX < innerWidth / 2 ? -1 : 1; hideHint(); tapSide(k); };
const step = k => select((idx + k + DEMOS.length) % DEMOS.length);
const ppb = $('.pp-btn');
ppb.onclick = () => { hold.has('user') ? hold.delete('user') : hold.add('user'); paintPause(); };
function paintPause() { const u = hold.has('user'), h = hold.has('hover'); ppb.innerHTML = (u ? glyph.play : glyph.pause) + `<span>${u ? 'Play' : h ? 'Paused while you look' : 'Pause'}</span>`; ppb.setAttribute('aria-label', u ? 'Play demos' : 'Pause demos'); view.classList.toggle('held', hold.size > 0); }
view.addEventListener('pointerover', e => { if (e.pointerType === 'mouse' && !phone() && e.target.closest('.win')) { hold.add('hover'); paintPause(); } });
view.addEventListener('pointerout', e => { if (!e.relatedTarget?.closest?.('.win')) { hold.delete('hover'); paintPause(); } });
document.addEventListener('visibilitychange', () => document.hidden ? hold.add('hidden') : hold.delete('hidden'));

/* ---------- stage API handed to cues ---------- */
const c = {
  q: s => $(s, screen) || $(s, screens),
  text(s, v) { const e = this.q(s); if (e && e.textContent !== v) e.textContent = v; }, html(s, v) { const e = this.q(s); if (e && e._h !== v) e.innerHTML = e._h = v; },
  css(s, k, v) { const e = this.q(s); if (e) e.style[k] = v; }, each: (s, f) => $$(s, screens).forEach(f),
  cls(s, k, on = true) { this.q(s)?.classList.toggle(k, on); },
  seg(id, i) { const e = this.q(`[data-seg=${id}]`); e.style.setProperty('--i', i); [...e.children].forEach((x, j) => x.classList.toggle('on', j === i)); },
  bg(root, n) { const r = this.q(root), p = $('.bgi', r) || $('.player', r); p.style.backgroundImage = `url(${art(n)})`; $$('[data-bg]', r).forEach(e => e.classList.toggle('on', e.dataset.bg === n)); },
  go(n) { const A = win.dataset.s && SCREENS[win.dataset.s], k0 = +win.style.getPropertyValue('--s') || 1, p = cur._p, o = focus;
    $$('.scr', screens).forEach(e => e.classList.toggle('on', e.dataset.s === n)); screen = $(`[data-s=${n}]`, screens); win.dataset.s = n; focus = shot = null; $$('.call', win).forEach(e => e.remove()); fit();
    if (A && p) { const S = SCREENS[n], k = k0 / +win.style.getPropertyValue('--s'); cur.style.setProperty('--d', '500ms'); place([Math.max(24, Math.min(S.w - 24, (p[0] - A.w / 2) * k + S.w / 2)), Math.max(24, Math.min(S.h - 28, (p[1] - A.h / 2) * k + S.h / 2))]); } },
  look(s) { if (!phone()) return; shot = s ? this.q(s) : null; fit(); }, // phone camera: hold on a result instead of the cursor
  at(s, fx = .5, fy = .5) { const e = typeof s === 'string' ? this.q(s) : s; if (!e) { console.warn('missing', s); return null; } const r = e.getBoundingClientRect(), w = screen.getBoundingClientRect(), k = w.width / screen.offsetWidth; return [(r.left - w.left) / k + r.width / k * fx, (r.top - w.top) / k + r.height / k * fy]; },
  move(s, fx, fy, ms = 520) { ms /= PACE * speed; const p = this.at(s, fx, fy); if (!p) return; cur.style.setProperty('--d', ms + 'ms'); place(p); focus = p; fit(); const el = this.q(s); $$('.hov', win).forEach(e => e.classList.remove('hov')); setTimeout(() => el.classList.add('hov'), win.classList.contains('instant') ? 0 : ms * .85); },
  click(s) { if (win.classList.contains('instant')) return; const el = this.q(s), w = cur; w.classList.remove('dn'); void w.offsetWidth; w.classList.add('dn'); el?.classList.add('press'); setTimeout(() => { w.classList.remove('dn'); el?.classList.remove('press'); }, 180); },
  callout(s, txt, side) { const p = this.at(s, side === 'left' ? 0 : side === 'below' ? .5 : 1, side === 'below' ? 1 : .5), e = document.createElement('div'); e.className = 'call'; e.textContent = txt; win.append(e); const k = Math.max(1, .62 / +win.style.getPropertyValue('--s')); e.style.fontSize = 14 * k + 'px'; const W = e.offsetWidth;
    e.style.top = Math.max(20, side === 'below' ? p[1] + 28 : p[1] - e.offsetHeight / 2) + 'px'; e.style.left = Math.max(8, Math.min(win.offsetWidth - W - 8, side === 'left' ? p[0] - W - 18 : side === 'below' ? p[0] - W / 2 : p[0] + 18)) + 'px'; },
};
function place(p) { cur.style.transform = `translateX(${p[0]}px)`; cur.firstElementChild.style.transform = `translateY(${p[1]}px)`; cur._p = p; }
function box(el) { const r = el.getBoundingClientRect(), w = screen.getBoundingClientRect(), k = w.width / screen.offsetWidth; return { x: (r.left - w.left) / k, y: (r.top - w.top) / k, w: r.width / k, h: r.height / k }; }
function fit() {
  const S = SCREENS[win.dataset.s], vw = view.clientWidth, vh = view.clientHeight;
  const full = Math.min(vw * .9 / S.w, vh * .88 / S.h, 1.4);
  let s = full, tx = 0, ty = 0;
  if (phone()) { // zoom in and follow the cursor, unless a cue asked to hold on something
    s = Math.max(full, Math.min(.62, vh * 1.25 / S.h)); let f = focus || [S.w / 2, S.h / 2];
    if (shot) { const r = box(shot); s = Math.max(full, Math.min(.82, vw * .94 / r.w, vh * .92 / r.h)); f = [r.x + r.w / 2, r.y + r.h / 2]; }
    const mx = Math.max(0, (S.w * s - vw * .92) / 2), my = Math.max(0, (S.h * s - vh * .92) / 2);
    tx = Math.max(-mx, Math.min(mx, -(f[0] - S.w / 2) * s)); ty = Math.max(-my, Math.min(my, -(f[1] - S.h / 2) * s));
  }
  win.style.width = S.w + 'px'; win.style.height = S.h + 'px';
  win.style.setProperty('--s', s); win.style.setProperty('--tx', tx + 'px'); win.style.setProperty('--ty', ty + 'px');
}
function build() {
  win = document.createElement('div'); win.className = 'win instant'; win.innerHTML = '<div class="body"></div><div class="cur"><div><span class="rip"></span><svg width="22" height="28" viewBox="0 0 22 28"><path d="M2 2v20l5-4.6 3.4 7.8 3.9-1.7-3.4-7.6 6.9-.5z" fill="#000" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/></svg></div></div>'; view.append(win);
  cur = $('.cur', win); screens = document.createElement('div'); screens.className = 'screens';
  screens.innerHTML = Object.keys(SCREENS).map(n => `<div class="scr" data-s="${n}" style="width:${SCREENS[n].w}px;height:${SCREENS[n].h}px">${SCREENS[n].html()}</div>`).join('');
  $('.body', win).prepend(screens); c.go('home'); place([430, 540]);
}
const nav = (b, d, svg, side) => { b.innerHTML = side < 0 ? `${svg}<span><small>Back</small>${d.short}</span>` : `<span><small>Next</small>${d.short}</span>${svg}`; b.setAttribute('aria-label', `${side < 0 ? 'Previous' : 'Next'}: ${d.title}`); };
const chev = k => `<svg width="12" height="20" viewBox="0 0 12 20" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="${k < 0 ? 'M10 2L2 10l8 8' : 'M2 2l8 8-8 8'}"/></svg>`;
function start(i) {
  const prev = win, N = DEMOS.length; idx = i; t = prev ? -.25 : 0; fired = 0;
  items.forEach((e, j) => { e.classList.toggle('on', j === i); e.setAttribute('aria-current', j === i); }); $$('.m-rows button').forEach((e, j) => { e.classList.toggle('on', j === i); e.setAttribute('aria-current', j === i); });
  $$('.m-segs i').forEach((e, j) => { e.className = j < i ? 'done' : j === i ? 'on' : ''; }); $$('.bgs i').forEach((e, j) => e.classList.toggle('on', j === i));
  $('.m-cap h2').textContent = DEMOS[i].title; $('.m-cap p').textContent = DEMOS[i].desc;
  nav($('.m-nav .prev'), DEMOS[(i + N - 1) % N], chev(-1), -1); nav($('.m-nav .next'), DEMOS[(i + 1) % N], chev(1), 1);
  glide(); setP(0); build();
  if (reduced) { $$('.win', view).forEach(w => w !== win && w.remove()); seek(DEMOS[i].dur); return; }
  if (!prev) { const w = win; requestAnimationFrame(() => w.classList.remove('instant')); return; }
  const b = win; b.classList.add('in-swap'); void b.offsetWidth; b.classList.remove('instant'); prev.classList.add('out-swap'); requestAnimationFrame(() => requestAnimationFrame(() => b.classList.remove('in-swap'))); setTimeout(() => prev.remove(), 240);
}
function select(i) { start(i); history.replaceState(null, '', location.search + '#' + DEMOS[i].id); }
function glide() { const e = items[idx]; hl.style.height = e.offsetHeight + 'px'; hl.style.transform = `translateY(${e.parentNode.offsetTop}px)`; }
function setP(p) { body.style.setProperty('--p', p.toFixed(4)); }
function seek(x) { win.classList.add('instant'); DEMOS[idx].cues.forEach(([, f]) => f(c)); DEMOS[idx].tick(x - .6, c); setP(1); cur.style.display = 'none'; }
function frame(now) {
  const dt = Math.min(.05, (now - last) / 1000 || 0); last = now; const d = DEMOS[idx];
  if (!reduced && !hold.size) {
    t += dt * PACE * speed;
    while (fired < d.cues.length && d.cues[fired][0] <= t) d.cues[fired++][1](c);
    d.tick(t, c);
    setP(clamp01(t / d.dur)); if (t >= d.dur) start((idx + 1) % DEMOS.length);
  }
  requestAnimationFrame(frame);
}
addEventListener('resize', () => { fit(); glide(); });
addEventListener('message', e => { const m = e.data || {}; for (const k in m) if (k === 'speed') speed = +m[k]; else if (k === 'go') select(+m[k]); else if (k === 'hint') showHint(); else body.dataset[k] = m[k]; requestAnimationFrame(() => { fit(); glide(); }); });
paintPause(); document.fonts.ready.then(() => glide());
start(Math.max(0, DEMOS.findIndex(d => '#' + d.id === location.hash))); requestAnimationFrame(frame); showHint();
