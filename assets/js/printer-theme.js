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

  function setPaperLoadedState(loaded) {
    var container = document.querySelector('.printer-container');
    if (!container) return;
    container.classList.toggle('paper-loaded', !!loaded);
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
    var audio = document.getElementById(id);
    if (!audio) return;
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
        playSound('print-sound');
        if (isAboutPage()) {
          var content = document.querySelector('.paper-content');
          if (content) content.style.visibility = 'visible';
          var paper = document.getElementById('current-paper');
          if (paper) paper.style.display = 'block';
          setPaperLoadedState(true);
          setActiveButton('about');
          feedPaperIn();
        } else {
          sessionStorage.setItem('printer-nav', 'about');
          // 100ms delay lets audio start before page unloads
          setTimeout(function () {
            window.location.href = '/printer/';
          }, 100);
        }
      });
    }

    if (eventsBtn) {
      eventsBtn.addEventListener('click', function () {
        playSound('button-sound');
        playSound('print-sound');
        if (isEventsPage()) {
          var content = document.querySelector('.paper-content');
          if (content) content.style.visibility = 'visible';
          var paper = document.getElementById('current-paper');
          if (paper) paper.style.display = 'block';
          setPaperLoadedState(true);
          setActiveButton('events');
          feedPaperIn();
        } else {
          sessionStorage.setItem('printer-nav', 'events');
          setTimeout(function () {
            window.location.href = '/printer/events/';
          }, 100);
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
      setPaperLoadedState(true);
      feedPaperIn();
      playSound('print-sound');
    } else {
      // Direct visit — hide paper entirely, just show the printer body
      if (paper) paper.style.display = 'none';
      setPaperLoadedState(false);
    }

    setupNavigation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
