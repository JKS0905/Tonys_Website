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
        link.addEventListener("click", event => {
            scrollToTarget(link);
        })
    }
    function scrollToSection(link) {
        link.addEventListener("touchend", event => {
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

// desktop dropdown menu
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
    });
});
navBarItem.forEach(item => {
    item.addEventListener("touchend", event => {
        item.style.color = (gray);
    });
});

// when clicking an item it will pulse red color
sidebarItem.forEach(item => {
    item.addEventListener("touchstart", event => {
        item.style.color = (red);
    });
});
sidebarItem.forEach(item => {
    item.addEventListener("touchend", event => {
        item.style.color = (gray);
            item.style.color = (gray);
            sidebar.classList.remove("open");
            sidebarBtn.classList.remove("change");
            sidebarDropdownContent.classList.remove("open")
    });
});

// when clicking an item it will pulse red color
navBarItemMenuLink.forEach(item => {
    item.addEventListener("touchstart", event => {
        item.style.color = (red);
    });
});
navBarItemMenuLink.forEach(item => {
    item.addEventListener("touchend", event => {
        item.style.color = (gray);
    });
});

// Menu dropdown event
menuText.addEventListener("touchend", event => {
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
const sidebarDropdownContentLink = document.querySelectorAll(".sidebar-dropdown-content a");
const sidebarTextArrow = document.querySelector(".sidebar-text-arrow");
const sidebarMenuArrow = document.querySelector(".sidebar-text-arrow svg");


//opens the sidebar
sidebarBtn.addEventListener("click", event => {
    sidebarBtn.classList.toggle("change");
    sidebar.classList.toggle("open");
    if (!sidebar.classList.contains("open")) {
        sidebarDropdownContent.classList.remove("open");
    }
});

//Opens the menu dropdown menu
sidebarItemMenu.addEventListener("touchend", event => {
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
    item.addEventListener("touchend", event => {
        sidebar.classList.remove("open");

        sidebarBtn.classList.remove("change");
    })
});

// If sidebar is open and you click outside the sidebare it will close
document.body.addEventListener("touchstart", event => {
    if (!sidebar.contains(event.target) && !sidebarBtn.contains(event.target)) {
        sidebarBtn.classList.remove("change");
        sidebar.classList.remove("open");
        sidebarBtn.classList.remove("change");
        sidebarDropdownContent.classList.remove("open")
    }
});

