/*==================================
BREWIKA LOADER
script.js
==================================*/

"use strict";

/*==============================
ELEMENTS
==============================*/

const loader = document.getElementById("loader");
const typing = document.getElementById("typing");

const brandText = "BREWIKA";

let index = 0;

/*==============================
LOCK SCROLL
==============================*/

document.body.style.overflow = "hidden";

/*==============================
TYPING EFFECT
==============================*/

function typeBrand(){

    if(!typing) return;

    typing.textContent = "";

    index = 0;

    function type(){

        if(index < brandText.length){

            typing.textContent += brandText.charAt(index);

            index++;

            setTimeout(type,170);

        }

    }

    type();

}

/*==============================
SHOW WEBSITE
==============================*/

function hideLoader(){

    if(!loader) return;

    loader.classList.add("hide-loader");

    document.body.style.overflow = "auto";

    setTimeout(()=>{

        loader.remove();

    },900);

}

/*==============================
WINDOW LOAD
==============================*/

window.addEventListener("load",()=>{

    typeBrand();

    setTimeout(hideLoader,2500);

});

/*==============================
BUTTON HOVER
==============================*/

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-6px) scale(1.03)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});

/*==============================
SOCIAL ICON
==============================*/

document.querySelectorAll(".social a").forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.transform="translateY(-8px) rotate(8deg)";

    });

    icon.addEventListener("mouseleave",()=>{

        icon.style.transform="translateY(0) rotate(0deg)";

    });

});

/*==============================
TITLE ANIMATION
==============================*/

if(typing){

    typing.animate(

    [

    {

    transform:"translateY(-60px)",

    opacity:0

    },

    {

    transform:"translateY(0)",

    opacity:1

    }

    ],

    {

    duration:1200,

    fill:"forwards",

    easing:"ease-out"

    }

    );

}

/*==============================
MOUSE GLOW
==============================*/

document.addEventListener("mousemove",(e)=>{

    document.documentElement.style.setProperty(

        "--mouseX",

        e.clientX+"px"

    );

    document.documentElement.style.setProperty(

        "--mouseY",

        e.clientY+"px"

    );

});

/*==============================
CONSOLE
==============================*/

console.log("WELCOME TO BREWIKA");
console.log("Made For Moments.");
