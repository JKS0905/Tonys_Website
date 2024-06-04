//const mainLogo = document.querySelector("main-logo");

const pizzaItems = document.querySelectorAll('.pizza-item');
const pText= document.querySelectorAll('.p-text');

let scrollTriggertStart = "top bottom";

//---------------------------------------------------------------------------


const mainLogo = document.querySelector(".main-logo");
const orderBtn = document.querySelector(".order-button-2-link");
const img1 = document.querySelector(".img-box-img1");
const img2 = document.querySelector(".img-box-img2");
const img3 = document.querySelector(".img-box-img3");
const img4 = document.querySelector(".img-box-img4");
const logoDescription = document.getElementById("main-logo-description");

let mm = gsap.matchMedia();

document.addEventListener("DOMContentLoaded", event => {

    mm.add("(min-width: 1850px)", () => { 

        const tl = gsap.timeline({defaults: {duration: 0.5, opacity: 1, y: 0, x: 0}});


        tl.fromTo(mainLogo, { opacity: 0, scale: 0.8 }, { scale: 1, ease: "back.out(1.7)", delay: 0.3 });
        tl.fromTo(logoDescription, { opacity: 0, y: 30 }, { ease: "power2.out"}, "-=0.1");
        tl.fromTo(orderBtn, { opacity: 0, y: 30 },  { ease: "power2.out"}, "-=0.1");
        tl.fromTo(img1, { opacity: 0, y: -300 },    { ease: "power2.out" }, "-=0.1");
        tl.fromTo(img3, { opacity: 0, y: 300 },     { ease: "power2.out" }, "-=0.5");
        tl.fromTo(img2, { opacity: 0, x: 100 },     { ease: "power2.out" }, "-=0.1");
        tl.fromTo(img4, { opacity: 0, x: 100 },     { ease: "power2.out" }, "-=0.2");
        
   

    })

});


































    // ------------------------------------------------------------
    //gsap.registerPlugin(ScrollTrigger);
//
    //pizzaItems.forEach(element => {
    //    gsap.fromTo(element, 
    //    {
    //        opacity: 0,
    //        y: 25
    //    },
    //    {
    //        opacity: 1,
    //        y: 0,
    //        duration: 0.5,
    //        scrollTrigger: {
    //        trigger: element, // Element that triggers the animation
    //        start: () => scrollTriggertStart, // Start the animation when the element is in the center of the viewport
    //        markers: true // Uncomment to see the start and end markers for debugging
    //        }
    //    })});
//
//
    //pText.forEach(element => {
    //    gsap.fromTo(element, 
    //    {
    //        opacity: 0,
    //        y: 25
    //    },
    //    {
    //        opacity: 1,
    //        y: 0,
    //        duration: 0.5,
    //        scrollTrigger: {
    //        trigger: element, // Element that triggers the animation
    //        start: () => scrollTriggertStart, // Start the animation when the element is in the center of the viewport
    //        markers: true // Uncomment to see the start and end markers for debugging
    //        }
    //    });
    //});
//
    //const checkReadyState = setInterval(() => {
    //    if (document.readyState === "complete") {
    //        clearInterval(checkReadyState);
    //        scrollTriggertStart = "top 65%";
    //        ScrollTrigger.refresh();
    //    }
    //}, 100)
//