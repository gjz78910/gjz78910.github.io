// Printer Theme JavaScript

(function () {
  'use strict';

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

  function setActiveButton() {
    var aboutBtn  = document.getElementById('btn-about');
    var eventsBtn = document.getElementById('btn-events');
    if (!aboutBtn || !eventsBtn) return;

    aboutBtn.classList.remove('active');
    eventsBtn.classList.remove('active');
    aboutBtn.setAttribute('aria-current', 'false');
    eventsBtn.setAttribute('aria-current', 'false');

    if (isAboutPage()) {
      aboutBtn.classList.add('active');
      aboutBtn.setAttribute('aria-current', 'page');
    } else if (isEventsPage()) {
      eventsBtn.classList.add('active');
      eventsBtn.setAttribute('aria-current', 'page');
    }
  }

  /* ------------------------------------------------------------------ */
  /* Paper feed-in on page load                                           */
  /* ------------------------------------------------------------------ */

  function feedPaperIn() {
    var paper = document.getElementById('current-paper');
    if (!paper) return;
    paper.classList.remove('feeding-in');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        paper.classList.add('feeding-in');
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Navigation                                                           */
  /* ------------------------------------------------------------------ */

  function setupNavigation() {
    var aboutBtn  = document.getElementById('btn-about');
    var eventsBtn = document.getElementById('btn-events');

    if (aboutBtn) {
      aboutBtn.addEventListener('click', function () {
        playKeyClick();
        navigateTo('about');
      });
    }
    if (eventsBtn) {
      eventsBtn.addEventListener('click', function () {
        playKeyClick();
        navigateTo('events');
      });
    }
  }

  function navigateTo(page) {
    if (page === 'about'  && isAboutPage())  return;
    if (page === 'events' && isEventsPage()) return;
    playPrintSound();
    setTimeout(function () {
      window.location.href = page === 'about' ? '/printer/' : '/printer/events/';
    }, 80);
  }

  /* ------------------------------------------------------------------ */
  /* KEY CLICK — plays button_sound.mp3                                  */
  /* ------------------------------------------------------------------ */

  function playKeyClick() {
    var audio = document.getElementById('button-sound');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(function () {});
  }

  /* ------------------------------------------------------------------ */
  /* PRINT SOUND — plays printer_sound.mp3                               */
  /* ------------------------------------------------------------------ */

  function playPrintSound() {
    var audio = document.getElementById('print-sound');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(function () {});
  }

  /* ------------------------------------------------------------------ */
  /* Init                                                                 */
  /* ------------------------------------------------------------------ */

  function init() {
    setActiveButton();
    setupNavigation();
    feedPaperIn();
    // Play printer sound on every page load (simulates printing the current page)
    playPrintSound();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
