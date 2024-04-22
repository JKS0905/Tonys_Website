// Scroll behavior for menu items
document.addEventListener("DOMContentLoaded", event => {
    const offset = 70; // Adjust offset here for scroll
    const dropdownLinks = document.querySelectorAll(".dropdown-content a");

    function scrollToSection(link) {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1); // Get target ID from link's href attribute
            const scrollPosition = document.getElementById(targetId).offsetTop - offset;
            window.scrollTo(0, scrollPosition);
        });
    }

    // Attach scrollToSection function to each link inside dropdown-content
    dropdownLinks.forEach(link => {
        scrollToSection(link);
    });
});


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

menuText.addEventListener("mouseenter", event => {
    dropdownContent.classList.add("open");
    menuArrow.classList.add("rotate");
});

navBarItemMenu.addEventListener("mouseleave", event => {
    dropdownContent.classList.remove("open");
    menuText.classList.remove("open");
    menuArrow.classList.remove("rotate");
});

menuText.addEventListener("click", event => {
    dropdownContent.classList.toggle("open");
    menuText.classList.toggle("open");
    menuArrow.classList.toggle("rotate");
});


// Settings for touch devices

// when clicking an item it will pulse red color
navBarItem.forEach(item => {
    item.addEventListener("touchstart", event => {
        item.style.color = (red);
        setTimeout(() => {
            item.style.color = (gray);
        },300)
    });
});

// when clicking an item it will pulse red color
sidebarItem.forEach(item => {
    item.addEventListener("touchstart", event => {
        item.style.color = (red);
        setTimeout(() => {
            item.style.color = (gray);
        },300)
    });
});

// when clicking an item it will pulse red color
navBarItemMenuLink.forEach(item => {
    item.addEventListener("touchstart", event => {
        item.style.color = (red);
        setTimeout(() => {
            item.style.color = (gray);
        },300)
    });
});

// Menu dropdown event
menuText.addEventListener("touchstart", event => {
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

// If dropdown manu is open it will close it if you click outside it.
document.body.addEventListener("touchstart", event => {
    if (!dropdownContent.contains(event.target) && !navBarItemMenu.contains(event.target)) {
        dropdownContent.classList.remove("open");
        menuText.classList.remove("open");
        menuArrow.classList.remove("rotate");
        navBarItemMenu.classList.remove("pressed");
        navBarItemMenu.style.color = gray;
        navBarItemMenu.style.fill = gray;    
    }
});

// Activates menu drop down/ Sidebar events
const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".sidebar-button");
const sidebarItemMenu = document.querySelector(".sidebar-item-menu");
const sidebarDropdownContent = document.querySelector(".sidebar-dropdown-content");
const sidebarTextArrow = document.querySelector(".sidebar-text-arrow");
const sidebarMenuArrow = document.querySelector(".sidebar-text-arrow svg");



sidebarBtn.addEventListener("click", event => {
    sidebarBtn.classList.toggle("change");
    sidebar.classList.toggle("open");
    if (!sidebar.classList.contains("open")) {
        sidebarDropdownContent.classList.remove("open");
        console.log("remove")
    }
});

sidebarItemMenu.addEventListener("touchstart", event => {
    sidebarDropdownContent.classList.toggle("open");
    sidebarMenuArrow.classList.toggle("rotate");
    console.log("add")
});

// If sidebar is open and you click outside the sidebare it will close
document.body.addEventListener("click", event => {
    if (!sidebar.contains(event.target) && !sidebarBtn.contains(event.target)) {
        sidebarBtn.classList.remove("change");
        sidebar.classList.remove("open");
    }
});
