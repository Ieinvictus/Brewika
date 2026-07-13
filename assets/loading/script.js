window.addEventListener("load",()=>{

    if(typing){

        typeBrand();

    }

    setTimeout(()=>{

        loader.classList.add("hide-loader");

        document.body.style.overflow="auto";

    },2500);

});
