// Printer Theme JavaScript

(function () {
  'use strict';

  var soundPools = {};
  var BUTTON_SOUND_DELAY_MS = 500;
  var PAPER_ANIMATION_DELAY_MS = 1000;
  var pendingActionTimer = null;
  var pendingPrintTimer = null;

  /* ------------------------------------------------------------------ */
  /* Page detection                                                       */
  /* ------------------------------------------------------------------ */

  function isAboutPage() {
    var p = window.location.pathname;
    return p === '/' || p === '/index.html' || p === '/printer/' || p === '/printer' || p.endsWith('/printer/');
  }

  function isEventsPage() {
    var p = window.location.pathname;
    return p === '/events/' || p === '/events' || p.includes('/printer/events');
  }

  function isPublicationsPage() {
    var p = window.location.pathname;
    return p === '/publications/' || p === '/publications' || p.includes('/printer/publications');
  }

  /* ------------------------------------------------------------------ */
  /* Active nav button                                                    */
  /* ------------------------------------------------------------------ */

  function setActiveButton(page) {
    var aboutBtn  = document.getElementById('btn-about');
    var eventsBtn = document.getElementById('btn-events');
    var publicationsBtn = document.getElementById('btn-publications');
    if (!aboutBtn || !eventsBtn || !publicationsBtn) return;
    aboutBtn.classList.toggle('active', page === 'about');
    eventsBtn.classList.toggle('active', page === 'events');
    publicationsBtn.classList.toggle('active', page === 'publications');
    aboutBtn.setAttribute('aria-current', page === 'about' ? 'page' : 'false');
    eventsBtn.setAttribute('aria-current', page === 'events' ? 'page' : 'false');
    publicationsBtn.setAttribute('aria-current', page === 'publications' ? 'page' : 'false');
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

    var i;
    var player = pool.players[0];
    var targetVolume = id === 'print-sound' ? 0.5 : 1;

    // Force-interrupt any in-progress playback for this sound.
    for (i = 0; i < pool.players.length; i++) {
      try {
        pool.players[i].pause();
        pool.players[i].currentTime = 0;
        pool.players[i].volume = targetVolume;
      } catch (err) {}
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

  function clearPendingAction() {
    if (pendingActionTimer) {
      clearTimeout(pendingActionTimer);
      pendingActionTimer = null;
    }
  }

  function clearPendingPrint() {
    if (pendingPrintTimer) {
      clearTimeout(pendingPrintTimer);
      pendingPrintTimer = null;
    }
  }

  function startPrintingWithDelay() {
    clearPendingPrint();
    playSound('print-sound');
    pendingPrintTimer = setTimeout(function () {
      feedPaperIn();
      pendingPrintTimer = null;
    }, PAPER_ANIMATION_DELAY_MS);
  }

  /* ------------------------------------------------------------------ */
  /* Navigation                                                           */
  /* ------------------------------------------------------------------ */

  function setupNavigation() {
    var aboutBtn  = document.getElementById('btn-about');
    var eventsBtn = document.getElementById('btn-events');
    var publicationsBtn = document.getElementById('btn-publications');

    if (aboutBtn) {
      aboutBtn.addEventListener('click', function () {
        playSound('button-sound');
        clearPendingAction();
        if (isAboutPage()) {
          var content = document.querySelector('.paper-content');
          if (content) content.style.visibility = 'visible';
          var paper = document.getElementById('current-paper');
          if (paper) paper.style.display = 'block';
          setActiveButton('about');
          pendingActionTimer = setTimeout(function () {
            startPrintingWithDelay();
            pendingActionTimer = null;
          }, BUTTON_SOUND_DELAY_MS);
        } else {
          sessionStorage.setItem('printer-nav', 'about');
          pendingActionTimer = setTimeout(function () {
            window.location.href = '/';
          }, BUTTON_SOUND_DELAY_MS);
        }
      });
    }

    if (eventsBtn) {
      eventsBtn.addEventListener('click', function () {
        playSound('button-sound');
        clearPendingAction();
        if (isEventsPage()) {
          var content = document.querySelector('.paper-content');
          if (content) content.style.visibility = 'visible';
          var paper = document.getElementById('current-paper');
          if (paper) paper.style.display = 'block';
          setActiveButton('events');
          pendingActionTimer = setTimeout(function () {
            startPrintingWithDelay();
            pendingActionTimer = null;
          }, BUTTON_SOUND_DELAY_MS);
        } else {
          sessionStorage.setItem('printer-nav', 'events');
          pendingActionTimer = setTimeout(function () {
            window.location.href = '/events/';
          }, BUTTON_SOUND_DELAY_MS);
        }
      });
    }

    if (publicationsBtn) {
      publicationsBtn.addEventListener('click', function () {
        playSound('button-sound');
        clearPendingAction();
        if (isPublicationsPage()) {
          var content = document.querySelector('.paper-content');
          if (content) content.style.visibility = 'visible';
          var paper = document.getElementById('current-paper');
          if (paper) paper.style.display = 'block';
          setActiveButton('publications');
          pendingActionTimer = setTimeout(function () {
            startPrintingWithDelay();
            pendingActionTimer = null;
          }, BUTTON_SOUND_DELAY_MS);
        } else {
          sessionStorage.setItem('printer-nav', 'publications');
          pendingActionTimer = setTimeout(function () {
            window.location.href = '/publications/';
          }, BUTTON_SOUND_DELAY_MS);
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

    initSounds();

    if (nav === 'about' && isAboutPage()) {
      setActiveButton('about');
    } else if (nav === 'events' && isEventsPage()) {
      setActiveButton('events');
    } else if (nav === 'publications' && isPublicationsPage()) {
      setActiveButton('publications');
    } else if (isAboutPage()) {
      setActiveButton('about');
    } else if (isEventsPage()) {
      setActiveButton('events');
    } else if (isPublicationsPage()) {
      setActiveButton('publications');
    } else {
      setActiveButton('');
    }

    if (nav) {
      // Came here via button click — show content and animate
      var content = document.querySelector('.paper-content');
      if (content) content.style.visibility = 'visible';
      if (paper) paper.style.display = 'block';
      startPrintingWithDelay();
    } else {
      // Direct visit — hide paper entirely, just show the printer body
      if (paper) paper.style.display = 'none';
    }

    setupNavigation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
