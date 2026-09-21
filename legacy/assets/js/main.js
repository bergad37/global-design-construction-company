/* =============================================================
   Global Design Consultancy and Construction Company Ltd
   Interaction layer — vanilla JS, no dependencies.
   ============================================================= */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------------------------------------------------------
     1. Measure every self-drawing SVG stroke so the dash
        animation matches the true path length.
     --------------------------------------------------------- */
  function measureStrokes() {
    $$('.stroke, .pre__mark path, .pre__mark circle, .pre__mark rect').forEach(function (el) {
      var len = 600;
      try { len = Math.ceil(el.getTotalLength()); } catch (e) {}
      el.style.setProperty('--len', len);
    });
  }

  /* ---------------------------------------------------------
     2. Preloader — fake-but-eased progress, then hand off to
        the hero by putting .is-ready on <html>.
     --------------------------------------------------------- */
  function bootPreloader() {
    var pre = $('#preloader');
    var bar = $('.pre__bar i');
    var done = function () {
      if (!pre || pre.classList.contains('is-done')) return;
      pre.classList.add('is-done');
      document.documentElement.classList.add('is-ready');
      window.setTimeout(function () { if (pre.parentNode) pre.parentNode.removeChild(pre); }, 700);
    };

    if (!pre || reduced) { if (pre) pre.style.display = 'none'; document.documentElement.classList.add('is-ready'); return; }

    var pct = 0;
    var tick = window.setInterval(function () {
      pct += Math.random() * 16 + 6;
      if (pct >= 100) { pct = 100; window.clearInterval(tick); window.setTimeout(done, 380); }
      if (bar) bar.style.width = pct + '%';
    }, 130);

    // Never let a slow asset trap the visitor behind the loader.
    window.setTimeout(function () { window.clearInterval(tick); if (bar) bar.style.width = '100%'; done(); }, 3200);
  }

  /* ---------------------------------------------------------
     3. Custom cursor (pointer devices only)
     --------------------------------------------------------- */
  function initCursor() {
    if (reduced || !window.matchMedia('(hover:hover) and (min-width:901px)').matches) return;
    var dot = document.createElement('div');
    dot.className = 'cursor';
    document.body.appendChild(dot);

    var x = 0, y = 0, cx = 0, cy = 0;
    document.addEventListener('mousemove', function (e) {
      x = e.clientX; y = e.clientY; dot.classList.add('is-on');
    });
    (function loop() {
      cx += (x - cx) * 0.18; cy += (y - cy) * 0.18;
      dot.style.transform = 'translate(' + cx + 'px,' + cy + 'px)';
      window.requestAnimationFrame(loop);
    })();

    document.addEventListener('mouseover', function (e) {
      var t = e.target.closest('a,button,.proj,.svc,input,textarea,select');
      dot.classList.toggle('is-hover', !!t);
    });
    document.addEventListener('mouseleave', function () { dot.classList.remove('is-on'); });
  }

  /* ---------------------------------------------------------
     4. Navigation — sticky state, hide-on-scroll-down,
        mobile drawer, and scroll-spy on the section links.
     --------------------------------------------------------- */
  function initNav() {
    var nav = $('.nav');
    if (!nav) return;
    var burger = $('.nav__burger', nav);
    var drawer = $('.nav__drawer', nav);
    var last = 0;

    function onScroll() {
      var y = window.pageYOffset;
      nav.classList.toggle('is-stuck', y > 40);
      // Only auto-hide once well past the hero, and never while the drawer is open.
      if (!nav.classList.contains('is-open')) {
        nav.classList.toggle('is-hidden', y > 520 && y > last + 4);
      }
      last = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    function setOpen(open) {
      nav.classList.toggle('is-open', open);
      document.body.classList.toggle('is-locked', open);
      if (burger) burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (drawer) {
        $$('a', drawer).forEach(function (a, i) {
          a.style.transitionDelay = open ? (0.18 + i * 0.07) + 's' : '0s';
        });
      }
    }
    if (burger) burger.addEventListener('click', function () { setOpen(!nav.classList.contains('is-open')); });
    if (drawer) $$('a', drawer).forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });

    // scroll-spy
    var links = $$('.nav__link[href^="#"]');
    var targets = links.map(function (l) { return $(l.getAttribute('href')); }).filter(Boolean);
    if (!targets.length || !('IntersectionObserver' in window)) return;
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (l) {
          l.classList.toggle('is-active', l.getAttribute('href') === '#' + en.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    targets.forEach(function (t) { spy.observe(t); });
  }

  /* ---------------------------------------------------------
     5. Scroll reveals — one observer drives [data-reveal],
        mask wipes, process steps and the progress rail.
     --------------------------------------------------------- */
  function initReveals() {
    var items = $$('[data-reveal], .mask, .step');
    if (!('IntersectionObserver' in window)) { items.forEach(function (i) { i.classList.add('is-in'); }); return; }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-in');
        io.unobserve(en.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (i) { io.observe(i); });

    // Stagger children of any [data-stagger] container.
    $$('[data-stagger]').forEach(function (group) {
      var step = parseFloat(group.getAttribute('data-stagger')) || 0.1;
      $$('[data-reveal]', group).forEach(function (child, i) {
        child.style.setProperty('--d', (i * step) + 's');
      });
    });

    // Process rail fills when the steps come into view.
    var steps = $('.steps');
    var fill = $('.steps__fill');
    if (steps && fill) {
      var railIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          fill.style.width = '88%';
          railIO.disconnect();
        });
      }, { threshold: 0.35 });
      railIO.observe(steps);
    }
  }

  /* ---------------------------------------------------------
     6. Hero — tagline sequencer, verb rotator, pointer parallax
     --------------------------------------------------------- */
  function initHero() {
    // PLAN · DESIGN · BUILD · GROW lighting up in turn
    var chips = $$('.hero__tagline span');
    if (chips.length && !reduced) {
      var ci = 1;
      window.setInterval(function () {
        chips.forEach(function (c) { c.classList.remove('is-lit'); });
        chips[ci].classList.add('is-lit');
        ci = (ci + 1) % chips.length;
      }, 1400);
    }

    // Rotating verb in the headline
    var rot = $('.hero__rotator');
    if (rot) {
      var words = $$('b', rot);
      if (words.length) {
        words[0].classList.add('is-in');
        if (!reduced && words.length > 1) {
          var wi = 0;
          window.setInterval(function () {
            var cur = words[wi];
            wi = (wi + 1) % words.length;
            var next = words[wi];
            cur.classList.remove('is-in');
            cur.classList.add('is-out');
            next.classList.remove('is-out');
            // reflow so the entry transition replays from below
            void next.offsetWidth;
            next.classList.add('is-in');
          }, 2600);
        }
      }
    }

    // Subtle pointer parallax on the blueprint art
    var art = $('.hero__art');
    var hero = $('.hero');
    if (art && hero && !reduced && window.matchMedia('(hover:hover)').matches) {
      hero.addEventListener('mousemove', function (e) {
        var r = hero.getBoundingClientRect();
        var dx = (e.clientX - r.left) / r.width - 0.5;
        var dy = (e.clientY - r.top) / r.height - 0.5;
        art.style.transform = 'translate3d(' + (dx * -22) + 'px,' + (dy * -18) + 'px,0) rotateX(' + (dy * 4) + 'deg) rotateY(' + (dx * -4) + 'deg)';
        $$('.hero__badge').forEach(function (b, i) {
          var k = i === 0 ? 34 : -28;
          b.style.translate = (dx * k) + 'px ' + (dy * k) + 'px';
        });
      });
      hero.addEventListener('mouseleave', function () { art.style.transform = ''; });
    }
  }

  /* ---------------------------------------------------------
     7. Number counters
     --------------------------------------------------------- */
  function initCounters() {
    var nums = $$('[data-count]');
    if (!nums.length) return;

    function run(el) {
      var target = parseFloat(el.getAttribute('data-count'));
      var dur = 1500;
      if (reduced) { el.firstChild.nodeValue = String(target); return; }
      var t0 = null;
      (function frame(ts) {
        if (t0 === null) t0 = ts;
        var p = Math.min((ts - t0) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.firstChild.nodeValue = String(Math.round(target * eased));
        if (p < 1) window.requestAnimationFrame(frame);
      })(performance.now());
    }

    if (!('IntersectionObserver' in window)) { nums.forEach(run); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        run(en.target);
        io.unobserve(en.target);
      });
    }, { threshold: 0.6 });
    nums.forEach(function (n) { io.observe(n); });
  }

  /* ---------------------------------------------------------
     8. Project filtering
     --------------------------------------------------------- */
  function initFilters() {
    var btns = $$('.filter');
    var cards = $$('.proj');
    if (!btns.length) return;

    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.classList.remove('is-active'); b.setAttribute('aria-pressed', 'false'); });
        btn.classList.add('is-active');
        btn.setAttribute('aria-pressed', 'true');
        var want = btn.getAttribute('data-filter');

        cards.forEach(function (card) {
          var match = want === 'all' || card.getAttribute('data-cat') === want;
          card.classList.add('is-fading');
          window.setTimeout(function () {
            card.classList.toggle('is-hidden', !match);
            if (match) {
              // next frame, so display:'' lands before the opacity change
              window.requestAnimationFrame(function () { card.classList.remove('is-fading'); });
            }
          }, 220);
        });
      });
    });
  }

  /* ---------------------------------------------------------
     9. Testimonial slider
     --------------------------------------------------------- */
  function initQuotes() {
    var quotes = $$('.quote');
    var dots = $$('.quotes__nav button');
    if (quotes.length < 2) return;
    var idx = 0, timer = null;

    function show(i) {
      idx = (i + quotes.length) % quotes.length;
      quotes.forEach(function (q, n) { q.classList.toggle('is-active', n === idx); });
      dots.forEach(function (d, n) {
        d.classList.toggle('is-active', n === idx);
        d.setAttribute('aria-selected', n === idx ? 'true' : 'false');
      });
    }
    function play() { if (reduced) return; stop(); timer = window.setInterval(function () { show(idx + 1); }, 6500); }
    function stop() { if (timer) window.clearInterval(timer); }

    dots.forEach(function (d, n) { d.addEventListener('click', function () { show(n); play(); }); });
    var wrap = $('.quotes');
    if (wrap) {
      wrap.addEventListener('mouseenter', stop);
      wrap.addEventListener('mouseleave', play);
    }
    show(0); play();
  }

  /* ---------------------------------------------------------
     10. Contact form — client-side validation only.
         There is no backend yet; see README for wiring it up.
     --------------------------------------------------------- */
  function initForm() {
    var form = $('#contactForm');
    if (!form) return;
    var ok = $('.form__ok', form);

    function fail(field, msg) {
      var wrap = field.closest('.field');
      wrap.classList.add('has-error');
      var slot = $('.err', wrap);
      if (slot) slot.textContent = msg;
      return false;
    }
    function clear(field) {
      var wrap = field.closest('.field');
      wrap.classList.remove('has-error');
      var slot = $('.err', wrap);
      if (slot) slot.textContent = '';
    }

    function check(field) {
      var v = field.value.trim();
      if (field.hasAttribute('required') && !v) return fail(field, 'This field is required.');
      if (field.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return fail(field, 'Enter a valid email address.');
      if (field.name === 'message' && v && v.length < 12) return fail(field, 'Please add a little more detail.');
      clear(field);
      return true;
    }

    $$('input,textarea,select', form).forEach(function (f) {
      f.addEventListener('blur', function () { check(f); });
      f.addEventListener('input', function () { if (f.closest('.field').classList.contains('has-error')) check(f); });
      if (f.tagName === 'SELECT') {
        f.addEventListener('change', function () { f.classList.toggle('has-value', !!f.value); });
      }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fields = $$('input,textarea,select', form);
      var valid = fields.map(check).every(Boolean);
      if (!valid) {
        var first = $('.field.has-error input,.field.has-error textarea,.field.has-error select', form);
        if (first) first.focus();
        return;
      }
      if (ok) {
        ok.classList.add('is-on');
        ok.textContent = 'Thank you — your enquiry has been captured. Connect a form endpoint to start receiving it by email.';
      }
      form.reset();
      $$('select', form).forEach(function (s) { s.classList.remove('has-value'); });
    });
  }

  /* ---------------------------------------------------------
     11. Back to top
     --------------------------------------------------------- */
  function initToTop() {
    var btn = $('.totop');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      btn.classList.toggle('is-on', window.pageYOffset > 700);
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
    });
  }

  /* ---------------------------------------------------------
     12. Year stamp
     --------------------------------------------------------- */
  function initYear() {
    var y = $('#year');
    if (y) y.textContent = new Date().getFullYear();
  }

  /* --------------------------------------------------------- */
  function boot() {
    measureStrokes();
    bootPreloader();
    initCursor();
    initNav();
    initReveals();
    initHero();
    initCounters();
    initFilters();
    initQuotes();
    initForm();
    initToTop();
    initYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
