        //gsap.fromTo(mainLogo, { opacity: 0, scale: 0.5 },     { duration: 0.7, opacity: 1, scale: 1, ease: "back.out(1.7)", delay: 0.5 });
        //gsap.fromTo(logoDescription, { opacity: 0, y: 30 },   { duration: 0.7, opacity: 1, y: 0, ease: "power2.out", delay: 0.5 });
        //gsap.fromTo(orderBtn, { opacity: 0, rotationX: 180 }, { duration: 0.7, opacity: 1, rotationX: 0, ease: "back.out(1.7)", delay: 0.5 });
        //gsap.fromTo(img1, { opacity: 0, y: -700 },            { duration: 0.7, opacity: 1, y: 0, ease: "power2.out" , delay: 0.5 });
        //gsap.fromTo(img3, { opacity: 0, y: 700 },             { duration: 0.7, opacity: 1, y: 0, ease: "power2.out" , delay: 0.5 });
        //gsap.fromTo(img2, { opacity: 0, x: 600 },             { duration: 0.7, opacity: 1, x: 0, ease: "power2.out" , delay: 0.5 });
        //gsap.fromTo(img4, { opacity: 0, x: 600 },             { duration: 0.7, opacity: 1, x: 0, ease: "power2.out" , delay: 0.5 });
   
   
   
        //const defaults = gsap.timeline({defaults: {duration: 0.5, opacity: 1, y: 0, x: 0}});


        //tl.fromTo(mainLogo, { opacity: 0, scale: 0.8 }, { scale: 1, ease: "back.out(1.7)", delay: 0.3 });
        //tl.fromTo(logoDescription, { opacity: 0, y: 30 },   { ease: "power2.out"}, "-=0.5");
        //tl.fromTo(orderBtn, { opacity: 0, y: 30 },          { ease: "power2.out"}, "-=0.5");
        //tl.fromTo(img1, { opacity: 0, y: -700 },            { ease: "power2.out" }, "-=0.5");
        //tl.fromTo(img3, { opacity: 0, y: 700 },             { ease: "power2.out" }, "-=0.5");
        //tl.fromTo(img2, { opacity: 0, x: 600 },             { ease: "power2.out" }, "-=0.5");
        //tl.fromTo(img4, { opacity: 0, x: 600 },             { ease: "power2.out" }, "-=0.5");



        
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



gsap.fromTo(element, 
    {
        opacity: 0,
        y: 25
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.5,
        scrollTrigger: {
        trigger: element, // Element that triggers the animation
        start: () => scrollTriggertStart, // Start the animation when the element is in the center of the viewport
        markers: true // Uncomment to see the start and end markers for debugging
        }
    });

