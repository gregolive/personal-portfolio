function openMenu() {
  let links = document.querySelector(".navbar-menu");
  if (links.style.display === "grid") {
    links.style.display = "none";
  } else {
    links.style.display = "grid";
  }
}