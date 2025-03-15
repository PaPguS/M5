let menu = document.getElementById("menu");
let navigation = document.getElementById("navigation");

let Close = true;

menu.addEventListener("click", openMenu);

function openMenu() {
  if (close == true) {
    navigation.style.right = "-100%";
  } else {
    navigation.style.right = "0";
  }
  closeMenu = !closeMenu;
}
