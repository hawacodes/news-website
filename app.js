let toggleNavStatus = false;

function myFunction(x) {
  x.classList.toggle("change");
  let getSidebar = document.querySelector(".nav-side-bar");
  let getSidebarUl = document.querySelector(".nav-side-bar ul");
  let getSidebarLinks = document.querySelectorAll(".nav-side-bar a");

  let getBar1 = document.querySelector(".bar1");
  let getBar3 = document.querySelector(".bar3");

  if (toggleNavStatus === false) {
    getSidebarUl.style.visibility = "visible";
    getSidebar.style.width = "643px";
    getSidebar.style.backgroundColor = "#cf161c";
    getBar3.style.backgroundColor = "#FFFFFF";
    getBar1.style.backgroundColor = "#FFFFFF";

    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "1";
    }
    toggleNavStatus = true;
  } else {
    getSidebar.style.width = "54px";
    let arrayLength = getSidebarLinks.length;
    for (let i = 0; i < arrayLength; i++) {
      getSidebarLinks[i].style.opacity = "0";
    }
    getBar3.style.backgroundColor = "#000000";
    getBar1.style.backgroundColor = "#000000";
    getSidebarUl.style.visibility = "hidden";
    getSidebar.style.backgroundColor = "#FFFFFF";

    toggleNavStatus = false;
  }
}
