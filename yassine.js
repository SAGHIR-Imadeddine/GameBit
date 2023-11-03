document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navigationLinks = document.getElementById("navbar-sticky");
    
    menuToggle.addEventListener("click", function () {
        navigationLinks.classList.toggle("hidden"); 
    });
});
// *********************************************************************************
const cartToggle = document.getElementById("cart-toggle");
const cartSidebar = document.getElementById("cart-sidebar");
const closeCart = document.getElementById("close-cart");

cartToggle.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent the click event from reaching the document

    // Toggle the cart sidebar
    cartSidebar.classList.remove("translate-x-full");
});

document.addEventListener("click", function (e) {
    // Close the cart sidebar when clicking outside of it
    if (!cartSidebar.contains(e.target) && e.target !== cartToggle) {
        cartSidebar.classList.add("translate-x-full");
    }
});

closeCart.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent the click event from reaching the document

    // Close the cart sidebar
    cartSidebar.classList.add("translate-x-full");
});
