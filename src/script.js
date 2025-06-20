let menu = document.querySelector("#menu");
let menuLayer = document.querySelector("#menu-layer");
let header = document.querySelector("#header");
let body = document.querySelector("#body");
let grim = document.querySelector("#grim");
menu.addEventListener("touchstart", () => {
  menu.classList.add("bg-site-800");
});

menu.addEventListener("touchend", () => {
  menu.classList.remove("bg-site-800");
  menu.classList.add("hidden");
  grim.classList.add("bg-site-800");
  header.classList.add("backdrop-brightness-70");
  body.classList.add("");
});
