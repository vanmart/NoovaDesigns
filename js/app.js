/* =====================================================================
   NOOVA V2 Marca — app.js
   Basado en noova-pwa-institucional.
   - Galerías de lujo: imágenes y videos (datos en GALLERY, abajo)
   ===================================================================== */
const CONFIG = {
    whatsapp: '573008834795',
    waIntro: 'Hola, NOOVA. Quiero agendar una cita con un experto para transformar un espacio.',
    agenda: '[URL_AGENDA]',
    facebook: 'https://web.facebook.com/NOOVADESIGNS',
    instagram: 'https://www.instagram.com/noova.domotica/',
    youtube: 'https://www.youtube.com/@noovasmartliving'
};

/* =====================================================================
   GALERÍAS — edita SOLO este bloque cuando tengas tus archivos reales.
   Mínimo 3 elementos por galería; puedes agregar todos los que quieras
   (solo se dibujan 3 a la vez). Hoy las rutas son de internet (temporales).
   Ejemplo local:  src: 'assets/img/sala-1.webp'
   ===================================================================== */
const GALLERY = {
    images: [

        { src: 'assets/img/cafeteria.webp', title: 'Coworking', caption: 'Iluminación perfecta para jornadas productivas' },
        { src: 'assets/img/proy2.webp', title: 'Sala de estar y TV', caption: 'Iluminación arquitectónica y escenas' },
        { src: 'assets/img/proy3.webp', title: 'Sala de estar y TV', caption: 'Luz Calida para dar más tranquilidad a tu hogar' },
        { src: 'assets/img/arte.webp', title: 'Iluminacion & Arte', caption: 'Iluminación de arte y escenas' },
        { src: 'assets/img/SalaColor.webp', title: 'Entrada', caption: 'Listos para un evento o reunion.' },

        { src: 'assets/img/bano1.webp', title: 'Baños', caption: 'Acabados de lujo revalorizan tu predio' },
        { src: 'assets/img/bano.webp', title: 'Baños', caption: 'Armonia donde menos lo imaginas' },
        { src: 'assets/img/closet1.webp', title: 'Closet', caption: 'Puede hacerte sentir muy bien' },
        { src: 'assets/img/closet2.webp', title: 'Closet', caption: 'Vive de maneras unicas' },

        { src: 'assets/img/Oxigen.webp', title: 'Local Comercial', caption: 'Dale nueva vida a tu espacio' },
        { src: 'assets/img/Oxygen2.webp', title: 'Local Comercial', caption: 'Renovar no siempre es complicado' },
        { src: 'assets/img/Oxygen3.webp', title: 'Local Comercial', caption: 'Consejos para tu espacio comercial' },

        { src: 'assets/img/tiendaOriginal.webp', title: 'Local Comercial', caption: 'Detalles que dan identidad' },
        { src: 'assets/img/tiendaOriginal2.webp', title: 'Local Comercial', caption: 'Resaltan tus productos, resaltas tú' },
        { src: 'assets/img/tv_room.webp', title: 'Sala de estar y TV', caption: 'Escenas para descansar' }
        // 
    ],
    videos: [
        { src: 'assets/video/Vestier.mp4', poster: 'https://picsum.photos/seed/noova-vid-01/1600/1000', title: 'Proyecto Sala Muestra', caption: 'Video real con iluminación arquitectónica' },
        { src: 'assets/video/Tienda de Ropa.mp4', poster: 'https://picsum.photos/seed/noova-vid-02/1600/1000', title: 'Sala Pixel', caption: 'Iluminación escénica programable' },
        { src: 'assets/video/Sala2.mp4', poster: 'https://picsum.photos/seed/noova-vid-03/1600/1000', title: 'Entrada espacio interior', caption: 'Acceso a proyecto real' },
        { src: 'assets/video/HabitaciónNina.mp4', poster: 'https://picsum.photos/seed/noova-vid-04/1600/1000', title: 'Sala Pixel · segunda toma', caption: 'Proyecto de iluminación' },
        { src: 'assets/video/Gym.mp4', poster: 'https://picsum.photos/seed/noova-vid-05/1600/1000', title: 'Proyecto de cliente', caption: 'Integración de tecnología y luz' },
        { src: 'assets/video/Gimnasio.mp4', poster: 'https://picsum.photos/seed/noova-vid-06/1600/1000', title: 'Entrada interior II', caption: 'Espacio integrado con domótica' },
        { src: 'assets/video/Comedor.mp4', poster: 'https://picsum.photos/seed/noova-vid-07/1600/1000', title: 'Entrada interior III', caption: 'Diseño de iluminación arquitectónica' },
        { src: 'assets/video/Cocina.mp4', poster: 'https://picsum.photos/seed/noova-vid-08/1600/1000', title: 'Sala principal', caption: 'Proyecto con iluminación escénica' },
        { src: 'assets/video/piscina2.mp4', poster: 'https://picsum.photos/seed/noova-vid-09/1600/1000', title: 'Luxury loop', caption: 'Video de lujo con iluminación' },
        { src: 'assets/video/Bano.mp4', poster: 'https://picsum.photos/seed/noova-vid-10/1600/1000', title: 'Iluminación y controles', caption: 'Automatización y control de escenas' },
        { src: 'assets/video/Bano1.mp4', poster: 'https://picsum.photos/seed/noova-vid-10/1600/1000', title: 'Iluminación y controles', caption: 'Automatización y control de escenas' },
        { src: 'assets/video/techo_tv.mp4', poster: 'https://picsum.photos/seed/noova-vid-10/1600/1000', title: 'Iluminación y controles', caption: 'Automatización y control de escenas' },
        { src: 'assets/video/techo_tv2.mp4', poster: 'https://picsum.photos/seed/noova-vid-10/1600/1000', title: 'Iluminación y controles', caption: 'Automatización y control de escenas' },
        { src: 'assets/video/iluminacion y controles.mp4', poster: 'https://picsum.photos/seed/noova-vid-10/1600/1000', title: 'Iluminación y controles', caption: 'Automatización y control de escenas' },
        { src: 'assets/video/Sala.mp4', poster: 'https://picsum.photos/seed/noova-vid-10/1600/1000', title: 'Iluminación y controles', caption: 'Automatización y control de escenas' }
    ]
};

(function() {
    'use strict';
    const $ = (s, r = document) => r.querySelector(s),
        $$ = (s, r = document) => [].slice.call(r.querySelectorAll(s));
    const root = document.documentElement;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const pending = v => !v || /\[.*\]/.test(v);
    const LIGHTING = { startupDelay: 1700 };

    /* ---------- Enlaces desde CONFIG ---------- */
    function waUrl(extra) {
        const t = encodeURIComponent(CONFIG.waIntro + (extra ? ' ' + extra : ''));
        return 'https://wa.me/' + CONFIG.whatsapp.replace(/\D/g, '') + '?text=' + t;
    }
    $$('[data-link]').forEach(a => {
        const k = a.dataset.link,
            v = CONFIG[k];
        if (k === 'whatsapp') {
            if (pending(v)) {
                a.setAttribute('aria-disabled', 'true');
                a.href = '#agendar';
                a.removeAttribute('target');
            } else a.href = waUrl();
            return;
        }
        if (pending(v)) { if (k === 'agenda' || k === 'youtube') { a.hidden = true; } return; }
        a.href = v;
        a.hidden = false;
    });

    /* ---------- Header ---------- */
    const header = $('#header');
    const onScroll = () => header.classList.toggle('solid', scrollY > 40);
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Menú móvil ---------- */
    const nav = $('#nav'),
        mbtn = $('#menuBtn');
    const isMobile = () => matchMedia('(max-width: 767px)').matches;

    function setMenu(open) {
        nav.classList.toggle('open', open);
        mbtn.setAttribute('aria-expanded', String(open));
        mbtn.textContent = open ? 'Cerrar' : 'Menú';
        if (open) {
            const f = $('a', nav);
            f && f.focus();
        } else mbtn.focus({ preventScroll: true });
    }
    mbtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
    $$('a', nav).forEach(a => a.addEventListener('click', () => {
        if (isMobile() && nav.classList.contains('open')) {
            nav.classList.remove('open');
            mbtn.setAttribute('aria-expanded', 'false');
            mbtn.textContent = 'Menú';
        }
    }));
    document.addEventListener('keydown', e => {
        if (!nav.classList.contains('open') || !isMobile()) return;
        if (e.key === 'Escape') { setMenu(false); return; }
        if (e.key === 'Tab') {
            const f = [mbtn].concat($$('a', nav)),
                i = f.indexOf(document.activeElement);
            if (e.shiftKey && i <= 0) {
                e.preventDefault();
                f[f.length - 1].focus();
            } else if (!e.shiftKey && i === f.length - 1) {
                e.preventDefault();
                f[0].focus();
            }
        }
    });

    /* ---------- Intersección secciones ---------- */
    const rv = $$('.rv');
    if ('IntersectionObserver' in window && !reduce) {
        const io = new IntersectionObserver(es => es.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        }), { threshold: .12 });
        rv.forEach(el => io.observe(el));
    } else rv.forEach(el => el.classList.add('in'));

    /* ---------- Videos background (carga ligera) ---------- */
    const c = navigator.connection || {},
        slow = c.saveData || /(^|-)(2g|3g)$/.test(c.effectiveType || '');
    $$('.bgvideo').forEach(v => {
        const box = v.parentElement;
        if (box.classList.contains('hero') || box.classList.contains('band')) box.style.backgroundImage = 'url(' + v.getAttribute('poster') + ')';
        if (reduce || slow) return;
        const files = (matchMedia('(max-width: 767px)').matches ? v.dataset.mobile : v.dataset.desktop).split(',');
        let started = false;

        function load() {
            if (started) return;
            started = true;
            files.forEach(f => {
                const s = document.createElement('source');
                s.src = f.trim();
                s.type = /webm$/i.test(f) ? 'video/webm' : 'video/mp4';
                v.appendChild(s);
            });
            v.addEventListener('playing', () => v.classList.add('on'));
            v.load();
            const p = v.play();
            if (p && p.catch) p.catch(() => {});
        }
        if ('IntersectionObserver' in window) {
            new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { load(); if (started) v.play().catch(() => {}); } else v.pause(); }), { threshold: .1 }).observe(box);
        } else load();
    });

    /* ---------- Video de Preguntas frecuentes (sin controles) ----------
       Se reproduce al entrar a la sección; al salir se detiene y vuelve al inicio (primer cuadro). */
    const faqSec = $('#preguntas'),
        faqVid = $('.faq-video');
    if (faqSec && faqVid) {
        if (slow) faqVid.preload = 'none';
        if (!reduce && !slow && 'IntersectionObserver' in window) {
            new IntersectionObserver(es => es.forEach(e => {
                if (e.intersectionRatio >= .25) faqVid.play().catch(() => {});
                else {
                    faqVid.pause();
                    faqVid.currentTime = 0;
                }
            }), { threshold: [0, .25] }).observe(faqSec);
        }
    }

    /* ---------- GALERÍAS (imágenes y videos) ---------- */
    const lb = $('#lightbox'),
        lbBody = $('#lbBody'),
        lbTitle = $('#lbTitle'),
        lbText = $('#lbText');
    const galleries = [];

    function openLightbox(kind, it) {
        lbBody.textContent = '';
        let m;
        if (kind === 'video') {
            m = document.createElement('video');
            m.src = it.src.replace(/ /g, '%20');
            m.controls = true;
            m.autoplay = true;
            m.playsInline = true;
        } else {
            m = document.createElement('img');
            m.src = it.src;
            m.alt = it.title || '';
        }
        lbBody.appendChild(m);
        lbTitle.textContent = it.title || '';
        lbText.textContent = it.caption || '';
        root.classList.add('lb-open');
        lb.showModal();
        galleries.forEach(g => g.sync());
    }
    lb.addEventListener('close', () => {
        lbBody.textContent = '';
        root.classList.remove('lb-open');
        galleries.forEach(g => g.sync());
    });
    lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
    $('#lbClose').addEventListener('click', () => lb.close());

    // Solo 3 elementos viven en el DOM (anterior · actual · siguiente); el resto se crea al llegar.
    function makeGallery(el, kind, items) {
        const stage = $('.gstage', el),
            cur = $('.gcur', el),
            tot = $('.gtot', el),
            fill = $('.gfill', el);
        const n = items.length,
            live = new Map(),
            pad = v => String(v).padStart(2, '0');
        let idx = 0,
            inView = false,
            dragX = null,
            moved = false;
        const mod = i => ((i % n) + n) % n;
        const shouldPlay = b => b.dataset.pos === '0' && inView && !lb.open && !reduce;
        tot.textContent = pad(n);

        function build(i) {
            const it = items[i],
                b = document.createElement('button');
            b.type = 'button';
            b.className = 'gslide';
            const fr = document.createElement('span');
            fr.className = 'gmedia';
            let m;
            if (kind === 'video') {
                m = document.createElement('video');
                m.muted = true;
                m.loop = true;
                m.playsInline = true;
                m.preload = 'metadata';
                m.tabIndex = -1;
                // sin póster: se ve el primer cuadro del propio video (evita imágenes ajenas encima)
                m.src = it.src.replace(/ /g, '%20') + '#t=0.1';
                m.addEventListener('playing', () => b.classList.add('playing'));
                m.addEventListener('pause', () => b.classList.remove('playing'));
                const pl = document.createElement('span');
                pl.className = 'gplay';
                pl.setAttribute('aria-hidden', 'true');
                pl.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>';
                fr.append(m, pl);
                b.addEventListener('mouseenter', () => { m.play().catch(() => {}); });
                b.addEventListener('mouseleave', () => { if (!shouldPlay(b)) m.pause(); });
            } else {
                m = document.createElement('img');
                m.src = it.src;
                m.alt = '';
                m.decoding = 'async';
                m.draggable = false;
                fr.append(m);
            }
            m.addEventListener('error', () => b.classList.add('missing'));
            const exp = document.createElement('span');
            exp.className = 'gexp';
            exp.setAttribute('aria-hidden', 'true');
            exp.textContent = kind === 'video' ? 'Ver completo' : 'Ampliar';
            fr.appendChild(exp);
            const cap = document.createElement('span');
            cap.className = 'gcap';
            const t = document.createElement('span');
            t.className = 'gt';
            t.textContent = it.title || '';
            const d = document.createElement('span');
            d.className = 'gd';
            d.textContent = it.caption || '';
            cap.append(t, d);
            b.append(fr, cap);
            b.addEventListener('click', () => {
                if (moved) { moved = false; return; }
                const p = +b.dataset.pos;
                if (p === 0) openLightbox(kind, it);
                else if (Math.abs(p) === 1) show(mod(idx + p), p, true);
            });
            return b;
        }

        function sync() {
            live.forEach(b => {
                const v = b.querySelector('video');
                if (!v) return;
                if (shouldPlay(b)) v.play().catch(() => {});
                else if (!b.matches(':hover') || lb.open) v.pause();
            });
        }

        function show(to, dir, focus) {
            idx = mod(to);
            const want = [mod(idx - 1), idx, mod(idx + 1)];
            live.forEach((b, i) => {
                if (want.indexOf(i) >= 0) return;
                b.dataset.pos = dir >= 0 ? '-2' : '2';
                b.tabIndex = -1;
                const v = b.querySelector('video');
                if (v) v.pause();
                live.delete(i);
                setTimeout(() => b.remove(), reduce ? 0 : 850);
            });
            want.forEach((i, k) => {
                const p = k - 1;
                let b = live.get(i);
                if (!b) {
                    b = build(i);
                    live.set(i, b);
                    b.dataset.pos = String(dir ? (p > 0 ? 2 : -2) : p);
                    stage.appendChild(b);
                    void b.offsetWidth;
                }
                b.dataset.pos = String(p);
                b.tabIndex = p === 0 ? 0 : -1;
                b.setAttribute('aria-label', (p === 0 ? (kind === 'video' ? 'Ver completo: ' : 'Ampliar: ') : 'Mostrar: ') + (items[i].title || ''));
            });
            cur.textContent = pad(idx + 1);
            fill.style.width = ((idx + 1) / n * 100) + '%';
            if (kind === 'image')[2, -2].forEach(o => { new Image().src = items[mod(idx + o)].src; });
            sync();
            if (focus) { const c = live.get(idx); if (c) c.focus({ preventScroll: true }); }
        }

        $('.gprev', el).addEventListener('click', () => show(idx - 1, -1, false));
        $('.gnext', el).addEventListener('click', () => show(idx + 1, 1, false));
        el.addEventListener('keydown', e => {
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                show(idx + 1, 1, true);
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                show(idx - 1, -1, true);
            }
        });
        stage.addEventListener('pointerdown', e => { dragX = e.clientX; });
        const endDrag = e => {
            if (dragX === null) return;
            const dx = e.clientX - dragX;
            dragX = null;
            if (Math.abs(dx) > 45) {
                moved = true;
                setTimeout(() => { moved = false; }, 80);
                const dir = dx < 0 ? 1 : -1;
                show(idx + dir, dir, false);
            }
        };
        stage.addEventListener('pointerup', endDrag);
        stage.addEventListener('pointercancel', () => { dragX = null; });
        if ('IntersectionObserver' in window) new IntersectionObserver(es => {
            inView = es[0].isIntersecting;
            sync();
        }, { threshold: .4 }).observe(stage);
        else inView = true;

        galleries.push({ sync });
        show(0, 0, false);
    }

    $$('.gal').forEach(el => {
        const kind = el.dataset.kind,
            items = GALLERY[kind === 'video' ? 'videos' : 'images'];
        if (items && items.length >= 3) makeGallery(el, kind, items);
        else el.hidden = true;
    });

    /* ---------- Formulario ---------- */
    const form = $('#citaForm'),
        err = $('#formErr');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const d = new FormData(form),
            nombre = (d.get('nombre') || '').trim(),
            ciudad = (d.get('ciudad') || '').trim(),
            tipo = d.get('tipo'),
            hor = (d.get('horario') || '').trim();
        if (!nombre || !ciudad || !tipo) {
            err.textContent = 'Completa nombre, ciudad y tipo de proyecto.';
            err.hidden = false;
            return;
        }
        if (pending(CONFIG.whatsapp)) {
            err.textContent = 'El número de WhatsApp de NOOVA aún está pendiente de configurar.';
            err.hidden = false;
            return;
        }
        err.hidden = true;
        window.open(waUrl('Soy ' + nombre + ', estoy en ' + ciudad + ' y me interesa contratar para: ' + tipo + '.' + (hor ? ' Horario preferido: ' + hor + '.' : '')), '_blank', 'noopener');
    });

    /* ---------- RIEL DE LUCES ---------- */
    const hero = $('#inicio'),
        h1 = $('#titular'),
        lamp = $('#lamp'),
        rail = $('#rail');
    const SPOT = '<g style="opacity:var(--lit)"><polygon points="-9,58 9,58 -95,1100 95,1100" fill="url(#cone)"/><circle cx="0" cy="60" r="44" fill="url(#halo)"/></g>' +
        '<line x1="0" y1="0" x2="0" y2="14" stroke="#2A2519" stroke-width="2"/><rect x="-12" y="12" width="24" height="44" rx="5" fill="#121110" stroke="#2A2519"/>' +
        '<rect x="-12" y="54" width="24" height="1.6" fill="url(#rim)"/><ellipse cx="0" cy="58" rx="9" ry="3" fill="#FFF3D6" style="opacity:calc(.2 + .8 * var(--lit))"/>';
    $$('.spot-art').forEach(g => g.innerHTML = SPOT);
    const fx = $$('.swing', lamp).map((el, i) => ({ el, off: +el.dataset.off || 0, ang: 0, vel: 0, k: .010 + i * .0013 }));
    let ci = 0;
    fx.forEach((f, i) => { if (f.off === 0) ci = i; });
    let W = innerWidth,
        H = hero.offsetHeight,
        lx = W / 2,
        sp = 104,
        top0 = 80,
        tx = W * .55,
        ty = H * .6,
        cx = tx,
        cy = ty,
        last = -1e9,
        raf = null,
        visible = true,
        touched = false;

    function layout() {
        W = innerWidth;
        H = hero.offsetHeight;
        const m = W < 768;
        top0 = m ? 64 : 80;
        lx = W * .5;
        sp = m ? 58 : 104;
        lamp.style.left = lx + 'px';
        root.style.setProperty('--s', m ? '.8' : '1');
        fx.forEach(f => f.el.style.left = (f.off * sp) + 'px');
        rail.style.left = -(2 * sp + 44) + 'px';
        rail.style.width = (4 * sp + 88) + 'px';
    }
    layout();
    addEventListener('resize', layout);
    const btns = $$('.lamp-btn');
    const label = () => btns.forEach(b => b.setAttribute('aria-label', root.classList.contains('off') ? 'Encender la luz' : 'Apagar la luz'));
    btns.forEach(b => b.addEventListener('click', () => {
        touched = true;
        root.classList.toggle('off');
        label();
    }));
    label();
    if (root.classList.contains('off')) setTimeout(() => {
        if (!touched) {
            root.classList.remove('off');
            label();
        }
    }, LIGHTING.startupDelay);
    let px0 = -1,
        py0 = -1;
    addEventListener('pointermove', e => {
        px0 = e.clientX;
        py0 = e.clientY;
        last = performance.now();
        start();
    }, { passive: true });

    function frame(t) {
        const r = hero.getBoundingClientRect();
        if (px0 >= 0 && t - last <= 3500) {
            tx = px0 - r.left;
            ty = py0 - r.top;
        } else if (!reduce) {
            tx = lx + W * .30 * Math.sin(t / 4200);
            ty = H * (.62 + .10 * Math.sin(t / 5600 + 1));
        }
        cx += (tx - cx) * .08;
        cy += (ty - cy) * .08;
        let settled = Math.abs(tx - cx) < .5 && Math.abs(ty - cy) < .5;
        fx.forEach(f => {
            const fl = lx + f.off * sp,
                want = Math.max(-.6, Math.min(.6, Math.atan2(cx - fl, Math.max(cy - top0, H * .25))));
            if (reduce) {
                f.ang += (want - f.ang) * .2;
                f.vel = 0;
            } else {
                f.vel = (f.vel + (want - f.ang) * f.k) * .93;
                f.ang += f.vel;
            }
            f.el.style.transform = 'rotate(' + (-f.ang) + 'rad)';
            if (Math.abs(want - f.ang) > .002 || Math.abs(f.vel) > .0005) settled = false;
        });
        const d = Math.max(H * .35, Math.min(H * .9, Math.hypot(cx - lx, cy - top0))),
            c = fx[ci];
        const px = lx + d * Math.sin(c.ang),
            py = top0 + d * Math.cos(c.ang),
            hr = h1.getBoundingClientRect();
        hero.style.setProperty('--x', px + 'px');
        hero.style.setProperty('--y', py + 'px');
        hero.style.setProperty('--hx', (r.left + px - hr.left) + 'px');
        hero.style.setProperty('--hy', (r.top + py - hr.top) + 'px');
        raf = (!visible || (reduce && settled)) ? null : requestAnimationFrame(frame);
    }

    function start() { if (!raf && visible) raf = requestAnimationFrame(frame); }
    if ('IntersectionObserver' in window) new IntersectionObserver(es => { visible = es[0].isIntersecting; if (visible) start(); }).observe(hero);
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && raf) {
            cancelAnimationFrame(raf);
            raf = null;
        } else start();
    });
    start();

    /* ---------- PWA ---------- */
    if ('serviceWorker' in navigator && location.protocol !== 'file:') addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
})();