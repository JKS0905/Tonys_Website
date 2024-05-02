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
const tl = gsap.timeline();

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
        sidebar.classList.remove("open");
        sidebarBtn.classList.remove("change");
        sidebarDropdownContent.classList.remove("open")
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

// Menu dropdown event
menuText.addEventListener(eventToUseEnd, event => {
    event.preventDefault();
    dropdownContent.classList.toggle("open");
    menuText.classList.toggle("open");
    menuArrow.classList.toggle("rotate");
    navBarItemMenu.classList.add("pressed");
    if (dropdownContent.classList.contains("open")){
        navBarItemMenu.style.color = red;
        navBarItemMenu.style.fill = red;
    }
    else {
        navBarItemMenu.style.color = gray;
        navBarItemMenu.style.fill = gray;
    }
});

// If dropdown menu is open it will close it if you click outside it.
document.body.addEventListener(eventToUseStart, event => {
    if (!dropdownContent.contains(event.target) && !navBarItemMenu.contains(event.target)) {
        dropdownContent.classList.remove("open");
        menuText.classList.remove("open");
        menuArrow.classList.remove("rotate");
        navBarItemMenu.classList.remove("pressed");
        navBarItemMenu.style.color = gray;
        navBarItemMenu.style.fill = gray;    
    }
});

//opens the sidebar
sidebarBtn.addEventListener(eventToUseEnd, event => {
    sidebarBtn.classList.toggle("change");
    if (sidebar.style.top !== "auto") {
        tl.to(sidebar, {duration: 0, visibility: "visible"});
        tl.to(sidebar, {duration: 0.35, top: "auto", ease: "power1.out"});
        sidebarDropdownContent.classList.remove("open");
        console.log("Auto")
    }
    else{
        tl.to(sidebar, {duration: 0.35, top: -220, ease: "power1.out"});
        tl.to(sidebar, {duration: 0, visibility: "hidden"});
    }
});

//Opens the menu dropdown menu
sidebarItemMenu.addEventListener(eventToUseEnd, event => {
    sidebarDropdownContent.classList.toggle("open");
    sidebarMenuArrow.classList.toggle("rotate");
    if (sidebarDropdownContent.classList.contains("open")){
        sidebarItemMenu.style.color = red;
        sidebarItemMenu.style.fill = red;
    }
    else {
        sidebarItemMenu.style.color = gray;
        sidebarItemMenu.style.fill = gray;
    }
});

//if any of the dropdownmenu items is clicked the sidebar will close
sidebarDropdownContentLink.forEach(item => {
    item.addEventListener(eventToUseEnd, event => {
        sidebar.classList.remove("open");

        sidebarBtn.classList.remove("change");
    })
});

// If sidebar is open and you click outside the sidebare it will close
document.body.addEventListener(eventToUseStart, event => {
    if (!sidebar.contains(event.target) && !sidebarBtn.contains(event.target)) {
        sidebarBtn.classList.remove("change");
        sidebarBtn.classList.remove("change");
        sidebarDropdownContent.classList.remove("open")
        tl.to(sidebar, {duration: 0.35, top: -220, ease: "power1.out"});
        tl.to(sidebar, {duration: 0, visibility: "hidden"});
    }
});

