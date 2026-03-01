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
      aboutBtn.addEventListener('mousedown', playKeyClick);
      aboutBtn.addEventListener('click', function () { navigateTo('about'); });
    }
    if (eventsBtn) {
      eventsBtn.addEventListener('mousedown', playKeyClick);
      eventsBtn.addEventListener('click', function () { navigateTo('events'); });
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
  /* KEY CLICK — tape/radio button feel                                   */
  /*                                                                      */
  /* A real tape button makes a soft "clunk": the mechanism body          */
  /* bottoms out with a low thud, then a brief plastic resonance.         */
  /* No high-frequency click. Soft, muted, mechanical.                   */
  /* ------------------------------------------------------------------ */

  function playKeyClick() {
    try {
      var AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      var ctx = new AudioCtx();
      var now = ctx.currentTime;

      /* --- Body thud: sine sweep 200→55 Hz, 55ms --- */
      var thud = ctx.createOscillator();
      thud.type = 'sine';
      thud.frequency.setValueAtTime(200, now);
      thud.frequency.exponentialRampToValueAtTime(55, now + 0.055);

      var thudGain = ctx.createGain();
      thudGain.gain.setValueAtTime(0.5, now);
      thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

      thud.connect(thudGain);
      thudGain.connect(ctx.destination);
      thud.start(now);
      thud.stop(now + 0.055);

      /* --- Plastic resonance: sine at 380 Hz, rings for 70ms --- */
      var ring = ctx.createOscillator();
      ring.type = 'sine';
      ring.frequency.setValueAtTime(380, now + 0.005);

      var ringGain = ctx.createGain();
      ringGain.gain.setValueAtTime(0, now);
      ringGain.gain.linearRampToValueAtTime(0.06, now + 0.008);
      ringGain.gain.exponentialRampToValueAtTime(0.001, now + 0.075);

      ring.connect(ringGain);
      ringGain.connect(ctx.destination);
      ring.start(now);
      ring.stop(now + 0.075);

      /* --- Very brief noise burst for the contact snap --- */
      var bufLen = Math.floor(ctx.sampleRate * 0.012);
      var noiseBuf = ctx.createBuffer(1, bufLen, ctx.sampleRate);
      var nd = noiseBuf.getChannelData(0);
      for (var i = 0; i < bufLen; i++) nd[i] = Math.random() * 2 - 1;

      var noiseSrc = ctx.createBufferSource();
      noiseSrc.buffer = noiseBuf;

      /* Low-pass at 800 Hz — muffled, not clicky */
      var lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 800;

      var noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.12, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.012);

      noiseSrc.connect(lp);
      lp.connect(noiseGain);
      noiseGain.connect(ctx.destination);
      noiseSrc.start(now);
      noiseSrc.stop(now + 0.012);

      setTimeout(function () { try { ctx.close(); } catch(e) {} }, 300);

    } catch (e) { /* silent fail */ }
  }

  /* ------------------------------------------------------------------ */
  /* PRINT SOUND — ~1.2s dot-matrix paper feed                           */
  /*                                                                      */
  /* Three layers:                                                        */
  /*  1. Stepper motor: low bandpass noise (280 Hz) modulated at 14 Hz   */
  /*     = the rhythmic stepping sound of paper advancing                 */
  /*  2. Paper friction: mid bandpass noise (1200 Hz) with slow wobble   */
  /*     = paper sliding against the platen roller                        */
  /*  3. Carriage thud: sine sweep at start = the print head homing      */
  /* ------------------------------------------------------------------ */

  function playPrintSound() {
    try {
      var AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      var ctx      = new AudioCtx();
      var now      = ctx.currentTime;
      var duration = 1.2;
      var sr       = ctx.sampleRate;
      var frames   = Math.floor(sr * duration);

      /* --- Layer 1: stepper motor --- */
      var motorBuf  = ctx.createBuffer(1, frames, sr);
      var motorData = motorBuf.getChannelData(0);
      for (var i = 0; i < frames; i++) motorData[i] = Math.random() * 2 - 1;

      var motorSrc = ctx.createBufferSource();
      motorSrc.buffer = motorBuf;

      var motorBp = ctx.createBiquadFilter();
      motorBp.type = 'bandpass';
      motorBp.frequency.value = 280;
      motorBp.Q.value = 3.5;

      var motorGain = ctx.createGain();
      motorGain.gain.setValueAtTime(0, now);
      motorGain.gain.linearRampToValueAtTime(0.45, now + 0.06);
      motorGain.gain.setValueAtTime(0.45, now + duration - 0.12);
      motorGain.gain.linearRampToValueAtTime(0, now + duration);

      /* LFO at 14 Hz = stepper pulses */
      var stepLfo = ctx.createOscillator();
      stepLfo.type = 'sawtooth';
      stepLfo.frequency.value = 14;
      var stepLfoGain = ctx.createGain();
      stepLfoGain.gain.value = 0.28;
      stepLfo.connect(stepLfoGain);
      stepLfoGain.connect(motorGain.gain);

      motorSrc.connect(motorBp);
      motorBp.connect(motorGain);
      motorGain.connect(ctx.destination);

      /* --- Layer 2: paper friction --- */
      var frBuf  = ctx.createBuffer(1, frames, sr);
      var frData = frBuf.getChannelData(0);
      for (var j = 0; j < frames; j++) frData[j] = Math.random() * 2 - 1;

      var frSrc = ctx.createBufferSource();
      frSrc.buffer = frBuf;

      var frBp = ctx.createBiquadFilter();
      frBp.type = 'bandpass';
      frBp.frequency.value = 1200;
      frBp.Q.value = 2;

      var frGain = ctx.createGain();
      frGain.gain.setValueAtTime(0, now);
      frGain.gain.linearRampToValueAtTime(0.10, now + 0.09);
      frGain.gain.setValueAtTime(0.10, now + duration - 0.18);
      frGain.gain.linearRampToValueAtTime(0, now + duration);

      /* Slow wobble at 2.5 Hz = paper feed irregularity */
      var wobble = ctx.createOscillator();
      wobble.type = 'sine';
      wobble.frequency.value = 2.5;
      var wobbleGain = ctx.createGain();
      wobbleGain.gain.value = 0.05;
      wobble.connect(wobbleGain);
      wobbleGain.connect(frGain.gain);

      frSrc.connect(frBp);
      frBp.connect(frGain);
      frGain.connect(ctx.destination);

      /* --- Layer 3: carriage thud at start --- */
      var thud = ctx.createOscillator();
      thud.type = 'sine';
      thud.frequency.setValueAtTime(110, now);
      thud.frequency.exponentialRampToValueAtTime(38, now + 0.09);
      var thudGain = ctx.createGain();
      thudGain.gain.setValueAtTime(0.55, now);
      thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
      thud.connect(thudGain);
      thudGain.connect(ctx.destination);
      thud.start(now);
      thud.stop(now + 0.09);

      /* Start everything */
      motorSrc.start(now); motorSrc.stop(now + duration);
      frSrc.start(now);    frSrc.stop(now + duration);
      stepLfo.start(now);  stepLfo.stop(now + duration);
      wobble.start(now);   wobble.stop(now + duration);

      setTimeout(function () { try { ctx.close(); } catch(e) {} },
        (duration + 0.3) * 1000);

    } catch (e) {
      var audio = document.getElementById('print-sound');
      if (audio) { audio.currentTime = 0; audio.play().catch(function(){}); }
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
