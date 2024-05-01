function openMenu() {
  const menu = document.querySelector("#myMenu");
  menu.style.display = "block";
  menu.style.animation = "fadeIn 0.5s ease forwards";
}

function closeMenu() {
  const menu = document.querySelector("#myMenu");
  menu.style.animation = "fadeOut 0.5s ease forwards";
  setTimeout(() => {
    menu.style.display = "none";
  }, 500);
}

function openSubMenu(submenuId) {
  const submenus = document.querySelectorAll(".submenu");
  submenus.forEach(submenu => submenu.style.display = "none");
  document.getElementById(submenuId).style.display = "block";
}

function closeSubMenu(submenuId) {
  document.getElementById(submenuId).style.display = "none";
}
