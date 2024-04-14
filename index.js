// Scroll behavior for menu items
document.addEventListener("DOMContentLoaded", event => {
    const offset = 70; //adjust offset here for scroll

    function scrollToSection(linkId){
        const link = document.getElementById(linkId);

        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1); // Get target ID from link's href attribute
            const scrollPosition = document.getElementById(targetId).offsetTop - offset;
            window.scrollTo(0, scrollPosition);
        });
    }
    // dropdown-content href id
    scrollToSection("italienskPizzaLink1");
    scrollToSection("italienskPizzaLink2");
    scrollToSection("hvitPizzaLink");
    scrollToSection("calzoneLink");
    scrollToSection("pastaLink");
    //scrollToSection("dressingLink");
    //scrollToSection("drikkeLink");

});


// Activates menu drop down
function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("change");
}


//const menuDropdown = document.querySelector(".nav-bar-item-menu");
//const dropdownContent = document.querySelector(".dropdown-content");
//
//menuDropdown.addEventListener("mouseenter", () => {
//    dropdownContent.clast.add("show");
//    dropdownContent.classList.remove("hide"); // Remove the hide class if it was added previously
//});
//
//menuDropdown.addEventListener("mouseleave", () => {
//    dropdownContent.classList.remove("show");
//    dropdownContent.classList.add("hide"); // Apply the hide animation
//});
//
//dropdownContent.addEventListener("transitionend", () => {
//    if (!dropdownContent.classList.contains("show")) {
//        dropdownContent.classList.remove("hide"); // Remove the hide animation class when transition ends
//    }
//});
