// function to toggle menu items
function toggleMobileMenu() {
    var height = document.getElementById("nav-items");
    var toggleIcon = document.getElementById("toggleIcon");
    if (height.style.height == "332px") {
        // height toggled
        height.style.height = "0px";

        // icon toggled
        toggleIcon.classList.remove("fa-times");
        toggleIcon.classList.add("fa-bars");
    } else {
        // height toggled
        height.style.height = "332px";

        // icon toggled
        toggleIcon.classList.remove("fa-bars");
        toggleIcon.classList.add("fa-times");
    }
}