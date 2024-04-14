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
    scrollToSection("italienskPizzaLink");
    scrollToSection("hvitPizzaLink");
    scrollToSection("calzoneLink");
    scrollToSection("pastaLink");
    scrollToSection("dressingLink");
    scrollToSection("drikkeLink");

});


// Activates menu drop down
function showSidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.classList.toggle("change");
}