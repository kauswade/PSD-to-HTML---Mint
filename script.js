function toggleMobileMenu() {
    var height = document.getElementById("nav-items");
    var toggleIcon = document.getElementById("toggleIcon");
    if (height.style.height == "332px") {
        height.style.height = "0px";
        console.log(toggleIcon.classList);
        toggleIcon.classList.remove("fa-times");
        toggleIcon.classList.add("fa-bars");
    } else {
        height.style.height = "332px";
        toggleIcon.classList.remove("fa-bars");
        toggleIcon.classList.add("fa-times");
    }
}