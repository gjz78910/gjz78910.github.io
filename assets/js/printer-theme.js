// Printer Theme JavaScript

(function() {
  'use strict';

  // Initialize printer theme
  function initPrinterTheme() {
    const currentPath = window.location.pathname;
    const isAboutPage = currentPath === '/printer/' || currentPath === '/printer' || currentPath.endsWith('/printer/');
    const isEventsPage = currentPath.includes('/printer/events') || currentPath.includes('/events/');

    // Set active button
    if (isAboutPage) {
      document.getElementById('btn-about')?.classList.add('active');
      document.getElementById('btn-events')?.classList.remove('active');
    } else if (isEventsPage) {
      document.getElementById('btn-events')?.classList.add('active');
      document.getElementById('btn-about')?.classList.remove('active');
    }

    // Setup navigation buttons
    setupNavigation();
  }

  // Setup navigation buttons
  function setupNavigation() {
    const aboutBtn = document.getElementById('btn-about');
    const eventsBtn = document.getElementById('btn-events');

    if (aboutBtn) {
      aboutBtn.addEventListener('click', function() {
        navigateToPage('about');
      });
    }

    if (eventsBtn) {
      eventsBtn.addEventListener('click', function() {
        navigateToPage('events');
      });
    }
  }

  // Navigate to a page with printing animation
  function navigateToPage(page) {
    const currentPath = window.location.pathname;
    const isAboutPage = currentPath === '/printer/' || currentPath === '/printer' || currentPath.endsWith('/printer/');
    const isEventsPage = currentPath.includes('/printer/events') || currentPath.includes('/events/');

    // Don't navigate if already on the target page
    if ((page === 'about' && isAboutPage) || (page === 'events' && isEventsPage)) {
      return;
    }

    // Play print sound
    playPrintSound();

    // Update status
    const statusEl = document.getElementById('printer-status');
    if (statusEl) {
      statusEl.textContent = 'Printing...';
      statusEl.classList.add('printing');
    }

    // Animate paper out
    const paperContainer = document.getElementById('paper-container');
    const currentPaper = document.getElementById('current-paper');
    
    if (currentPaper) {
      currentPaper.classList.remove('active');
      currentPaper.classList.add('printing-out');

      // After animation, navigate
      setTimeout(function() {
        // Determine target URL
        let targetUrl;
        if (page === 'about') {
          targetUrl = '/printer/';
        } else if (page === 'events') {
          targetUrl = '/printer/events/';
        }

        // Navigate to new page
        if (targetUrl) {
          window.location.href = targetUrl;
        }
      }, 800); // Match animation duration
    }
  }

  // Play print sound effect
  function playPrintSound() {
    try {
      // Create audio context for generating print sound
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // Generate a simple print-like sound
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      // Configure sound
      oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.15);

      // Add a second tone for more realistic print sound
      setTimeout(function() {
        const oscillator2 = audioContext.createOscillator();
        const gainNode2 = audioContext.createGain();
        
        oscillator2.connect(gainNode2);
        gainNode2.connect(audioContext.destination);
        
        oscillator2.frequency.setValueAtTime(150, audioContext.currentTime);
        oscillator2.frequency.exponentialRampToValueAtTime(80, audioContext.currentTime + 0.1);
        
        gainNode2.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.12);
        
        oscillator2.start(audioContext.currentTime);
        oscillator2.stop(audioContext.currentTime + 0.12);
      }, 50);
    } catch (error) {
      // Fallback: Try using HTML5 audio if available
      const audio = document.getElementById('print-sound');
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch(function(err) {
          console.log('Could not play sound:', err);
        });
      }
    }
  }

  // Animate paper in when page loads
  function animatePaperIn() {
    const currentPaper = document.getElementById('current-paper');
    if (currentPaper) {
      // Small delay to ensure DOM is ready
      setTimeout(function() {
        currentPaper.classList.add('active');
      }, 100);
    }

    // Update status after animation
    setTimeout(function() {
      const statusEl = document.getElementById('printer-status');
      if (statusEl) {
        statusEl.textContent = 'Ready';
        statusEl.classList.remove('printing');
      }
    }, 1200);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initPrinterTheme();
      animatePaperIn();
    });
  } else {
    initPrinterTheme();
    animatePaperIn();
  }

  // Handle browser back/forward buttons
  window.addEventListener('popstate', function() {
    initPrinterTheme();
    animatePaperIn();
  });

})();
