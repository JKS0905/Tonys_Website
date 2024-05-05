// Nav bar dropdown menu events
const menuText = document.querySelector(".menu-text-arrow");
const menuArrow = document.querySelector(".menu-text-arrow svg");
const navBarItem = document.querySelectorAll(".nav-bar-item");
const sidebarItem = document.querySelectorAll(".sidebar-item");
const navBarItemMenu = document.querySelector(".nav-bar-item-menu");
const navBarItemMenuLink = document.querySelectorAll(".nav-bar-item-menu a");
const dropdownContent = document.querySelector(".dropdown-content");
const red = "#b32e31";
const gray = "#4e4d4d";

// Activates menu drop down/ Sidebar events
const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".sidebar-button");
const sidebarItemMenu = document.querySelector(".sidebar-item-menu");
const sidebarDropdownContent = document.querySelector(".sidebar-dropdown-content");
const sidebarDropdownContentLink = document.querySelectorAll(".sidebar-dropdown-content a");
const sidebarTextArrow = document.querySelector(".sidebar-text-arrow");
const sidebarMenuArrow = document.querySelector(".sidebar-text-arrow svg");

// Variuable to check for browser support for event types
const eventToUseEnd = "ontouchend" in document.documentElement ? "touchend" : "click";
const eventToUseStart = "ontouchstart" in document.documentElement ? "touchstart" : "click";

// gsap timeline
const tl = gsap.timeline();

// gets CSS element
const sidebarTopValue = getComputedPropertyValue(sidebar, "top")

// get CSS value from a class
function getComputedPropertyValue(element, property) {
    // Get the computed style of the "element"
    const elementStyle = window.getComputedStyle(element);

    // Get the value of the "property" from the computed style
    const elementValue = elementStyle.getPropertyValue(property);

    // If the value is empty, log an error and return
    if (elementValue === "") {
        console.error(`Invalid or missing CSS property: ${property}`);
        return;
    }

    // Check if the value contains any numbers
    const containNumbers = /\d/.test(elementValue);

    // If the value contains numbers, return the numeric value
    if (containNumbers) {
        return parseFloat(elementValue);
    } else {
        return elementValue;
    }
}


// Scroll behavior for menu items
document.addEventListener("DOMContentLoaded", event => {
    const offset = 70; // Adjust offset here for scroll
    
    // Select menu links
    const mainMenuLinks = document.querySelectorAll(".dropdown-content a");
    const sidebarMenuLinks = document.querySelectorAll(".sidebar-dropdown-content a");

    // Attach scrollToSection function to each link inside menu links
    mainMenuLinks.forEach(link => {
        scrollToSection(link);
    });

    sidebarMenuLinks.forEach(link => {
        scrollToSection(link);
    });

    // Diffrend Eventlisteners to trigger the scrollToTarget function
    function scrollToSection(link) {
        link.addEventListener(eventToUseEnd, event => {
            event.preventDefault();
            scrollToTarget(link);
        })
    }

    // Scrolls to the target on screen
    function scrollToTarget(link) {
        const targetId = link.getAttribute("href").substring(1); // Get target ID from link's href attribute
        const scrollPosition = document.getElementById(targetId).offsetTop - offset;
        window.scrollTo(0, scrollPosition);
    }
});

menuText.addEventListener("mouseenter", event => {
    dropdownContent.classList.add("open");
    menuArrow.classList.add("rotate");
});

navBarItemMenu.addEventListener("mouseleave", event => {
    dropdownContent.classList.remove("open");
    menuText.classList.remove("open");
    menuArrow.classList.remove("rotate");
});

// desktop dropdown menu
menuText.addEventListener("click", event => {
    dropdownContent.classList.toggle("open");
    menuText.classList.toggle("open");
    menuArrow.classList.toggle("rotate");
});

// Settings for touch devices

// when clicking an item it will pulse red color
navBarItem.forEach(item => {
    item.addEventListener(eventToUseStart, event => {
        item.style.color = (red);
    });
});
navBarItem.forEach(item => {
    item.addEventListener(eventToUseEnd, event => {
        item.style.color = (gray);
    });
});

// when clicking an item it will pulse red color
sidebarItem.forEach(item => {
    item.addEventListener(eventToUseStart, event => {
        item.style.color = (red);
    });
});
sidebarItem.forEach(item => {
    item.addEventListener(eventToUseEnd, event => {
        item.style.color = (gray);
        sidebarBtn.classList.toggle("change")
        tl.to(sidebar, {duration: 0.5, top: sidebarTopValue, ease: "power1.out"});
        tl.set(sidebar, {visibility: "hidden"});
    });
});

// when clicking an item it will pulse red color
navBarItemMenuLink.forEach(item => {
    item.addEventListener(eventToUseStart, event => {
        item.style.color = (red);
    });
});
navBarItemMenuLink.forEach(item => {
    item.addEventListener(eventToUseEnd, event => {
        item.style.color = (gray);
    });
});


//opens the sidebar
sidebarBtn.addEventListener(eventToUseEnd, event => {
    sidebarBtn.classList.toggle("change");
    if (sidebar.style.top !== "auto") {
        tl.set(sidebar, {visibility: "visible"});
        tl.to(sidebar, {duration: 0.5, top: "auto", ease: "power1.out"});
    }
    else{
        tl.to(sidebar, {duration: 0.5, top: sidebarTopValue, ease: "power1.out"});
        tl.set(sidebar, {visibility: "hidden"});
    }
});

//Opens the menu dropdown menu
sidebarItemMenu.addEventListener(eventToUseEnd, event => {
    sidebarMenuArrow.classList.toggle("rotate");
    if (sidebarDropdownContent.style.height !== "auto") {
        sidebarItemMenu.style.color = red;
        sidebarItemMenu.style.fill = red;
        tl.set(sidebarDropdownContent, {visibility: "visible"});
        tl.to(sidebarDropdownContent, {duration: 0.5, height: "auto", ease: "power1.out"});
    }
    else{
        sidebarItemMenu.style.color = gray;
        sidebarItemMenu.style.fill = gray;
        tl.to(sidebarDropdownContent, {duration: 0.5, height: 0, ease: "power1.out"});
        tl.set(sidebarDropdownContent, {visibility: "hidden"});
    }
});

// if a dropdown item is clicked it will close the whole sidebar
sidebarDropdownContent.addEventListener(eventToUseEnd, event => {
    sidebarBtn.classList.toggle("change")
    tl.to(sidebarDropdownContent, { duration: 0.5, height: 0, ease: "power1.out" });
    tl.set(sidebarDropdownContent, { visibility: "hidden",});
    tl.to(sidebar, { duration: 0.5, top: sidebarTopValue, ease: "power1.out"}, "-=0.5");
    tl.set(sidebar, { visibility: "hidden" });
});


document.body.addEventListener(eventToUseStart, event => {
    const isSidebarOpen = sidebarBtn.classList.contains("change");
    const isSidebarVisible = sidebar.style.visibility === "visible";
    const isDropdownVisible = sidebarDropdownContent.style.visibility === "visible";

    // If sidebar is open and you click outside the sidebar and the dropdown content
    if (isSidebarOpen && !sidebar.contains(event.target) && !sidebarBtn.contains(event.target) && !sidebarDropdownContent.contains(event.target)) {
        // If both sidebar and dropdown content are open
        if (isSidebarVisible && isDropdownVisible) {
            sidebarBtn.classList.remove("change");
            tl.to(sidebarDropdownContent, { duration: 0.5, height: 0, ease: "power1.out" });
            tl.set(sidebarDropdownContent, { visibility: "hidden",});
            tl.to(sidebar, { duration: 0.5, top: sidebarTopValue, ease: "power1.out"}, "-=0.5");
            tl.set(sidebar, { visibility: "hidden" });
        }
        // If only sidebar is open
        else if (isSidebarVisible) {
            sidebarBtn.classList.remove("change");
            tl.to(sidebar, { duration: 0.5, top: sidebarTopValue, ease: "power1.out" });
            tl.set(sidebar, { visibility: "hidden" });
        }
    }
});