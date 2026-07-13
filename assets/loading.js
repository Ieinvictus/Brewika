/*=========================
BREWIKA
SCRIPT.JS
=========================*/

const loader = document.getElementById("loader");
const typing = document.getElementById("typing");

const text = "BREWIKA";

let index = 0;

/*=========================
Typing Effect
=========================*/

function typeBrand(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeBrand,170);

    }

}

window.addEventListener("load",()=>{

    typeBrand();

    setTimeout(()=>{

        loader.style.opacity="0";
        loader.style.visibility="hidden";

        document.body.style.overflow="auto";

    },4000);

});


/*=========================
Smooth Button Effect
=========================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-6px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});


/*=========================
Social Hover
=========================*/

document.querySelectorAll(".social a").forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.transform="translateY(-8px) rotate(8deg)";

});

icon.addEventListener("mouseleave",()=>{

icon.style.transform="translateY(0) rotate(0deg)";

});

});


/*=========================
Title Animation
=========================*/

typing.animate(

[
{
transform:"translateY(-80px)",
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


/*=========================
Mouse Glow
=========================*/

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


/*=========================
Launch Console
=========================*/

console.log("WELCOME TO BREWIKA");
console.log("Made For Moments.");
