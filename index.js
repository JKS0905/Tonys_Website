// Nav bar dropdown menu events
const menuText = document.querySelector(".menu-text-arrow");
const menuArrow = document.querySelector(".menu-text-arrow svg");
const navBarItem = document.querySelectorAll(".nav-bar-item");
const sidebarItem = document.querySelectorAll(".sidebar-item");
const navBarItemMenu = document.querySelector(".nav-bar-item-menu");
const navBarItemMenuLink = document.querySelectorAll(".nav-bar-item-menu a");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownContentLink = document.querySelectorAll(".dropdown-content a");
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

let isTouchscreen;

// JavaScript to detect touch devices
if ('ontouchstart' in window || navigator.maxTouchPoints) {
    document.documentElement.classList.add("touch-device");
    isTouchscreen = true;
}
else {
    document.documentElement.classList.add("not-touch-device");
    isTouchscreen = false;
}

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

function openSidebar(){
    sidebarBtn.classList.add("change");
    tl.set(sidebar, {visibility: "visible"});
    tl.to(sidebar, {duration: 0.5, top: "auto", ease: "power1.out"});
}

function closeSidebar() {
    sidebarItemMenu.style.color = gray;
    sidebarItemMenu.style.fill = gray;
    sidebarBtn.classList.remove("change")
    sidebarMenuArrow.classList.remove("rotate");
    tl.to(sidebarDropdownContent, { duration: 0.5, height: 0, ease: "power1.out" });
    tl.set(sidebarDropdownContent, { visibility: "hidden",});
    tl.to(sidebar, { duration: 0.5, top: sidebarTopValue, ease: "power1.out"}, "-=0.5");
    tl.set(sidebar, { visibility: "hidden" });
}

function openSidebarDropdown() {
    sidebarMenuArrow.classList.add("rotate");
    tl.set(sidebarDropdownContent, {visibility: "visible"});
    tl.to(sidebarDropdownContent, {duration: 0.5, height: "auto", ease: "power1.out"});
}

function closeSidebarDropdown() {
    sidebarMenuArrow.classList.remove("rotate");
    tl.to(sidebarDropdownContent, {duration: 0.5, height: 0, ease: "power1.out"});
    tl.set(sidebarDropdownContent, {visibility: "hidden"});
}

menuText.addEventListener("mouseenter", event => {
    console.log("mouseenter")
    menuText.style.color = red;
    menuArrow.style.fill = red;
    dropdownContent.classList.add("open");
    menuArrow.classList.add("rotate");
});

navBarItemMenu.addEventListener("mouseleave", event => {
    console.log("mouseleave")
    menuText.style.color = gray;
    menuArrow.style.fill = gray;
    dropdownContent.classList.remove("open");
    menuText.classList.remove("open");
    menuArrow.classList.remove("rotate");
});

// desktop dropdown menu
menuText.addEventListener(eventToUseEnd, event => {
    console.log("clicked")
    if (dropdownContent.classList.contains("open")) {
        menuText.style.color = gray;
        menuArrow.style.fill = gray;
        menuArrow.classList.remove("open");
        menuText.classList.remove("open");
        menuArrow.classList.remove("rotate");
        dropdownContent.classList.remove("open");
    }
    else {
        menuText.style.color = red;
        menuArrow.style.fill = red;
        dropdownContent.classList.add("open");
        menuText.classList.add("open");
        menuArrow.classList.add("rotate");
    }
});

// if its a touchscreen it will close desktop drop down when you click an item
if (isTouchscreen) {
    dropdownContentLink.forEach(item => {
        item.addEventListener(eventToUseEnd, event => {
            menuText.style.color = gray;
            menuArrow.style.fill = gray;
            menuArrow.classList.remove("open");
            menuText.classList.remove("open");
            menuArrow.classList.remove("rotate");
            dropdownContent.classList.remove("open");
        })
    })
}

//if a sidebar item is clicked the sidebare will close
sidebarItem.forEach(item => {
    item.addEventListener(eventToUseEnd, event => {
        closeSidebar();
    });
});

//opens the sidebar
sidebarBtn.addEventListener(eventToUseEnd, event => {
    sidebar.style.top !== "auto" ? openSidebar() : closeSidebar();
});

//Opens the dropdown menu
sidebarItemMenu.addEventListener(eventToUseEnd, event => {
    if (sidebarDropdownContent.style.height !== "auto") {
        console.log("color red")
        sidebarItemMenu.style.color = red;
        sidebarItemMenu.style.fill = red;
        openSidebarDropdown();
    }
    else{
        console.log("Gray")
        sidebarItemMenu.style.color = gray;
        sidebarItemMenu.style.fill = gray;
        closeSidebarDropdown();
    }
});

// if a dropdown item is clicked it will close the whole sidebar
sidebarDropdownContent.addEventListener(eventToUseEnd, event => {
    closeSidebar();
});


document.body.addEventListener(eventToUseStart, event => {
    const isSidebarOpen = sidebarBtn.classList.contains("change");
    const isSidebarVisible = sidebar.style.visibility === "visible";
    const isDropdownVisible = sidebarDropdownContent.style.visibility === "visible";

    // If sidebar is open and you click outside the sidebar and the dropdown content
    if (isSidebarOpen && !sidebar.contains(event.target) && !sidebarBtn.contains(event.target) && !sidebarDropdownContent.contains(event.target)) {
        // If both sidebar and dropdown content are open
        if (isSidebarVisible && isDropdownVisible) {
            closeSidebar();
        }
        // If only sidebar is open
        else if (isSidebarVisible) {
            closeSidebar();
        }
    }
});