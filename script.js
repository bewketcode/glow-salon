document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    const bookBtn = document.getElementById("bookBtn");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("closeBtn");

    // MENU TOGGLE
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // OPEN MODAL
    bookBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // CLOSE MODAL
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // CLICK OUTSIDE CLOSE
    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // FORM SUBMIT
    document.getElementById("bookingForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Booking confirmed!");
        modal.style.display = "none";
    });

});