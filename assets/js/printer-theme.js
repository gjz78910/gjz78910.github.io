// Printer Theme JavaScript

(function () {
  'use strict';

  var soundPools = {};

  /* ------------------------------------------------------------------ */
  /* Page detection                                                       */
  /* ------------------------------------------------------------------ */

  function isAboutPage() {
    var p = window.location.pathname;
    return p === '/printer/' || p === '/printer' || p.endsWith('/printer/');
  }

  function isEventsPage() {
    var p = window.location.pathname;
    return p.includes('/printer/events');
  }

  /* ------------------------------------------------------------------ */
  /* Active nav button                                                    */
  /* ------------------------------------------------------------------ */

  function setActiveButton(page) {
    var aboutBtn  = document.getElementById('btn-about');
    var eventsBtn = document.getElementById('btn-events');
    if (!aboutBtn || !eventsBtn) return;
    aboutBtn.classList.toggle('active', page === 'about');
    eventsBtn.classList.toggle('active', page === 'events');
    aboutBtn.setAttribute('aria-current', page === 'about' ? 'page' : 'false');
    eventsBtn.setAttribute('aria-current', page === 'events' ? 'page' : 'false');
  }

  /* ------------------------------------------------------------------ */
  /* Paper animation                                                      */
  /* ------------------------------------------------------------------ */

  function feedPaperIn() {
    var paper = document.getElementById('current-paper');
    if (!paper) return;
    paper.style.display = 'block';
    paper.classList.remove('feeding-in');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        paper.classList.add('feeding-in');
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Sounds                                                               */
  /* ------------------------------------------------------------------ */

  function playSound(id) {
    var pool = soundPools[id];
    if (!pool || !pool.players || pool.players.length === 0) return;

    var player = null;
    var i;
    var idx;
    var candidate;
    var len = pool.players.length;

    // Prefer a buffered player that is currently idle.
    for (i = 0; i < len; i++) {
      idx = (pool.index + i) % len;
      candidate = pool.players[idx];
      if (candidate.readyState >= 2 && (candidate.paused || candidate.ended)) {
        player = candidate;
        pool.index = (idx + 1) % len;
        break;
      }
    }

    // Otherwise pick any buffered player.
    if (!player) {
      for (i = 0; i < len; i++) {
        idx = (pool.index + i) % len;
        candidate = pool.players[idx];
        if (candidate.readyState >= 2) {
          player = candidate;
          pool.index = (idx + 1) % len;
          break;
        }
      }
    }

    // Last resort: use next pool entry.
    if (!player) {
      player = pool.players[pool.index];
      pool.index = (pool.index + 1) % len;
    }

    try {
      if (player.readyState < 2) player.load();
      player.currentTime = 0;
      var p = player.play();
      if (p && p.catch) {
        p.catch(function () {
          // Fallback one-shot player in case the pooled instance is blocked.
          try {
            var fallback = new Audio(pool.src);
            fallback.preload = 'auto';
            var fp = fallback.play();
            if (fp && fp.catch) fp.catch(function () {});
          } catch (err) {}
        });
      }
    } catch (e) {
      try {
        var emergency = new Audio(pool.src);
        emergency.preload = 'auto';
        emergency.play();
      } catch (err) {}
    }
  }

  function getSoundSrc(id) {
    var audio = document.getElementById(id);
    if (!audio) return null;

    if (audio.currentSrc) return audio.currentSrc;

    var source = audio.querySelector('source[type="audio/mpeg"]') || audio.querySelector('source');
    return source ? source.src : null;
  }

  function initSoundPool(id, size) {
    var src = getSoundSrc(id);
    if (!src) return;

    var players = [];
    for (var i = 0; i < size; i++) {
      var player = new Audio(src);
      player.preload = 'auto';
      player.load();
      players.push(player);
    }

    soundPools[id] = {
      src: src,
      players: players,
      index: 0
    };
  }

  function initSounds() {
    initSoundPool('print-sound', 4);
    initSoundPool('button-sound', 4);
  }

  /* ------------------------------------------------------------------ */
  /* Navigation                                                           */
  /* ------------------------------------------------------------------ */

  function setupNavigation() {
    var aboutBtn  = document.getElementById('btn-about');
    var eventsBtn = document.getElementById('btn-events');

    if (aboutBtn) {
      aboutBtn.addEventListener('click', function () {
        if (isAboutPage()) {
          playSound('print-sound');
          playSound('button-sound');
          var content = document.querySelector('.paper-content');
          if (content) content.style.visibility = 'visible';
          var paper = document.getElementById('current-paper');
          if (paper) paper.style.display = 'block';
          setActiveButton('about');
          feedPaperIn();
        } else {
          playSound('button-sound');
          // Play full printer sound on destination page to avoid unload cutoff.
          sessionStorage.setItem('printer-play-print-sound', '1');
          sessionStorage.setItem('printer-nav', 'about');
          setTimeout(function () {
            window.location.href = '/printer/';
          }, 150);
        }
      });
    }

    if (eventsBtn) {
      eventsBtn.addEventListener('click', function () {
        if (isEventsPage()) {
          playSound('print-sound');
          playSound('button-sound');
          var content = document.querySelector('.paper-content');
          if (content) content.style.visibility = 'visible';
          var paper = document.getElementById('current-paper');
          if (paper) paper.style.display = 'block';
          setActiveButton('events');
          feedPaperIn();
        } else {
          playSound('button-sound');
          // Play full printer sound on destination page to avoid unload cutoff.
          sessionStorage.setItem('printer-play-print-sound', '1');
          sessionStorage.setItem('printer-nav', 'events');
          setTimeout(function () {
            window.location.href = '/printer/events/';
          }, 150);
        }
      });
    }
  }

  /* ------------------------------------------------------------------ */
  /* Init                                                                 */
  /* ------------------------------------------------------------------ */

  function init() {
    var paper = document.getElementById('current-paper');
    var nav = sessionStorage.getItem('printer-nav');
    var shouldPlayPrintSound = sessionStorage.getItem('printer-play-print-sound') === '1';

    initSounds();

    if (nav === 'about' && isAboutPage()) {
      setActiveButton('about');
    } else if (nav === 'events' && isEventsPage()) {
      setActiveButton('events');
    } else {
      setActiveButton('');
    }

    if (nav) {
      // Came here via button click — show content and animate
      var content = document.querySelector('.paper-content');
      if (content) content.style.visibility = 'visible';
      if (paper) paper.style.display = 'block';
      feedPaperIn();
      if (shouldPlayPrintSound) {
        playSound('print-sound');
        sessionStorage.removeItem('printer-play-print-sound');
      }
    } else {
      // Direct visit — hide paper entirely, just show the printer body
      if (paper) paper.style.display = 'none';
      sessionStorage.removeItem('printer-play-print-sound');
    }

    setupNavigation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
