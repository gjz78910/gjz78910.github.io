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
  /* SOUNDS — play directly on the audio element, no cloneNode           */
  /* ------------------------------------------------------------------ */

  function playSound(id) {
    var audio = document.getElementById(id);
    if (!audio) return;
    // Reset and play — this is synchronous enough for click handlers
    try {
      audio.pause();
      audio.currentTime = 0;
      var p = audio.play();
      if (p && p.catch) p.catch(function () {});
    } catch (e) {}
  }

  /* ------------------------------------------------------------------ */
  /* Navigation                                                           */
  /* ------------------------------------------------------------------ */

  function setupNavigation() {
    var aboutBtn  = document.getElementById('btn-about');
    var eventsBtn = document.getElementById('btn-events');

    if (aboutBtn) {
      aboutBtn.addEventListener('click', function () {
        playSound('button-sound');
        if (isAboutPage()) {
          // Already here — just show/animate content
          var content = document.querySelector('.paper-content');
          if (content) content.style.visibility = 'visible';
          setActiveButton('about');
          playSound('print-sound');
          feedPaperIn();
        } else {
          sessionStorage.setItem('printer-nav', 'about');
          playSound('print-sound');
          window.location.href = '/printer/';
        }
      });
    }

    if (eventsBtn) {
      eventsBtn.addEventListener('click', function () {
        playSound('button-sound');
        if (isEventsPage()) {
          var content = document.querySelector('.paper-content');
          if (content) content.style.visibility = 'visible';
          setActiveButton('events');
          playSound('print-sound');
          feedPaperIn();
        } else {
          sessionStorage.setItem('printer-nav', 'events');
          playSound('print-sound');
          window.location.href = '/printer/events/';
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

    // Determine active page from sessionStorage
    if (nav === 'about' && isAboutPage()) {
      setActiveButton('about');
    } else if (nav === 'events' && isEventsPage()) {
      setActiveButton('events');
    } else {
      setActiveButton('');
    }

    if (nav) {
      // Navigated here via button — show content and animate paper in
      var content = document.querySelector('.paper-content');
      if (content) content.style.visibility = 'visible';
      if (paper) paper.style.display = 'block';
      feedPaperIn();
      playSound('print-sound');
    } else {
      // First load / direct visit — hide paper completely, show blank printer
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
