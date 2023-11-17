const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close");
const mobileNav = document.getElementById("nav-list");
const nav__links = document.getElementById("nav-list");

menu.addEventListener("click", () => {
  mobileNav.classList.remove("translate-x-[500px]");
  mobileNav.classList.remove("hidden");
  menu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
  mobileNav.classList.add("nav-list");
});

closeMenu.addEventListener("click", () => {
  mobileNav.classList.remove("nav-list");
  mobileNav.classList.add("translate-x-[500px]");
  menu.classList.remove("hidden");
  closeMenu.classList.add("hidden");
  mobileNav.classList.add("close-menu");
  setTimeout(() => {
    mobileNav.classList.add("hidden");
  }, 400);
});
function scrollIntoView(parent, target) {
  document.getElementById(parent).addEventListener("click", function (e) {
    console.log(e.target.classList.contains(target));
    if (!e.target.classList.contains(target)) return;
    e.preventDefault();
    // MATCHING STRATEGY

    if (e.target.classList.contains(target)) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });
}
scrollIntoView("nav-list", "nav-link");
