let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
    if (currentIndex === totalSlides - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    for (let slide of slides) {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

// Set interval for sliding
setInterval(nextSlide, 3000); // Change slide every 3 seconds
