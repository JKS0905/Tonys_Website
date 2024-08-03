// Last update 09.06.24

// Variabels for 404 page
const mainBox = document.querySelector(".main");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const homeBtn = document.querySelector(".home-button");


// timeline logic
const tl = gsap.timeline();

tl.fromTo(mainBox, { opacity: 0, scale: 0.95}, {duration: 0.3, opacity: 1, scale: 1, ease: "power1.out", delay: 0.5})
tl.fromTo(text1, { opacity: 0, scale: 0.95}, {duration: 0.3, opacity: 1, scale: 1, ease: "power1.out"}, "-=0.1")
tl.fromTo(text2, { opacity: 0, scale: 0.95}, {duration: 0.3, opacity: 1, scale: 1, ease: "power1.out"}, "-=0.1")
tl.fromTo(homeBtn, { opacity: 0, scale: 0.95}, {duration: 0.3, opacity: 1, scale: 1, ease: "power1.out"}, "-=0.1")
