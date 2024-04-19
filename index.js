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
    menuText.classList.add("open")
    menuArrow.classList.add("rotate");
});

navBarItemMenu.addEventListener("mouseleave", event => {
    dropdownContent.classList.remove("open");
    menuText.classList.remove("open")
    menuArrow.classList.remove("rotate");
});

menuText.addEventListener("click", event => {
    dropdownContent.classList.toggle("open");
    menuText.classList.toggle("open")
    menuArrow.classList.toggle("rotate");
});

navBarItem.forEach(item => {
    item.addEventListener("touchstart", event => {
        item.style.color = (red);
        setTimeout(() => {
            item.style.color = (gray);
        },300)
    });
});
sidebarItem.forEach(item => {
    item.addEventListener("touchstart", event => {
        item.style.color = (red);
        setTimeout(() => {
            item.style.color = (gray);
        },300)
    });
});

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
    menuText.classList.toggle("open")
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

document.body.addEventListener("touchstart", event => {
    // Check if the touch event target is not within the dropdown content
    if (!dropdownContent.contains(event.target) && !navBarItemMenu.contains(event.target)) {
        // Close the dropdown
        dropdownContent.classList.remove("open");
        menuText.classList.remove("open");
        menuArrow.classList.remove("rotate");
        navBarItemMenu.classList.remove("pressed");

        // Reset the styles
        navBarItemMenu.style.color = gray;
        navBarItemMenu.style.fill = gray;    
    }
});


// Activates menu drop down/ Sidebar events
const sidebar = document.querySelector(".sidebar")
const sidebarBtn = document.querySelector(".sidebar-button")

sidebarBtn.addEventListener("click", event => {
    sidebarBtn.classList.toggle("change");
    sidebar.classList.toggle("open")
});