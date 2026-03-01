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
  /* KEY CLICK SOUND                                                      */
  /*                                                                      */
  /* Mechanical tape/radio button feel:                                   */
  /*  - A deep low-frequency "thunk" (the mechanism body)                 */
  /*  - A mid-frequency "clack" transient (the contact snap)             */
  /*  - A short spring resonance that rings and decays                   */
  /* No high-frequency mouse-click noise.                                */
  /* ------------------------------------------------------------------ */

  function playKeyClick() {
    try {
      var AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      var ctx = new AudioCtx();
      var now = ctx.currentTime;

      /* Layer 1: Low thunk — the body of the mechanism hitting home */
      var thunkOsc = ctx.createOscillator();
      thunkOsc.type = 'sine';
      thunkOsc.frequency.setValueAtTime(180, now);
      thunkOsc.frequency.exponentialRampToValueAtTime(60, now + 0.06);

      var thunkGain = ctx.createGain();
      thunkGain.gain.setValueAtTime(0.55, now);
      thunkGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      thunkOsc.connect(thunkGain);
      thunkGain.connect(ctx.destination);
      thunkOsc.start(now);
      thunkOsc.stop(now + 0.07);

      /* Layer 2: Mid clack — the contact snap */
      var clackOsc = ctx.createOscillator();
      clackOsc.type = 'square';
      clackOsc.frequency.setValueAtTime(900, now);
      clackOsc.frequency.exponentialRampToValueAtTime(300, now + 0.03);

      var clackGain = ctx.createGain();
      clackGain.gain.setValueAtTime(0.18, now);
      clackGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      /* Low-pass to soften the square wave — less clicky, more thuddy */
      var lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 1200;
      lp.Q.value = 0.7;

      clackOsc.connect(lp);
      lp.connect(clackGain);
      clackGain.connect(ctx.destination);
      clackOsc.start(now);
      clackOsc.stop(now + 0.03);

      /* Layer 3: Spring resonance — rings at ~500 Hz, decays over 80ms */
      var springOsc = ctx.createOscillator();
      springOsc.type = 'sine';
      springOsc.frequency.setValueAtTime(520, now + 0.01);
      springOsc.frequency.exponentialRampToValueAtTime(480, now + 0.09);

      var springGain = ctx.createGain();
      springGain.gain.setValueAtTime(0, now);
      springGain.gain.linearRampToValueAtTime(0.08, now + 0.012);
      springGain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      springOsc.connect(springGain);
      springGain.connect(ctx.destination);
      springOsc.start(now);
      springOsc.stop(now + 0.09);

      setTimeout(function () { try { ctx.close(); } catch(e) {} }, 300);

    } catch (e) { /* silent fail */ }
  }

  /* ------------------------------------------------------------------ */
  /* PRINT SOUND                                                          */
  /*                                                                      */
  /* Simulates a dot-matrix printer feeding paper:                        */
  /*  - Stepper motor: rhythmic low-frequency pulses (~12 Hz)            */
  /*  - Paper friction: mid-frequency noise, amplitude-modulated         */
  /*  - Carriage return thud at start                                    */
  /* ------------------------------------------------------------------ */

  function playPrintSound() {
    try {
      var AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;

      var ctx      = new AudioCtx();
      var now      = ctx.currentTime;
      var duration = 1.2;
      var sr       = ctx.sampleRate;

      /* --- Stepper motor: rhythmic pulses at ~12 Hz --- */
      /* We simulate this with a sawtooth LFO modulating a noise source */
      var motorBuf = ctx.createBuffer(1, Math.floor(sr * duration), sr);
      var motorData = motorBuf.getChannelData(0);
      for (var i = 0; i < motorData.length; i++) {
        motorData[i] = Math.random() * 2 - 1;
      }

      var motorSrc = ctx.createBufferSource();
      motorSrc.buffer = motorBuf;

      /* Bandpass centred at 280 Hz — the low motor rumble */
      var motorBp = ctx.createBiquadFilter();
      motorBp.type = 'bandpass';
      motorBp.frequency.value = 280;
      motorBp.Q.value = 3;

      var motorGain = ctx.createGain();
      motorGain.gain.setValueAtTime(0, now);
      motorGain.gain.linearRampToValueAtTime(0.4, now + 0.05);
      motorGain.gain.setValueAtTime(0.4, now + duration - 0.15);
      motorGain.gain.linearRampToValueAtTime(0, now + duration);

      /* LFO at 12 Hz = stepper steps */
      var stepLfo = ctx.createOscillator();
      stepLfo.type = 'sawtooth';
      stepLfo.frequency.value = 12;
      var stepLfoGain = ctx.createGain();
      stepLfoGain.gain.value = 0.25;
      stepLfo.connect(stepLfoGain);
      stepLfoGain.connect(motorGain.gain);

      motorSrc.connect(motorBp);
      motorBp.connect(motorGain);
      motorGain.connect(ctx.destination);

      /* --- Paper friction: higher-frequency noise, slower modulation --- */
      var frictionBuf = ctx.createBuffer(1, Math.floor(sr * duration), sr);
      var frictionData = frictionBuf.getChannelData(0);
      for (var j = 0; j < frictionData.length; j++) {
        frictionData[j] = Math.random() * 2 - 1;
      }

      var frictionSrc = ctx.createBufferSource();
      frictionSrc.buffer = frictionBuf;

      /* Bandpass at 1400 Hz — paper-on-roller friction */
      var frictionBp = ctx.createBiquadFilter();
      frictionBp.type = 'bandpass';
      frictionBp.frequency.value = 1400;
      frictionBp.Q.value = 2;

      var frictionGain = ctx.createGain();
      frictionGain.gain.setValueAtTime(0, now);
      frictionGain.gain.linearRampToValueAtTime(0.12, now + 0.08);
      frictionGain.gain.setValueAtTime(0.12, now + duration - 0.2);
      frictionGain.gain.linearRampToValueAtTime(0, now + duration);

      /* Slow wobble at 3 Hz = paper feed irregularity */
      var wobbleLfo = ctx.createOscillator();
      wobbleLfo.type = 'sine';
      wobbleLfo.frequency.value = 3;
      var wobbleLfoGain = ctx.createGain();
      wobbleLfoGain.gain.value = 0.06;
      wobbleLfo.connect(wobbleLfoGain);
      wobbleLfoGain.connect(frictionGain.gain);

      frictionSrc.connect(frictionBp);
      frictionBp.connect(frictionGain);
      frictionGain.connect(ctx.destination);

      /* --- Carriage return thud at the very start --- */
      var thudOsc = ctx.createOscillator();
      thudOsc.type = 'sine';
      thudOsc.frequency.setValueAtTime(120, now);
      thudOsc.frequency.exponentialRampToValueAtTime(40, now + 0.08);
      var thudGain = ctx.createGain();
      thudGain.gain.setValueAtTime(0.5, now);
      thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      thudOsc.connect(thudGain);
      thudGain.connect(ctx.destination);
      thudOsc.start(now);
      thudOsc.stop(now + 0.08);

      /* Start everything */
      motorSrc.start(now);
      motorSrc.stop(now + duration);
      frictionSrc.start(now);
      frictionSrc.stop(now + duration);
      stepLfo.start(now);
      stepLfo.stop(now + duration);
      wobbleLfo.start(now);
      wobbleLfo.stop(now + duration);

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
