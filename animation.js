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

// Variabels for location-box animations
const locationTitle = document.querySelector(".h1-text");
const locationDescription = document.getElementById("location-box-description");
const locationimgRight = document.querySelector(".location-box-middle");
const locationimgLeft = document.querySelector(".location-box-left");

// Initial startpoint for location-box animation
gsap.set(locationTitle, { opacity: 0, scale: 0.95 });
gsap.set(locationDescription, { opacity: 0, scale: 0.95 });
gsap.set(locationimgRight, { opacity: 0, x: -1100 });
gsap.set(locationimgLeft, { opacity: 0, x: -600 });


let mm = gsap.matchMedia();


document.addEventListener("DOMContentLoaded", event => {

    mm.add("(min-width: 1850px)", () => { 

        const tlMainPage = gsap.timeline({defaults: {duration: 0.7, opacity: 1, y: 0, x: 0}});


        tlMainPage.fromTo(mainLogo, { opacity: 0, scale: 0.8 },        { duration: 0.3, scale: 1, ease: "back.out(1.7)", delay: 0.5 });
        tlMainPage.fromTo(logoDescription, { opacity: 0, scale: 0.95}, { duration: 0.3, scale: 1, ease: "power1.out"}, "-=0.1");
        tlMainPage.fromTo(orderBtn, {opacity: 0, scale: 0.95 },        { duration: 0.3, scale: 1, ease: "power1.out"}, "-=0.1");
        tlMainPage.fromTo(img1, { opacity: 0, y: -700 },               { ease: "power1.out", delay: 0 }, "-=1");
        tlMainPage.fromTo(img3, { opacity: 0, y: 700 },                { ease: "power1.out", delay: 0 }, "-=1");
        tlMainPage.fromTo(img2, { opacity: 0, x: 600 },                { ease: "power1.out", delay: 0 }, "-=1");
        tlMainPage.fromTo(img4, { opacity: 0, x: 600 },                { ease: "power1.out", delay: 0 }, "-=0.8");
    })



    function animateLocationBox() {
        let tl = gsap.timeline();
        tl.to(locationimgRight, { duration: 0.5, opacity: 1, x: 0, ease: "power1.out"});
        tl.to(locationimgLeft, { duration: 0.5, opacity: 1, x: 0, ease: "power1.out"}, "-=0.2");
        tl.to(locationTitle, { duration: 0.3,  opacity: 1, scale: 1, ease: "power1.out"},"-=0.6");
        tl.to(locationDescription, { duration: 0.3, opacity: 1, scale: 1, ease: "power1.out"},"-=0.4");
    }

    gsap.registerPlugin(ScrollTrigger);

    //Location box animation
    gsap.to({}, {
        scrollTrigger: {
        trigger: ".location-box",
        start: "35% center",
        scrub: 1,
        onEnter: () => {animateLocationBox();}
        }
    });

    gsap.to(".location-box-slider", { 
        duration: 1.2, 
        x: 3000, ease: "power1.out", 

        scrollTrigger: { 
            trigger: ".img-main-box", 
            start: "bottom 90%",
        }});
    







// end of DOMloaded function
});








    //const checkReadyState = setInterval(() => {
    //    if (document.readyState === "complete") {
    //        clearInterval(checkReadyState);
    //        scrollTriggertStart = "top 65%";
    //        ScrollTrigger.refresh();
    //    }
    //}, 100)

