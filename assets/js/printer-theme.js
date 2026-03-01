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

    // Only mark active if user navigated here via a button click
    if (sessionStorage.getItem('printer-active') === 'about' && isAboutPage()) {
      aboutBtn.classList.add('active');
      aboutBtn.setAttribute('aria-current', 'page');
    } else if (sessionStorage.getItem('printer-active') === 'events' && isEventsPage()) {
      eventsBtn.classList.add('active');
      eventsBtn.setAttribute('aria-current', 'page');
    }
  }

  /* ------------------------------------------------------------------ */
  /* Content visibility                                                   */
  /* On first load (no sessionStorage key), hide the paper content       */
  /* so the paper appears blank. Content shows only after a button click. */
  /* ------------------------------------------------------------------ */

  function initContentVisibility() {
    var content = document.querySelector('.paper-content');
    if (!content) return;

    var activated = sessionStorage.getItem('printer-active');
    if (!activated) {
      // First visit — hide content, show blank paper
      content.style.visibility = 'hidden';
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
    // Clone and play to avoid delay from currentTime reset
    var clone = audio.cloneNode();
    clone.volume = audio.volume;
    clone.play().catch(function () {});
  }

  function playPrintSound() {
    var audio = document.getElementById('print-sound');
    if (!audio) return;
    var clone = audio.cloneNode();
    clone.volume = audio.volume;
    clone.play().catch(function () {});
  }

  /* ------------------------------------------------------------------ */
  /* Navigation                                                           */
  /* ------------------------------------------------------------------ */

  function setupNavigation() {
    var aboutBtn  = document.getElementById('btn-about');
    var eventsBtn = document.getElementById('btn-events');

    if (aboutBtn) {
      aboutBtn.addEventListener('click', function () {
        // Play sounds immediately — no delay
        playKeyClick();
        playPrintSound();
        // Mark which page was activated
        sessionStorage.setItem('printer-active', 'about');
        if (!isAboutPage()) {
          window.location.href = '/printer/';
        } else {
          // Already on about page — just show content and animate
          var content = document.querySelector('.paper-content');
          if (content) content.style.visibility = 'visible';
          setActiveButton();
          feedPaperIn();
        }
      });
    }

    if (eventsBtn) {
      eventsBtn.addEventListener('click', function () {
        playKeyClick();
        playPrintSound();
        sessionStorage.setItem('printer-active', 'events');
        if (!isEventsPage()) {
          window.location.href = '/printer/events/';
        } else {
          var content = document.querySelector('.paper-content');
          if (content) content.style.visibility = 'visible';
          setActiveButton();
          feedPaperIn();
        }
      });
    }
  }

  /* ------------------------------------------------------------------ */
  /* Page load: feed paper in if content is active                       */
  /* ------------------------------------------------------------------ */

  function initPageLoad() {
    var activated = sessionStorage.getItem('printer-active');
    if (activated) {
      // User navigated here via button — show content and animate
      var content = document.querySelector('.paper-content');
      if (content) content.style.visibility = 'visible';
      feedPaperIn();
      playPrintSound();
    } else {
      // First visit — animate blank paper in (no content)
      feedPaperIn();
    }
  }

  /* ------------------------------------------------------------------ */
  /* Init                                                                 */
  /* ------------------------------------------------------------------ */

  function init() {
    initContentVisibility();
    setActiveButton();
    setupNavigation();
    initPageLoad();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
