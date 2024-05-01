function openMenu() {
  var menu = document.getElementById("myMenu");
  menu.style.display = "block";
  menu.style.animation = "fadeIn 0.5s ease forwards";
}

function closeMenu() {
  var menu = document.getElementById("myMenu");
  menu.style.animation = "fadeOut 0.5s ease forwards";
  setTimeout(function () {
    menu.style.display = "none";
  }, 500);
}

function openSubMenu(submenuId) {
  var submenus = document.getElementsByClassName("submenu");
  for (var i = 0; i < submenus.length; i++) {
    submenus[i].style.display = "none";
  }
  document.getElementById(submenuId).style.display = "block";
}

function closeSubMenu(submenuId) {
  document.getElementById(submenuId).style.display = "none";
}