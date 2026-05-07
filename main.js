// ─── Page (SPA) switching ──────────────────────────────────
function go(p) {
  document
    .querySelectorAll(".page")
    .forEach((x) => x.classList.remove("on"));
  const el = document.getElementById("pg-" + p);
  if (el) el.classList.add("on");
  window.scrollTo(0, 0);
  closeMobileNav();
}

// ─── In-page nav: scroll to anchor on home ────────────────
// Used by the top-nav About / Signal / Tag links.
// If the user is on a deep page, return to home first, then scroll.
function navTo(anchor) {
  const home = document.getElementById("pg-home");
  const onHome = home && home.classList.contains("on");
  if (!onHome) {
    document
      .querySelectorAll(".page")
      .forEach((x) => x.classList.remove("on"));
    home.classList.add("on");
  }
  // Wait a tick so layout is in place before scrolling.
  requestAnimationFrame(() => {
    const target = document.getElementById(anchor);
    if (!target) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const navH = document.querySelector("nav")?.offsetHeight || 60;
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - navH - 12;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setActiveNav(anchor);
  });
  closeMobileNav();
}

function setActiveNav(anchor) {
  document
    .querySelectorAll(".nv-links button[data-nav]")
    .forEach((b) => b.classList.toggle("active", b.dataset.nav === anchor));
}

// ─── Mobile hamburger ─────────────────────────────────────
function toggleMobileNav() {
  const links = document.querySelector(".nv-links");
  const tog = document.querySelector(".nv-toggle");
  if (!links || !tog) return;
  const open = links.classList.toggle("open");
  tog.classList.toggle("open", open);
  tog.setAttribute("aria-expanded", String(open));
}
function closeMobileNav() {
  document.querySelector(".nv-links")?.classList.remove("open");
  const tog = document.querySelector(".nv-toggle");
  if (tog) {
    tog.classList.remove("open");
    tog.setAttribute("aria-expanded", "false");
  }
}

// ─── Pilot modal ──────────────────────────────────────────
function openM() {
  document.getElementById("modal").classList.add("open");
}
function closeM() {
  document.getElementById("modal").classList.remove("open");
}

// ─── Network modal ────────────────────────────────────────
function openNetwork() {
  document.getElementById("networkModal").classList.add("open");
}
function closeNetwork() {
  document.getElementById("networkModal").classList.remove("open");
}

// ─── Wire up listeners on load ────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
  const m = document.getElementById("modal");
  if (m) {
    m.addEventListener("click", function (e) {
      if (e.target === this) closeM();
    });
  }
  const nm = document.getElementById("networkModal");
  if (nm) {
    nm.addEventListener("click", function (e) {
      if (e.target === this) closeNetwork();
    });
  }
  // Close mobile nav when clicking a nav link
  document.querySelectorAll(".nv-links button").forEach((btn) => {
    btn.addEventListener("click", () => {
      // Defer: let the click's handler run first, then close.
      setTimeout(closeMobileNav, 0);
    });
  });
  // Close mobile nav on outside click
  document.addEventListener("click", (e) => {
    const links = document.querySelector(".nv-links");
    const tog = document.querySelector(".nv-toggle");
    if (!links || !tog) return;
    if (
      links.classList.contains("open") &&
      !links.contains(e.target) &&
      !tog.contains(e.target)
    ) {
      closeMobileNav();
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeM();
    closeNetwork();
    closeMobileNav();
  }
});
