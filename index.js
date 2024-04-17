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
const menuArrow = document.querySelector(".menu-text-arrow svg")
const navBarItemMenu = document.querySelector(".nav-bar-item-menu");
const dropdownContent = document.querySelector(".dropdown-content");

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


// Activates menu drop down
const sidebar = document.querySelector(".sidebar")

sidebar.addEventListener("click", event => {
    sidebar.classList.toggle("change");
});

