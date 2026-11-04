/* Aviso de cookies de NOOVA Designs — se inyecta igual en todas las páginas.
   Solo guarda en el navegador una marca técnica ("aviso visto") para no repetirlo. */
(function () {
    var KEY = 'noova_aviso_cookies';
    try { if (localStorage.getItem(KEY) === '1') return; } catch (e) {}

    var el = document.createElement('div');
    el.className = 'cookie-notice';
    el.setAttribute('role', 'region');
    el.setAttribute('aria-label', 'Aviso de cookies');
    el.innerHTML =
        '<p class="cookie-text"><strong>Sobre las cookies.</strong> Este sitio solo usa almacenamiento técnico necesario para funcionar y recordar este aviso. ' +
        'No usamos cookies de analítica ni de publicidad.</p>' +
        '<div class="cookie-actions">' +
        '<a class="cookie-more" href="privacidad.html#cookies">Más información</a>' +
        '<button type="button" class="btn btn-sm cookie-ok">Entendido</button>' +
        '</div>';
    document.body.appendChild(el);

    el.querySelector('.cookie-ok').addEventListener('click', function () {
        try { localStorage.setItem(KEY, '1'); } catch (e) {}
        el.classList.add('is-out');
        setTimeout(function () { el.remove(); }, 320);
    });
})();
