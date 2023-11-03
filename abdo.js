//   //slides and buttons left and right
//   const rightBtn = document.getElementById('right');
//   const leftBtn = document.getElementById('left')
//   const slides = document.querySelectorAll(".slide");
//   let currentSlide = 0;
  
//   function displaySlides(){
//     slides.forEach(slide =>{
//         slide.style.display = "none"
//     })
  
//     slides[currentSlide].style.display = "block";
//   }
  
//   displaySlides();
  
//   rightBtn.addEventListener("click", () => {
//     currentSlide = (currentSlide + 1) % slides.length;
//     displaySlides();
//   });
  
//   leftBtn.addEventListener("click", () => {
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     displaySlides();
//   });
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