"use strict";

const circleContainer = document.querySelector(".circle-container");

document.querySelectorAll(".circle-container-element").forEach(function(element){
element.addEventListener("mouseover", function(){
    let pictureNumber =  Math.floor(Math.random() * 4);
    circleContainer.style.backgroundImage = `url(img/Icy${pictureNumber}.png)`; 
})
element.addEventListener("mouseout", function(){
    circleContainer.style.backgroundImage = "url(img/tooth_big.png)";
})

});


document.querySelector(".btn-about").addEventListener("click", function(){
    document.querySelector(".btn-about").classList.add("active");
    document.querySelector(".btn-services").classList.remove("active");
    document.querySelector(".btn-advice").classList.remove("active");
    document.querySelector(".btn-gallery").classList.remove("active");
    document.querySelector(".about-us").classList.remove("d-none");
    document.querySelector(".services").classList.add("d-none");
    document.querySelector(".advices").classList.add("d-none");
    document.querySelector(".gallery").classList.add("d-none");
});
document.querySelector(".btn-services").addEventListener("click", function(){
    document.querySelector(".btn-services").classList.add("active");
    document.querySelector(".btn-about").classList.remove("active");
    document.querySelector(".btn-advice").classList.remove("active");
    document.querySelector(".btn-gallery").classList.remove("active");
    document.querySelector(".services").classList.remove("d-none");
    document.querySelector(".about-us").classList.add("d-none");
    document.querySelector(".advices").classList.add("d-none");
    document.querySelector(".gallery").classList.add("d-none");
});
document.querySelector(".btn-advice").addEventListener("click", function(){
    document.querySelector(".btn-advice").classList.add("active");
    document.querySelector(".btn-services").classList.remove("active");
    document.querySelector(".btn-about").classList.remove("active");
    document.querySelector(".btn-gallery").classList.remove("active");
    document.querySelector(".advices").classList.remove("d-none");
    document.querySelector(".services").classList.add("d-none");
    document.querySelector(".about-us").classList.add("d-none");
    document.querySelector(".gallery").classList.add("d-none");
});
document.querySelector(".btn-gallery").addEventListener("click", function(){
    document.querySelector(".btn-gallery").classList.add("active");
    document.querySelector(".btn-services").classList.remove("active");
    document.querySelector(".btn-about").classList.remove("active");
    document.querySelector(".btn-advice").classList.remove("active");
    document.querySelector(".gallery").classList.remove("d-none");
    document.querySelector(".services").classList.add("d-none");
    document.querySelector(".advices").classList.add("d-none");
    document.querySelector(".about-us").classList.add("d-none");
});