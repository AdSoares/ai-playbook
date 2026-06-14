/* teach-me capsule — shared client logic. Vanilla JS, no dependencies.
 * Handles: light/dark theme toggle, progress tracking (LocalStorage), quizzes, and flashcards.
 * Note: under file://, some browsers scope LocalStorage per file; progress/theme then persist per page.
 */
(function () {
  "use strict";

  // --- Theme (light/dark) ---------------------------------------------------
  var THEME_KEY = "teachme:theme";
  function readTheme() {
    try {
      var saved = localStorage.getItem(THEME_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch (e) {}
    var prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
    return prefersLight ? "light" : "dark";
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }
  // Apply as early as possible to avoid a flash.
  applyTheme(readTheme());

  document.addEventListener("DOMContentLoaded", function () {
    // Inject the toggle button into the top bar (so templates don't each need it).
    var bar = document.querySelector("header.topbar");
    if (bar && !bar.querySelector(".theme-toggle")) {
      var btn = document.createElement("button");
      btn.className = "theme-toggle";
      btn.type = "button";
      var sync = function () {
        var dark = document.documentElement.getAttribute("data-theme") !== "light";
        btn.textContent = dark ? "☀️ Light" : "🌙 Dark";
        btn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
      };
      btn.addEventListener("click", function () {
        var next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
        applyTheme(next);
        try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
        sync();
      });
      sync();
      bar.appendChild(btn);
    }

    var capsule = document.body.getAttribute("data-capsule");
    var s = store(capsule);

    // --- Mark-complete button (non-index pages) ---
    var markBtn = document.querySelector("[data-complete]");
    if (markBtn) {
      var file = markBtn.getAttribute("data-complete");
      var syncMark = function () {
        var done = !!s.data.completed[file];
        markBtn.textContent = done ? "✓ Completed" : "Mark this section complete";
        markBtn.classList.toggle("primary", !done);
      };
      markBtn.addEventListener("click", function () {
        s.data.completed[file] = !s.data.completed[file];
        s.save(); syncMark();
      });
      syncMark();
    }

    // --- Progress (index page): items carry data-file; bar reflects completion ---
    var items = Array.prototype.slice.call(document.querySelectorAll("[data-file]"));
    if (items.length) {
      var done = 0;
      items.forEach(function (li) {
        var f = li.getAttribute("data-file");
        var ok = !!s.data.completed[f];
        if (ok) done++;
        var mark = li.querySelector(".check");
        if (mark) mark.textContent = ok ? "✓" : "○";
      });
      var pct = Math.round((done / items.length) * 100);
      var barFill = document.querySelector(".progress > span");
      if (barFill) barFill.style.width = pct + "%";
      var label = document.querySelector("[data-progress-label]");
      if (label) label.textContent = done + " / " + items.length + " (" + pct + "%)";
    }

    // --- Quizzes: .opt elements with data-correct="true" ---
    document.querySelectorAll(".quiz .q").forEach(function (q) {
      q.querySelectorAll(".opt").forEach(function (opt) {
        opt.addEventListener("click", function () {
          var correct = opt.getAttribute("data-correct") === "true";
          opt.classList.add(correct ? "correct" : "wrong");
          if (!correct) {
            var right = q.querySelector('.opt[data-correct="true"]');
            if (right) right.classList.add("correct");
          }
        });
      });
    });

    // --- Flashcards: click to flip ---
    document.querySelectorAll(".flashcard").forEach(function (card) {
      card.addEventListener("click", function () { card.classList.toggle("flipped"); });
    });
  });

  function store(capsule) {
    var key = "teachme:" + (capsule || "default");
    var data = { completed: {} };
    try { data = JSON.parse(localStorage.getItem(key)) || data; } catch (e) {}
    return {
      data: data,
      save: function () { try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) {} },
    };
  }
})();
