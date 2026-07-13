// =============================
// BREWIKA PREMIUM HERO SLIDER
// =============================

const slides = document.querySelectorAll(".brew-slide");
const dots = document.querySelectorAll(".dot");
const progress = document.querySelector(".progress-bar span");

let current = 0;
let timer;
const slideDelay = 5000;

// -----------------------------
// SHOW SLIDE
// -----------------------------

function showSlide(index){

    slides.forEach((slide,i)=>{

        slide.classList.remove("active");

        const video = slide.querySelector("video");

        if(video){

            video.pause();
            video.currentTime = 0;

        }

        dots[i].classList.remove("active");

    });

    slides[index].classList.add("active");

    dots[index].classList.add("active");

    const activeVideo = slides[index].querySelector("video");

    if(activeVideo){

        activeVideo.play().catch(()=>{});

    }

    progress.style.animation="none";

    progress.offsetHeight;

    progress.style.animation="progress 6s linear infinite";

    current=index;

}

// -----------------------------
// NEXT
// -----------------------------

function nextSlide(){

    current++;

    if(current>=slides.length){

        current=0;

    }

    showSlide(current);

}

// -----------------------------
// AUTO
// -----------------------------

function autoSlider(){

    timer=setInterval(nextSlide,slideDelay);

}

function restart(){

    clearInterval(timer);

    autoSlider();

}

showSlide(0);

autoSlider();

// -----------------------------
// DOT CLICK
// -----------------------------

dots.forEach((dot,index)=>{

    dot.addEventListener("click",()=>{

        showSlide(index);

        restart();

    });

});

// -----------------------------
// TOUCH SUPPORT
// -----------------------------

let startX=0;

const hero=document.querySelector(".brewika-hero");

hero.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

hero.addEventListener("touchend",(e)=>{

    let endX=e.changedTouches[0].clientX;

    if(startX-endX>60){

        nextSlide();

        restart();

    }

    if(endX-startX>60){

        current--;

        if(current<0){

            current=slides.length-1;

        }

        showSlide(current);

        restart();

    }

});

// -----------------------------
// PAUSE ON HOVER
// -----------------------------

hero.addEventListener("mouseenter",()=>{

    clearInterval(timer);

});

hero.addEventListener("mouseleave",()=>{

    restart();

});

// -----------------------------
// KEYBOARD
// -----------------------------

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        nextSlide();

        restart();

    }

    if(e.key==="ArrowLeft"){

        current--;

        if(current<0){

            current=slides.length-1;

        }

        showSlide(current);

        restart();

    }

});
