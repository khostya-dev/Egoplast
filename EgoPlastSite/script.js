// Testimonial Slider
document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;
    const slides =document.querySelectorAll(".testimonial-slide");
    const dots = document.querySelectorAll(".dot");

    function showSlide(index) {
        slides.forEach((slide, i) => { 
slide.classList.remove("active");

dots[i].classList.remove("active");
    if (i === index) {
slide.classList.add("active");

dots[i].classList.add("active");
            }
        });
    }

    // Show the fisrt slide initially
    showSlide(currentIndex);

    //Automatically change slides every 3 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000);

    // Click on dots to change slides
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });
});
