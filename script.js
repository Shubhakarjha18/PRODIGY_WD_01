// script.js

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");

    // Function to change navbar background on scroll
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
