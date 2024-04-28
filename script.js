/*aqui empieza configuracion de boton menu para ocultar y aparecer en celular*/
let boton=document.getElementById("boton");
let nav=document.getElementById ("menuu")
let con=true
function menuu(){
    if (con) {
        nav.style.left ="0"
        con=false   
        
    } else {
        nav.style.left ="-100%"
        con=true   
    }
}
boton.addEventListener("click" ,menuu)
/*aqui termina configuracion de boton menu para ocultar y aparecer en celular*/

/*aqui comienza para dar click al menu y que aparescan los submenus*/

$("itemm").click(function(){
    let target=$(this).parent().childrem(".slideerr")
    $(target).slideerrtoggle(show)
})
/*aqui termina para dar click al menu y que aparescan los submenus*/



/*CONFIGURACION DE VER MAS*/
function ShowHide(){
    var containera = document.getElementsByClassName("containera") [0];

    if(containera.style.visibility == "hidden"){
        containera.style.visibility = "visible";
    }else{
        containera.style.visibility ="hidden";
    }

}
/*TERMINA CONFIGURACION DE VER MAS */

//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

/*primera tarjeta*/
function toggleContent() {
    var extraContent = document.getElementById("extraContent");
    if (extraContent.style.display === "none") {
        extraContent.style.display = "block";
    } else {
        extraContent.style.display = "none";
    }
}
/*segunda tarjeta*/
function toggleContentt() {
    var extraContentt = document.getElementById("extraContentt");
    if (extraContentt.style.display === "none") {
        extraContentt.style.display = "block";
    } else {
        extraContentt.style.display = "none";
    }
}
/*tercera tarjeta*/
function toggleContenttt() {
    var extraContenttt = document.getElementById("extraContenttt");
    if (extraContenttt.style.display === "none") {
        extraContenttt.style.display = "block";
    } else {
        extraContenttt.style.display = "none";
    }
}


