// Printer Theme JavaScript
// Paper feeds out from slot on load; feeds back in on navigate.

(function () {
  'use strict';

  /* ------------------------------------------------------------------ */
  /* Helpers                                                              */
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
  /* Active button state                                                  */
  /* ------------------------------------------------------------------ */

  function setActiveButton() {
    var aboutBtn  = document.getElementById('btn-about');
    var eventsBtn = document.getElementById('btn-events');
    if (!aboutBtn || !eventsBtn) return;

    aboutBtn.classList.remove('active');
    eventsBtn.classList.remove('active');

    if (isAboutPage()) {
      aboutBtn.classList.add('active');
    } else if (isEventsPage()) {
      eventsBtn.classList.add('active');
    }
  }

  /* ------------------------------------------------------------------ */
  /* Paper feed-in animation on page load                                 */
  /* ------------------------------------------------------------------ */

  function feedPaperIn() {
    var paper = document.getElementById('current-paper');
    var area  = document.getElementById('paper-output-area');
    if (!paper || !area) return;

    // Reveal the output area so paper is visible as it slides down
    area.style.overflow = 'hidden';

    // Remove any leftover animation classes
    paper.classList.remove('feeding-in', 'feeding-out');

    // Small rAF delay so browser paints the initial hidden state first
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        paper.classList.add('feeding-in');
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Navigation with feed-out animation                                   */
  /* ------------------------------------------------------------------ */

  function setupNavigation() {
    var aboutBtn  = document.getElementById('btn-about');
    var eventsBtn = document.getElementById('btn-events');

    if (aboutBtn) {
      aboutBtn.addEventListener('click', function () {
        navigateTo('about');
      });
    }

    if (eventsBtn) {
      eventsBtn.addEventListener('click', function () {
        navigateTo('events');
      });
    }
  }

  function navigateTo(page) {
    // Don't navigate if already on that page
    if (page === 'about'  && isAboutPage())  return;
    if (page === 'events' && isEventsPage()) return;

    var paper = document.getElementById('current-paper');
    if (!paper) return;

    // Play sound
    playPrintSound();

    // Feed paper back into slot
    paper.classList.remove('feeding-in');
    paper.classList.add('feeding-out');

    // After animation completes, navigate
    setTimeout(function () {
      var url = page === 'about' ? '/printer/' : '/printer/events/';
      window.location.href = url;
    }, 700); // matches paperFeedOut duration (0.7s)
  }

  /* ------------------------------------------------------------------ */
  /* Print sound (Web Audio API, synthesised)                             */
  /* ------------------------------------------------------------------ */

  function playPrintSound() {
    try {
      var AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      var ctx = new AudioCtx();

      // Simulate a mechanical print head sweep: bursts of noise
      var bufferSize = ctx.sampleRate * 0.6; // 0.6 s
      var buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      var data   = buffer.getChannelData(0);

      for (var i = 0; i < bufferSize; i++) {
        // Sparse noise bursts
        data[i] = (Math.random() * 2 - 1) * (Math.sin(i / 200) > 0.3 ? 0.15 : 0);
      }

      var source = ctx.createBufferSource();
      source.buffer = buffer;

      // Low-pass filter to make it sound mechanical, not harsh
      var filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1800;

      var gain = ctx.createGain();
      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);

      source.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      source.start();
    } catch (e) {
      // Fallback: HTML5 audio element
      var audio = document.getElementById('print-sound');
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch(function () {});
      }
    }
  }

  /* ------------------------------------------------------------------ */
  /* Init                                                                 */
  /* ------------------------------------------------------------------ */

  function init() {
    setActiveButton();
    setupNavigation();
    feedPaperIn();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
