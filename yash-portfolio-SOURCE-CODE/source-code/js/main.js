/* ════════════════════════════════════════
   YASH SRIVASTAVA — PORTFOLIO JAVASCRIPT
   Author: Yash Srivastava
════════════════════════════════════════ */

/* ══════════════════════════════════
   1. CUSTOM CURSOR
══════════════════════════════════ */
var dot  = document.getElementById('cur-dot');
var ring = document.getElementById('cur-ring');
var mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', function(e) {
  mx = e.clientX;
  my = e.clientY;
});

(function cursorTick() {
  dot.style.left  = mx + 'px';
  dot.style.top   = my + 'px';
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(cursorTick);
})();


/* ══════════════════════════════════
   2. SPARK PARTICLES (intro effect)
══════════════════════════════════ */
function launchSparks() {
  var intro = document.getElementById('intro');
  var colors = ['#e50914', '#ff2233', '#cc0000', '#ff6644'];

  for (var i = 0; i < 40; i++) {
    var s   = document.createElement('div');
    s.className = 'spark';
    var sz  = 2 + Math.random() * 5;
    var col = colors[Math.floor(Math.random() * 4)];
    s.style.cssText =
      'left:'   + (20 + Math.random() * 60) + '%;' +
      'top:'    + (30 + Math.random() * 40) + '%;' +
      'width:'  + sz + 'px;' +
      'height:' + sz + 'px;' +
      'background:' + col + ';' +
      'box-shadow: 0 0 8px #e50914;' +
      'animation-duration:' + (0.6 + Math.random() * 1.1) + 's;' +
      'animation-delay:'    + (0.4 + Math.random() * 1.1) + 's;';
    intro.appendChild(s);
  }
}


/* ══════════════════════════════════
   3. SCROLL REVEAL ANIMATION
══════════════════════════════════ */
function initReveal() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(function(el) {
    observer.observe(el);
  });
}


/* ══════════════════════════════════
   4. PAGE NAVIGATION
   (Single page app without router)
══════════════════════════════════ */
function showPage(name) {
  var pages = ['home', 'projects', 'journey', 'contact'];
  pages.forEach(function(p) {
    var el = document.getElementById('page-' + p);
    if (el) el.style.display = (p === name) ? 'block' : 'none';
  });
  window.scrollTo(0, 0);
  setTimeout(initReveal, 100);
}


/* ══════════════════════════════════
   5. PROJECTS DATA
   ✏️  ADD YOUR PROJECTS HERE!
══════════════════════════════════ */
var myProjects = [
  // ── HOW TO ADD A PROJECT ──
  // Copy the block below, remove the // comment marks, and fill in your details:

  // {
  //   title: "My First Python Project",
  //   description: "A brief description of what this project does and what you learned.",
  //   tech: ["Python", "VS Code"],
  //   github: "https://github.com/yashshiv2006-web/project-name",
  //   live: ""   // Leave empty if no live demo
  // },

  // {
  //   title: "Portfolio Website",
  //   description: "My personal portfolio built with HTML, CSS and JavaScript.",
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/yashshiv2006-web/yash-portfolio",
  //   live: "https://yash12-portfolio.netlify.app"
  // },
];

function renderProjects() {
  var grid = document.getElementById('proj-grid');

  if (!myProjects.length) {
    grid.innerHTML =
      '<div class="no-proj">' +
      '&#9670; MISSIONS INCOMING &#9670;<br><br>' +
      'PROJECTS WILL BE DEPLOYED SOON' +
      '</div>';
    return;
  }

  grid.innerHTML = myProjects.map(function(p, i) {
    return (
      '<div class="pcard reveal">' +
        '<p class="p-num">PROJECT_' + String(i + 1).padStart(3, '0') + '</p>' +
        '<h3 class="p-title">' + p.title + '</h3>' +
        '<p class="p-desc">'  + p.description + '</p>' +
        '<div class="p-tags">' +
          p.tech.map(function(t) {
            return '<span class="p-tag">' + t + '</span>';
          }).join('') +
        '</div>' +
        '<div class="p-links">' +
          (p.github ? '<a href="' + p.github + '" target="_blank" rel="noopener">&#8599; GitHub</a>' : '') +
          (p.live   ? '<a href="' + p.live   + '" target="_blank" rel="noopener">&#8599; Live</a>'   : '') +
        '</div>' +
      '</div>'
    );
  }).join('');
}

renderProjects();


/* ══════════════════════════════════
   6. BACKGROUND MUSIC PLAYER
══════════════════════════════════ */
var bgAudio    = document.getElementById('bg-audio');
var musicOn    = true;
var fadeTimer  = null;

function fadeVolume(audio, from, to, duration) {
  clearInterval(fadeTimer);
  var steps    = 60;
  var stepTime = duration / steps;
  var stepSize = (to - from) / steps;
  var current  = from;
  audio.volume = Math.max(0, Math.min(1, from));

  fadeTimer = setInterval(function() {
    current += stepSize;
    if ((stepSize > 0 && current >= to) || (stepSize < 0 && current <= to)) {
      current = to;
      clearInterval(fadeTimer);
      if (to === 0) audio.pause();
    }
    audio.volume = Math.max(0, Math.min(1, current));
  }, stepTime);
}

function startBgMusic() {
  bgAudio.volume = 0;
  bgAudio.play()
    .then(function() {
      document.getElementById('music-btn').classList.add('show');
      fadeVolume(bgAudio, 0, 0.2, 3000); // Fade in to 20% over 3 seconds
    })
    .catch(function() {
      // Browser blocked autoplay — will try again on next user click
    });
}

function toggleMusic() {
  var btnEl   = document.getElementById('music-btn');
  var icoOn   = document.getElementById('ico-on');
  var icoOff  = document.getElementById('ico-off');

  if (musicOn) {
    fadeVolume(bgAudio, bgAudio.volume, 0, 800);
    icoOn.style.display  = 'none';
    icoOff.style.display = 'block';
    btnEl.style.color       = 'rgba(255,255,255,0.3)';
    btnEl.style.borderColor = 'rgba(255,255,255,0.15)';
    musicOn = false;
  } else {
    bgAudio.play().catch(function() {});
    fadeVolume(bgAudio, 0, 0.2, 800);
    icoOn.style.display  = 'block';
    icoOff.style.display = 'none';
    btnEl.style.color       = '#e50914';
    btnEl.style.borderColor = 'rgba(229,9,20,0.4)';
    musicOn = true;
  }
}


/* ══════════════════════════════════
   7. MAIN START FUNCTION
   Called when user clicks ENTER PORTFOLIO
══════════════════════════════════ */
function startExperience() {
  // 1. Hide the click screen
  document.getElementById('click-screen').classList.add('hide');

  // 2. Show the intro animation
  var intro = document.getElementById('intro');
  intro.classList.add('active');

  // 3. Launch spark particles
  launchSparks();

  // 4. Play intro sound (browser allows it because user just clicked)
  var introSound = document.getElementById('yeah-audio');
  introSound.volume = 1.0;
  introSound.currentTime = 0;
  introSound.play().catch(function(e) {
    console.log('Intro sound error:', e);
  });

  // 5. After 4 seconds: hide intro, show portfolio, start bg music
  setTimeout(function() {
    intro.style.display = 'none';
    var site = document.getElementById('site');
    site.classList.add('visible');

    // Show home page first
    showPage('home');

    // Start background music after slight delay
    setTimeout(startBgMusic, 600);
  }, 4000);
}
