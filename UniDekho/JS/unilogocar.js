function initunilogoFunctionality() {
    let currentIndex = 0;
    let slides = document.querySelectorAll('.carousel-slide');
    let dots = document.querySelectorAll('.dot');
    console.log("current index is "+currentIndex);

    function showSlide(index) {
        console.log("hey");
        const totalSlides = slides.length;
        currentIndex = (index + totalSlides) % totalSlides; // Wrap around

        const track = document.querySelector('.carousel-track');
        const slideWidth = slides[0].clientWidth;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function currentSlide(n) {
        showSlide(n - 1);
    }

    document.addEventListener('DOMContentLoaded', function () {
        showSlide(currentIndex);
    });

    // Ensure dots are functional
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => currentSlide(index + 1));
    });
}
