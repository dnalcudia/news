navOpened = false;

function toggleNav() {
  if (!navOpened) {
    openNav();
  } else {
    closeNav();
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "220px";
  document.getElementById("main").style.marginLeft = "210px";
  document.getElementById("main").style.color = "white";
  document.getElementById("header__text").style.color = "black";
  document.getElementById("card").style.color = "black";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  navOpened = true;
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("main").style.color = "black";
  document.body.style.backgroundColor = "white";
  navOpened = false;
}
