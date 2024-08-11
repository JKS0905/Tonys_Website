// Last update 24.05.24

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
const mainContentWraper = document.querySelector(".main-content-wrapper");

// Constants for scrollToTop function
const scrollToTop1 = document.getElementById("scrollToTop1");
const scrollToTop2 = document.getElementById("scrollToTop2");
const scrollToTop3 = document.getElementById("scrollToTop3");

// Select menu links
const scrollToLinks = document.querySelectorAll(".scrollTo");
const mainMenuLinks = document.querySelectorAll(".dropdown-content a");
const sidebarMenuLinks = document.querySelectorAll(".sidebar-dropdown-content a");

// Variables related to this scrollTo function
const header = document.querySelector('.header-main');
let lastScrollPosition = window.pageYOffset;
const deadZoneThreshold = 30; // Adjust the threshold as needed

// Variabels for sidebar button aimation.
const topLine = document.querySelector(".topLine");
const middleLine = document.querySelector(".middleLine");
const bottomLine = document.querySelector(".bottomLine");

// Scroll behavior for menu items, ScrollTo function
let offset = 50; // Adjust offset here for scroll

let isTouchscreen;

// attachScrollAndDisable Function. Can not close the sidebar when touchmove.
let isScrolling = false;

let isScrollToSection = false;

let isSidebarOpen;
let isSidebarVisible;
let isDropdownVisible;

// Variable to check for browser support for event types
const eventToUseEnd = "ontouchend" in document.documentElement ? "touchend" : "click";
const eventToUseStart = "ontouchstart" in document.documentElement ? "touchstart" : "click";

// gets CSS element
const sidebarTopValue = getComputedPropertyValue(sidebar, "top");

// JavaScript to detect touch devices
if ('ontouchstart' in window || navigator.maxTouchPoints) {
    document.documentElement.classList.add("touch-device");
    isTouchscreen = true;
}
else {
    document.documentElement.classList.add("not-touch-device");
    isTouchscreen = false;
}

window.addEventListener("DOMContentLoaded", event => {

    // Attach attachScrollAndDisable function to each link inside menu links
    scrollToLinks.forEach(link => {
        attachScrollAndDisable(link);
    });

    mainMenuLinks.forEach(link => {
        attachScrollAndDisable(link);
    });

    sidebarMenuLinks.forEach(link => {
        attachScrollAndDisable(link);
    });

    // For elemnts with maual scroll position.
    attachScrollAndDisable(scrollToTop1, 0);
    attachScrollAndDisable(scrollToTop2, 0);
    attachScrollAndDisable(scrollToTop3, 0);


    // Add scroll event listener only if screen width is less than or equal to 750px
    window.addEventListener('scroll', handleScroll, { passive: true });

    menuText.addEventListener("mouseenter", event => {
        menuText.style.color = red;
        menuArrow.style.fill = red;
        dropdownContent.classList.add("open");
        menuArrow.classList.add("rotate");
    }, { passive: true });

    navBarItemMenu.addEventListener("mouseleave", event => {
        menuText.style.color = gray;
        menuArrow.style.fill = gray;
        dropdownContent.classList.remove("open");
        menuText.classList.remove("open");
        menuArrow.classList.remove("rotate");
    }, { passive: true });

    // desktop dropdown menu
    menuText.addEventListener(eventToUseEnd, event => {
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
    }, { passive: true });

    // if it's a touchscreen it will close desktop drop down when you click an item
    if (isTouchscreen) {
        dropdownContentLink.forEach(item => {
            item.addEventListener(eventToUseEnd, event => {
                menuText.style.color = gray;
                menuArrow.style.fill = gray;
                menuArrow.classList.remove("open");
                menuText.classList.remove("open");
                menuArrow.classList.remove("rotate");
                dropdownContent.classList.remove("open");
            }, { passive: true });
        });
    }

    // if a sidebar item is clicked the sidebar will close
    sidebarItem.forEach(item => {
        item.addEventListener(eventToUseEnd, event => {
            !isScrolling ? closeSidebar() : null;
        }, { passive: true });
    });

    // opens the sidebar
    sidebarBtn.addEventListener(eventToUseEnd, event => {
        sidebar.style.top !== "auto" ? openSidebar() : closeSidebar();
    }, { passive: true });

    // Opens the dropdown menu
    sidebarItemMenu.addEventListener(eventToUseEnd, event => {
        sidebarDropdownContent.style.height !== "auto" ? openSidebarDropdown() : !isScrolling ? closeSidebarDropdown() : null;
    }, { passive: true });

    // if a dropdown item is clicked it will close the whole sidebar
    sidebarDropdownContent.addEventListener(eventToUseEnd, event => { !isScrolling ? closeSidebar() : null; }, { passive: true });

    document.body.addEventListener(eventToUseEnd, event => {
        isSidebarOpen = sidebarBtn.classList.contains("change");
        isSidebarVisible = sidebar.style.opacity == 1;
        isDropdownVisible = sidebarDropdownContent.style.opacity == 1;

        // If sidebar is open and you click outside the sidebar and the dropdown content
        if (isSidebarOpen && !sidebar.contains(event.target) && !sidebarBtn.contains(event.target) && !sidebarDropdownContent.contains(event.target)) {
            // If both sidebar and dropdown content are open
            if (isSidebarVisible && isDropdownVisible) {
                closeSidebar();

                // Makes sure the header closes if you scroll and don't click it
                setTimeout(() => {isSidebarOpen = false}, 300);
            }
            // If only sidebar is open
            else if (isSidebarVisible) {
                closeSidebar();

                // Makes sure the header closes if you scroll and don't click it
                setTimeout(() => {isSidebarOpen = false}, 300);
            }
        }
    }, { passive: true });
}, { passive: true }) // End of DOMContentLoaded

// Prevents the href to interfere while holding down on the link.
function disableHref(link) {
    link.addEventListener(eventToUseStart, event => {
        event.preventDefault();
    }, { passive: false });
}

function attachScrollAndDisable(link, manualScrollPosition = null) {
    disableHref(link);

    if (isTouchscreen) {

        let startY;

        link.addEventListener("touchstart", event => {
            startY = event.touches[0].clientY;
            isScrolling = false;
        }, { passive: true });

        link.addEventListener("touchmove", event => {
            const moveY = event.touches[0].clientY;
            if (Math.abs(moveY - startY) > 20) { // if moved more than 20 pixels vertically
                isScrolling = true;
            }
        }), { passive: true };

        link.addEventListener("touchend", event => {
            if (!isScrolling) {
                event.preventDefault(); 
                scrollToTarget(link, manualScrollPosition); 
            }
            // Delay the reset of isScrolling to make sure it's done after touchend.
            setTimeout(() => { isScrolling = false; }, 100);
        }, { passive: false });
    } else {
        // Mouse event handling (for desktop)
        link.addEventListener("click", event => {
            offset = -15;
            event.preventDefault();
            scrollToTarget(link, manualScrollPosition);
        }, { passive: false });
    }
}

// Scrolls to the target on screen

function scrollToTarget(link, manualScrollPosition = null) {
    if (manualScrollPosition !== null) {
        window.scrollTo(0, manualScrollPosition);
    } else {
        isScrollToSection = true;
        const targetId = link.getAttribute("href").substring(1); // Get target ID from link's href attribute
        const targetElement = document.getElementById(targetId);
        const scrollPosition = targetElement.offsetTop - offset;
        window.scrollTo(0, scrollPosition);

        // Prevents the header from closing when ScrollTo is activated
        function scrollListener(event) {
            if (window.pageYOffset === scrollPosition) {
                isScrollToSection = false;
                setTimeout(() => { window.removeEventListener("scroll", scrollListener); }, 100);
            }
        }
        window.addEventListener("scroll", scrollListener, { passive: true });
    }
}

function handleScroll() {
  const currentScrollPosition = window.pageYOffset;
  const scrollDifference = Math.abs(currentScrollPosition - lastScrollPosition);

  // if you scroll to negative value do nothing
  if (currentScrollPosition < 0) {
    return;
  }
  // Check if the scroll difference is greater than the dead zone threshold
  // if you scroll down close header and if you scroll up open header
  else if (!isSidebarOpen && !isScrollToSection && scrollDifference > deadZoneThreshold) {
    currentScrollPosition > lastScrollPosition ? closeHeader() : openHeader();
    lastScrollPosition = currentScrollPosition;
  }
}

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
    else {
        return elementValue;
    }
}

function openHeader() { gsap.to(header, { duration: 0.25, opacity: 1, top: 0, ease: "power1.out" }); }

function closeHeader() { gsap.to(header, { duration: 0.25, opacity: 0, top: -60, ease: "power1.out" }); }

function openSidebar() {
    mainContentWraper.classList.add("blurred");
    sidebarBtn.classList.add("change");
    tl.set(sidebar, { opacity: 1 });
    tl.to(sidebar, { duration: 0.25, top: "auto", ease: "power1.out" });
}

function closeSidebar() {
    sidebarItemMenu.style.color = gray;
    sidebarItemMenu.style.fill = gray;
    sidebarBtn.classList.remove("change")
    sidebarMenuArrow.classList.remove("rotate");
    tl.to(sidebarDropdownContent, { duration: 0.25, height: 0, ease: "power1.out"});
    tl.set(sidebarDropdownContent, { opacity: 0 });
    tl.to(sidebar, { duration: 0.25, top: parseFloat(sidebarTopValue), ease: "power1.out"}, "-=0.25");
    tl.set(sidebar, { opacity: 0 });
    mainContentWraper.classList.remove("blurred");
}

function openSidebarDropdown() {
    sidebarItemMenu.style.color = red;
    sidebarItemMenu.style.fill = red;
    sidebarMenuArrow.classList.add("rotate");
    tl.set(sidebarDropdownContent, { opacity: 1 });
    tl.to(sidebarDropdownContent, {duration: 0.25, height: "auto", ease: "power1.out"});
}

function closeSidebarDropdown() {
    sidebarItemMenu.style.color = gray;
    sidebarItemMenu.style.fill = gray;
    sidebarMenuArrow.classList.remove("rotate");
    tl.to(sidebarDropdownContent, { duration: 0.25, height: 0, ease: "power1.out" });
    tl.set(sidebarDropdownContent, { opacity: 0 });
}