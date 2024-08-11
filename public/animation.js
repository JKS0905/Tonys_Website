// Last update 09.06.24

// Ensures the browser starts one the top when loading
//"scrollRestoration" in history ? history.scrollRestoration = "manual": null;

// Variabels for Main page
const mainLogo = document.querySelector(".main-logo");
const orderBtn = document.querySelector(".order-button-2-link");
const img1 = document.querySelector(".img-box-img1");
const img2 = document.querySelector(".img-box-img2");
const img3 = document.querySelector(".img-box-img3");
const img4 = document.querySelector(".img-box-img4");
const mainPageImages = [img1, img2, img3, img4];
const logoDescription = document.getElementById("main-logo-description");

// Variabels for location-box animations
const locationTitle = document.querySelector(".h1-text");
const locationDescription = document.getElementById("location-box-description");
const locationimgRight = document.querySelector(".location-box-middle");
const locationimgLeft = document.querySelector(".location-box-left");
const locationimages = [locationimgRight, locationimgLeft];

let isMaxWidth1290;

// Variabels Order-Box animation
const orderBoxes = document.querySelectorAll(".order-box");
const orderBox1 = orderBoxes[0];
const orderBox2 = orderBoxes[1];
const orderBox3 = orderBoxes[2];

// Initial startpoint for location-box animation
window.matchMedia("(max-width: 1290px)").matches ? isMaxWidth1290 = true : isMaxWidth1290 = false;

// Variabels Pizza item animation
const menuTitle = document.querySelectorAll(".menu-header");
const pizzaItem = document.querySelectorAll(".pizza-item");

// Variabels for Opening Hours
const openingHoursBox = document.querySelector(".opening-hours-box");
const openingNb = document.querySelector(".nb");
const openingHoursText = document.getElementById("opening-hours-text");
const fbLink = document.getElementById("fb-link");
 
const mm = gsap.matchMedia();
const tl = gsap.timeline({defaults: {duration: 0.7, opacity: 1, y: 0, x: 0}});
gsap.registerPlugin(ScrollTrigger);


document.addEventListener("DOMContentLoaded", event => {
    window.onLoad = () => {

        mm.add("(min-width: 1850px)", () => { 
            tl.to(mainLogo, { duration: 0.3, scale: 1, ease: "back.out(1.7)", delay: 0.5 });
            tl.to(logoDescription, { duration: 0.3, scale: 1, ease: "power1.out"}, "-=0.1");
            tl.to(orderBtn, { duration: 0.3, scale: 1, ease: "power1.out"}, "-=0.1");
            tl.to(img1, { ease: "power1.out" }, "-=1");
            tl.to(img3, { ease: "power1.out" }, "-=1");
            tl.to(img2, { ease: "power1.out" }, "-=1");
            tl.to(img4, { ease: "power1.out" }, "-=0.8");

            // Adds scrolltrigger to the location box and order box
            addScrollTriggerLocationBoxText();
            addScrollTriggerLocationBoxSlider();
            addScrollTriggerOrderBoxes();

        }); // end of mediaquerry

        mm.add("(min-width: 1300px) and (max-width: 1849px)", () => {  
            tl.to(mainLogo, { duration: 0.3, scale: 1, ease: "back.out(1.7)", delay: 0.5 });
            tl.to(logoDescription, { duration: 0.3, scale: 1, ease: "power1.out"}, "-=0.1");
            tl.to(orderBtn, { duration: 0.3, scale: 1, ease: "power1.out"}, "-=0.1");
            tl.to(img1, { duration:0.5, ease: "power1.out" }, "-=1");
            tl.to(img2, { duration:0.5, ease: "power1.out"  }, "-=0.8");
            tl.to(img3, { duration:0.5, ease: "power1.out"  }, "-=0.6");
            tl.to(img4, { duration:0.5, ease: "power1.out"  }, "-=0.4");

            // Adds scrolltrigger to the location box and order box
            addScrollTriggerLocationBoxText();
            addScrollTriggerLocationBoxSlider();
            addScrollTriggerOrderBoxes();

        }); // end of mediaquerry

        mm.add("(max-width: 1290px)", () => {
            tl.to(mainLogo, { duration: 0.3, scale: 1, ease: "back.out(1.7)", delay: 0.5 });
            tl.to(logoDescription, { duration: 0.3, scale: 1, ease: "power1.out"}, "-=0.1");
            tl.to(orderBtn, { duration: 0.3, scale: 1, ease: "power1.out"}, "-=0.1");

            //Main page images
            mainPageImages.forEach(img => {
                    gsap.to(img, {   
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: "power1.out",
                        scrollTrigger: {
                        trigger: img,
                        start: "top center"
                    }
                    }
                ); 
            });

            addScrollTriggerLocationBoxSlider();

            //Location box animation for Mobile
            const tlScrollTrigger = gsap.timeline({
                scrollTrigger: {
                trigger: locationDescription,
                start: "top center",
                }
            });
        
            tlScrollTrigger.to(locationTitle, { duration: 0.3,  opacity: 1, scale: 1, ease: "power1.out"});
            tlScrollTrigger.to(locationDescription, { duration: 0.3, opacity: 1, scale: 1, ease: "power1.out"}, "-=0.1");

            // Location images animation
            locationimages.forEach(img => {
                gsap.to(img, { 
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: img,
                            start: "top center"
                        }
                    }
                );
            });
            // Order-Box animation
            orderBoxes.forEach(item => {
                gsap.to(item, { 
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: "power1.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top center"
                        }
                    }
                );
            });

        }); // end of mediaquerry

        // Menu title animation
        menuTitle.forEach(element => {
            gsap.to(element, {   
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 75%",
                    }
                }
            );
        });
        
        pizzaItem.forEach(element => {
            gsap.to(element, {   
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power1.out",
                    scrollTrigger: {
                    trigger: element,
                    start: "top 75%",
                    }
                }
            ); 
        });

        gsap.to({}, {
            scrollTrigger: {
            trigger: ".opening-hours-box",
            start: "50% center",
            onEnter: () => {animateOpeningHours();}
            }
        });
    }
}, { passive: true }); // end of DOMContentLoaded

//Location box animation for desktop.
function addScrollTriggerLocationBoxText() {
    gsap.to({}, {
        scrollTrigger: {
        trigger: ".location-box",
        start: "35% center",
        onEnter: () => {animateLocationBox();} //function that runs the timeline animation
        }
    });
}

function addScrollTriggerLocationBoxSlider() {
    let xWidth;
    isMaxWidth1290 ? xWidth = 1300 : xWidth = 3000;

    gsap.to(".location-box-slider", { 
        duration: 1.2, 
        x: xWidth, ease: "power1.out", 

        scrollTrigger: { 
            trigger: ".img-main-box", 
            start: "bottom 90%"
        }
    }); 
}

function animateLocationBox() {
    tl.to(locationimgRight, { duration: 0.5, opacity: 1, x: 0, ease: "power1.out"});
    tl.to(locationimgLeft, { duration: 0.5, opacity: 1, x: 0, ease: "power1.out"}, "-=0.2");
    tl.to(locationTitle, { duration: 0.3,  opacity: 1, scale: 1, ease: "power1.out"},"-=0.6");
    tl.to(locationDescription, { duration: 0.3, opacity: 1, scale: 1, ease: "power1.out"},"-=0.4");
}

//Location box animation for desktop.
function addScrollTriggerOrderBoxes() {
    gsap.to({}, {
        scrollTrigger: {
        trigger: ".order-box-main",
        start: "20% center",
        onEnter: () => {animateOrderBoxes();} //function that runs the timeline animation
        }
    });
}

function animateOrderBoxes() {
    tl.to(orderBox1, { duration: 0.5, opacity: 1, y: 0, ease: "power1.out"});
    tl.to(orderBox2, { duration: 0.5, opacity: 1, y: 0, ease: "power1.out"}, "-=0.2");
    tl.to(orderBox3, { duration: 0.5, opacity: 1, y: 0, ease: "power1.out"}, "-=0.2");
}

function animateOpeningHours() {
    tl.to(openingHoursBox, { duration: 0.5, opacity: 1, scale: 1, ease: "power1.out"});
    tl.to(openingNb, { duration: 0.3, opacity: 1, scale: 1, ease: "power1.out"}, "-=0.2");
    tl.to(openingHoursText, { duration: 0.3, opacity: 1, scale: 1, ease: "power1.out"}, "-=0.1");
    tl.to(fbLink, { duration: 0.3, opacity: 1, scale: 1, ease: "power1.out"}, "-=0.1");
}

