document.getElementById('burger-menu').addEventListener('click', function() {
    const navbarSticky = document.getElementById('navbar-sticky');
    navbarSticky.classList.toggle('hidden');
    navbarSticky.classList.toggle('md:flex');
    navbarSticky.classList.toggle('transition-active'); 
});

// *
const cartToggle = document.getElementById("cart-toggle");
const cartSidebar = document.getElementById("cart-sidebar");
const closeCart = document.getElementById("close-cart");

cartToggle.addEventListener("click", function (e) {
    e.stopPropagation(); 
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