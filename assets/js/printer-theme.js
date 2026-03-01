// Printer Theme JavaScript
// Paper feeds out of the slot on load; feeds back in on navigate.
// Sound: bandpass-filtered white noise burst simulating a mechanical print head.

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
  /* Paper starts at translateY(-100%) and slides down out of the slot.  */
  /* ------------------------------------------------------------------ */

  function feedPaperIn() {
    var paper = document.getElementById('current-paper');
    if (!paper) return;

    paper.classList.remove('feeding-in', 'feeding-out');

    // Two rAF frames ensure the browser has painted the initial hidden state
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
      aboutBtn.addEventListener('click', function () { navigateTo('about'); });
    }
    if (eventsBtn) {
      eventsBtn.addEventListener('click', function () { navigateTo('events'); });
    }
  }

  function navigateTo(page) {
    if (page === 'about'  && isAboutPage())  return;
    if (page === 'events' && isEventsPage()) return;

    var paper = document.getElementById('current-paper');
    if (!paper) return;

    playPrintSound();

    paper.classList.remove('feeding-in');
    paper.classList.add('feeding-out');

    // Navigate after feed-out animation completes (0.65s)
    setTimeout(function () {
      window.location.href = page === 'about' ? '/printer/' : '/printer/events/';
    }, 650);
  }

  /* ------------------------------------------------------------------ */
  /* Print sound                                                          */
  /*                                                                      */
  /* Simulates a dot-matrix / inkjet print head:                          */
  /*  1. White noise source (random samples)                              */
  /*  2. Bandpass filter centred ~1.8 kHz (mechanical rattle range)       */
  /*  3. Amplitude envelope: fast attack, slow decay over ~1.1s           */
  /*  4. A second, slightly detuned layer for width                       */
  /* ------------------------------------------------------------------ */

  function playPrintSound() {
    try {
      var AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) { return; }

      var ctx        = new AudioCtx();
      var sampleRate = ctx.sampleRate;
      var duration   = 1.1; // seconds
      var frameCount = Math.floor(sampleRate * duration);

      // --- Layer 1: main print-head sweep ---
      var buffer1 = ctx.createBuffer(1, frameCount, sampleRate);
      var data1   = buffer1.getChannelData(0);
      for (var i = 0; i < frameCount; i++) {
        data1[i] = Math.random() * 2 - 1;
      }

      var src1 = ctx.createBufferSource();
      src1.buffer = buffer1;

      // Bandpass: centre ~1800 Hz, Q=2.5 (mechanical rattle)
      var bp1 = ctx.createBiquadFilter();
      bp1.type            = 'bandpass';
      bp1.frequency.value = 1800;
      bp1.Q.value         = 2.5;

      // Second bandpass layer for low-end thud
      var bp1b = ctx.createBiquadFilter();
      bp1b.type            = 'bandpass';
      bp1b.frequency.value = 400;
      bp1b.Q.value         = 1.5;

      var gain1 = ctx.createGain();
      var now   = ctx.currentTime;
      gain1.gain.setValueAtTime(0, now);
      gain1.gain.linearRampToValueAtTime(0.35, now + 0.04);  // fast attack
      gain1.gain.setValueAtTime(0.35, now + 0.08);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + duration); // slow decay

      src1.connect(bp1);
      bp1.connect(gain1);
      gain1.connect(ctx.destination);

      // Low thud layer (quieter)
      var src1b = ctx.createBufferSource();
      src1b.buffer = buffer1;
      var gain1b = ctx.createGain();
      gain1b.gain.setValueAtTime(0, now);
      gain1b.gain.linearRampToValueAtTime(0.15, now + 0.03);
      gain1b.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      src1b.connect(bp1b);
      bp1b.connect(gain1b);
      gain1b.connect(ctx.destination);

      // --- Layer 2: detuned copy for stereo width / texture ---
      var buffer2 = ctx.createBuffer(1, frameCount, sampleRate);
      var data2   = buffer2.getChannelData(0);
      for (var j = 0; j < frameCount; j++) {
        data2[j] = Math.random() * 2 - 1;
      }

      var src2 = ctx.createBufferSource();
      src2.buffer = buffer2;

      var bp2 = ctx.createBiquadFilter();
      bp2.type            = 'bandpass';
      bp2.frequency.value = 2200; // slightly higher centre
      bp2.Q.value         = 3;

      var gain2 = ctx.createGain();
      gain2.gain.setValueAtTime(0, now);
      gain2.gain.linearRampToValueAtTime(0.18, now + 0.06);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + duration * 0.8);

      src2.connect(bp2);
      bp2.connect(gain2);
      gain2.connect(ctx.destination);

      // --- Rhythmic amplitude modulation (print head back-and-forth) ---
      // Modulate gain1 with a low-frequency oscillator ~8 Hz
      var lfo = ctx.createOscillator();
      lfo.frequency.value = 8;
      var lfoGain = ctx.createGain();
      lfoGain.gain.value = 0.12;
      lfo.connect(lfoGain);
      lfoGain.connect(gain1.gain);
      lfo.start(now);
      lfo.stop(now + duration);

      // Start all sources
      src1.start(now);
      src1.stop(now + duration);
      src1b.start(now);
      src1b.stop(now + duration);
      src2.start(now + 0.02); // slight offset for texture
      src2.stop(now + duration);

      // Close context after playback to free resources
      setTimeout(function () {
        try { ctx.close(); } catch (e) {}
      }, (duration + 0.2) * 1000);

    } catch (e) {
      // Fallback: HTML5 audio element if Web Audio API unavailable
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
