document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const button = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");

  if (!header || !button || !navigation) return;

  header.classList.add("site-header--menu-ready");

  const closeMenu = () => {
    header.classList.remove("site-header--menu-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Abrir menú de navegación");
  };

  button.addEventListener("click", () => {
    const isOpen = header.classList.toggle("site-header--menu-open");
    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute("aria-label", isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación");
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
});
