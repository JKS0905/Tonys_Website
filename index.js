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
    const toggleBtn = document.querySelector(".nav-bar-item-menu");
    const dropdownContent = document.querySelector(".dropdown-content");
    const menuArrow = document.querySelector(".nav-bar-item-menu .menu-arrow")

    toggleBtn.addEventListener("mouseenter", event => {
        dropdownContent.classList.remove("close");
        dropdownContent.classList.add("open");
        menuArrow.classList.add("rotate");
    });
    toggleBtn.addEventListener("mouseleave", event => {
        dropdownContent.classList.remove("open");
        dropdownContent.classList.add("close");
        menuArrow.classList.remove("rotate");
    });
    toggleBtn.addEventListener("click", event => {
        dropdownContent.classList.toggle("open");
        menuArrow.classList.toggle("rotate");
    });


    // Activates menu drop down
    const sidebar = document.querySelector(".sidebar")

    sidebar.addEventListener("click", event => {
        sidebar.classList.toggle("change");
    });

