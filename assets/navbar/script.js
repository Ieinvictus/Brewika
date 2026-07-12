/*==================================
BREWIKA PREMIUM NAVIGATION
==================================*/

const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");
const navLinks = document.querySelectorAll(".mobile-nav a");

/*=========================
OPEN
=========================*/

menuBtn.addEventListener("click", () => {

    menuOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

});

/*=========================
CLOSE
=========================*/

closeMenu.addEventListener("click", closePanel);

function closePanel(){

    menuOverlay.classList.remove("active");

    document.body.style.overflow = "";

}

/*=========================
CLICK MENU
=========================*/

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.forEach(item=>item.classList.remove("active"));

        link.classList.add("active");

        closePanel();

    });

});

/*=========================
ESC KEY
=========================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closePanel();

    }

});

/*=========================
CLICK OUTSIDE
=========================*/

menuOverlay.addEventListener("click",(e)=>{

    if(e.target===menuOverlay){

        closePanel();

    }

});

/*=========================
HAMBURGER ANIMATION
=========================*/

menuBtn.addEventListener("click",()=>{

    menuBtn.classList.toggle("open");

});

closeMenu.addEventListener("click",()=>{

    menuBtn.classList.remove("open");

});
