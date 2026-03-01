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
  /* SOUNDS                                                               */
  /* ------------------------------------------------------------------ */

  function playKeyClick() {
    var audio = document.getElementById('button-sound');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(function () {});
  }

  function playPrintSound() {
    var audio = document.getElementById('print-sound');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(function () {});
  }

  /* ------------------------------------------------------------------ */
  /* Navigation                                                           */
  /* ------------------------------------------------------------------ */

  function setupNavigation() {
    var aboutBtn  = document.getElementById('btn-about');
    var eventsBtn = document.getElementById('btn-events');

    if (aboutBtn) {
      aboutBtn.addEventListener('click', function () {
        // Play button sound immediately on click (no delay)
        playKeyClick();
        if (!isAboutPage()) {
          // Play print sound and navigate — sound fires concurrently
          playPrintSound();
          window.location.href = '/printer/';
        }
      });
    }
    if (eventsBtn) {
      eventsBtn.addEventListener('click', function () {
        playKeyClick();
        if (!isEventsPage()) {
          playPrintSound();
          window.location.href = '/printer/events/';
        }
      });
    }
  }

  /* ------------------------------------------------------------------ */
  /* First-load print sound                                               */
  /* Browsers block autoplay until first user interaction.               */
  /* We attempt to play immediately; if blocked, play on first click.    */
  /* ------------------------------------------------------------------ */

  function setupPageLoadSound() {
    var audio = document.getElementById('print-sound');
    if (!audio) return;

    // Try playing immediately (works if user navigated from another page)
    var promise = audio.play();
    if (promise !== undefined) {
      promise.catch(function () {
        // Autoplay blocked — play on the very first interaction
        var played = false;
        function onFirstInteraction() {
          if (played) return;
          played = true;
          audio.currentTime = 0;
          audio.play().catch(function () {});
          document.removeEventListener('click', onFirstInteraction);
          document.removeEventListener('keydown', onFirstInteraction);
          document.removeEventListener('touchstart', onFirstInteraction);
        }
        document.addEventListener('click', onFirstInteraction, { once: true });
        document.addEventListener('keydown', onFirstInteraction, { once: true });
        document.addEventListener('touchstart', onFirstInteraction, { once: true });
      });
    }
  }

  /* ------------------------------------------------------------------ */
  /* Init                                                                 */
  /* ------------------------------------------------------------------ */

  function init() {
    setActiveButton();
    setupNavigation();
    feedPaperIn();
    setupPageLoadSound();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
