
// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.getElementById("menu-toggle");
//     const navigationLinks = document.getElementById("navbar-sticky");
    
//     menuToggle.addEventListener("click", function () {
//         navigationLinks.classList.toggle("hidden"); 
//     });
// });
// // *********************************************************************************
// const cartToggle = document.getElementById("cart-toggle");
// const cartSidebar = document.getElementById("cart-sidebar");
// const closeCart = document.getElementById("close-cart");

// cartToggle.addEventListener("click", function (e) {
//     e.stopPropagation(); // Prevent the click event from reaching the document

//     // Toggle the cart sidebar
//     cartSidebar.classList.remove("translate-x-full");
// });

// document.addEventListener("click", function (e) {
//     // Close the cart sidebar when clicking outside of it
//     if (!cartSidebar.contains(e.target) && e.target !== cartToggle) {
//         cartSidebar.classList.add("translate-x-full");
//     }
// });

// closeCart.addEventListener("click", function (e) {
//     e.stopPropagation(); // Prevent the click event from reaching the document

//     // Close the cart sidebar
//     cartSidebar.classList.add("translate-x-full");
// });
function savePanier(panier){
    localStorage.setItem("panier",JSON.stringify(panier));
}
function getPanier(){
    let panier = localStorage.getItem("panier"); 
    if(panier==null){
        return [];
    }else{
       return JSON.parse(panier) 
    }
}
function addPanier(product){
    let panier = getPanier();
    let foundProduct = panier.find(p =>p.id==product.id);
    if(foundProduct != undefined){
        foundProduct.quantity++;
    }else{
        product.quantity =1;
        panier.push(product);
    }
    
    savePanier(panier);
}
function removeFromPanier(product){
    let panier = getPanier();
    panier=panier.filter(p=> p.id != product.id);
    savePanier(panier);
}
function changequantity(product,quantity){
    let panier = getPanier();
    let foundProduct = panier.find(p =>p.id==product.id);
    if(foundProduct != undefined){
        foundProduct.quantity +=quantity;
    if(foundProduct.quantity<=0){
        removeFromPanier(foundProduct);
    }else{
      savePanier(panier);
    }
    }  
}
function getNumberProduct(){
    let panier = getPanier();
    let number =0;
    for(let product of panier){
        number += product.quantity;
    }
    return number;
}
function getTotalPrice(){
    let panier = getPanier();
    let total =0;
    for(let product of panier){
        total += product.quantity  * product.price;
    }
    return total;

}
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


   