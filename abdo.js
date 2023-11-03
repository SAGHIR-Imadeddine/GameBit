
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
//-----------------------------------------------------------------------
const rightBtn = document.getElementById('right');
    const leftBtn = document.getElementById('left');
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function displaySlides() {
        slides.forEach(slide => {
            slide.style.transform = "translateX(-100%)";
            slide.style.opacity = 0;
            slide.style.display = "none"
        })

        slides[currentSlide].style.transform = "translateX(0)";
        slides[currentSlide].style.opacity = 1;
        slides[currentSlide].style.display = "block";
    }

    function nextSlide() {
        slides[currentSlide].style.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
        currentSlide = (currentSlide + 1) % slides.length;
        displaySlides();
    }

    function prevSlide() {
        slides[currentSlide].style.transition = "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        displaySlides();
    }

    displaySlides();

    let autoSlideInterval = setInterval(nextSlide, 3000);

    rightBtn.addEventListener("click", () => {
        clearInterval(autoSlideInterval);
        nextSlide();
        autoSlideInterval = setInterval(nextSlide, 3000);
    });

    leftBtn.addEventListener("click", () => {
        clearInterval(autoSlideInterval);
        prevSlide();
        autoSlideInterval = setInterval(nextSlide, 3000);
    });


   