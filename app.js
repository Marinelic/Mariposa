
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");
  const iconOpen = document.getElementById("iconOpen");
  const iconClose = document.getElementById("iconClose");
  const brand = document.getElementById("brand")

  function closeMenu() {
    menu.classList.add("hidden");
    iconOpen.classList.remove("hidden");
    iconClose.classList.add("hidden");
    btn.setAttribute("aria-expanded", "false");
    brand.classList.remove("hidden");
  }

  btn.addEventListener("click", () => {
    const isHidden = menu.classList.contains("hidden");
    if (isHidden) {
      menu.classList.remove("hidden");
      iconOpen.classList.add("hidden");
      iconClose.classList.remove("hidden");
      btn.setAttribute("aria-expanded", "true");
      brand.classList.add("hidden");
    } else {
      closeMenu();
    }
  });

  // Close menu when clicking a link
  menu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", closeMenu);
  });

  // Optional: close menu on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

