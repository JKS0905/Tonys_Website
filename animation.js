//const mainLogo = document.querySelector("main-logo");

const pizzaItems = document.querySelectorAll('.pizza-item');

gsap.registerPlugin(ScrollTrigger);

pizzaItems.forEach(element => {
    gsap.fromTo(element, 
    {
        opacity: 0,
        y: 50
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.3,
        scrollTrigger: {
        trigger: element, // Element that triggers the animation
        start: "top 65%", // Start the animation when the element is in the center of the viewport
        markers: true // Uncomment to see the start and end markers for debugging
        }
    })});

const pText= document.querySelectorAll('.p-text');


pText.forEach(element => {
    gsap.fromTo(element, 
    {
        opacity: 0,
        y: 50
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.3,
        scrollTrigger: {
        trigger: element, // Element that triggers the animation
        start: "top 65%", // Start the animation when the element is in the center of the viewport
        markers: true // Uncomment to see the start and end markers for debugging
        }
    })});
