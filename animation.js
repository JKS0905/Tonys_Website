// Last update 08.06.24

// Ensures the browser starts one the top when loading
"scrollRestoration" in history ? history.scrollRestoration = "manual": null;


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
const images = [img1, img2, img3, img4];
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



// Pizza item animation
const menuTitle = document.querySelectorAll(".menu-header");
const pizzaItem = document.querySelectorAll(".pizza-item");

const mm = gsap.matchMedia();
const tl = gsap.timeline({defaults: {duration: 0.7, opacity: 1, y: 0, x: 0}});
gsap.registerPlugin(ScrollTrigger);


document.addEventListener("DOMContentLoaded", event => {

    mm.add("(min-width: 1300px) and (max-width: 1849px)", () => {  
        tl.fromTo(mainLogo, { opacity: 0, scale: 0.8 },        { duration: 0.3, scale: 1, ease: "back.out(1.7)", delay: 0.5 });
        tl.fromTo(logoDescription, { opacity: 0, scale: 0.95}, { duration: 0.3, scale: 1, ease: "power1.out"}, "-=0.1");
        tl.fromTo(orderBtn, {opacity: 0, scale: 0.95 },        { duration: 0.3, scale: 1, ease: "power1.out"}, "-=0.1");
        tl.fromTo(img1, { opacity: 0, x: 600 },                { duration:0.5, ease: "power1.out" }, "-=1");
        tl.fromTo(img2, { opacity: 0, x: 600 },                { duration:0.5, ease: "power1.out"  }, "-=0.8");
        tl.fromTo(img3, { opacity: 0, x: 600 },                { duration:0.5, ease: "power1.out"  }, "-=0.6");
        tl.fromTo(img4, { opacity: 0, x: 600 },                { duration:0.5, ease: "power1.out"  }, "-=0.4");

        // Adds scrolltrigger to the location box
        AddScrollTriggerLocationBox();
    });

    mm.add("(min-width: 1850px)", () => { 
        tl.fromTo(mainLogo, { opacity: 0, scale: 0.8 },        { duration: 0.3, scale: 1, ease: "back.out(1.7)", delay: 0.5 });
        tl.fromTo(logoDescription, { opacity: 0, scale: 0.95}, { duration: 0.3, scale: 1, ease: "power1.out"}, "-=0.1");
        tl.fromTo(orderBtn, {opacity: 0, scale: 0.95 },        { duration: 0.3, scale: 1, ease: "power1.out"}, "-=0.1");
        tl.fromTo(img1, { opacity: 0, y: -700 },               { ease: "power1.out" }, "-=1");
        tl.fromTo(img3, { opacity: 0, y: 700 },                { ease: "power1.out" }, "-=1");
        tl.fromTo(img2, { opacity: 0, x: 600 },                { ease: "power1.out" }, "-=1");
        tl.fromTo(img4, { opacity: 0, x: 600 },                { ease: "power1.out" }, "-=0.8");

        // Adds scrolltrigger to the location box
        AddScrollTriggerLocationBox();
    });

    mm.add("(max-width: 1290px)", () => {
        tl.fromTo(mainLogo, { opacity: 0, scale: 0.8 },        { duration: 0.3, scale: 1, ease: "back.out(1.7)", delay: 0.5 });
        tl.fromTo(logoDescription, { opacity: 0, scale: 0.95}, { duration: 0.3, scale: 1, ease: "power1.out"}, "-=0.1");
        tl.fromTo(orderBtn, {opacity: 0, scale: 0.95 },        { duration: 0.3, scale: 1, ease: "power1.out"}, "-=0.1");

        //Main page images
        images.forEach(img => {
            if(img) {
                console.log("Loop")
                gsap.fromTo(img, {
                    opacity: 0,
                    scale: 0.95
                },
                {   
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "power1.out",
                    scrollTrigger: {
                    trigger: img,
                    start: "top center",
                    markers: true
                    }
                }); 
            } else {
                console.error("One or more elements not found in the DOM.")
            }
        });


    });




    // Menu title animation
    menuTitle.forEach(element => {
        gsap.fromTo(element, {
                opacity: 0,
                scale: 0.95
            },
            {   
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                }
            }
        );
    });
    
    pizzaItem.forEach(element => {
        gsap.fromTo(element, {
                opacity: 0,
                y: 25
            },
            {   
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power1.out",
                scrollTrigger: {
                trigger: element,
                start: "top 80%",
                }
            }
        ); 
    });

    

// end of DOMloaded function
});









function AddScrollTriggerLocationBox() {
    //Location box animation
    gsap.to({}, {
        scrollTrigger: {
        trigger: ".location-box",
        start: "35% center",
        scrub: 1,
        onEnter: () => {animateLocationBox();} //function that runs the timeline animation
        }
    });

    gsap.to(".location-box-slider", { 
        duration: 1.2, 
        x: 3000, ease: "power1.out", 

        scrollTrigger: { 
            trigger: ".img-main-box", 
            start: "bottom 90%",
        }
    }); 
};

function animateLocationBox() {
    tl.to(locationimgRight, { duration: 0.5, opacity: 1, x: 0, ease: "power1.out"});
    tl.to(locationimgLeft, { duration: 0.5, opacity: 1, x: 0, ease: "power1.out"}, "-=0.2");
    tl.to(locationTitle, { duration: 0.3,  opacity: 1, scale: 1, ease: "power1.out"},"-=0.6");
    tl.to(locationDescription, { duration: 0.3, opacity: 1, scale: 1, ease: "power1.out"},"-=0.4");
};



//const checkReadyState = setInterval(() => {
//    if (document.readyState === "complete") {
//        clearInterval(checkReadyState);
//        scrollTriggertStart = "top 65%";
//        ScrollTrigger.refresh();
//    }
//}, 100)

