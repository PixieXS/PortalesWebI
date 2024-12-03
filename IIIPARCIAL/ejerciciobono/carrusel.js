const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0; 


function updateCarousel() {
    carouselImages.style.transform = `translateX(${-currentIndex * 800}px)`;
}


nextBtn.addEventListener('click', () => {
    if (currentIndex === 2) {
        currentIndex = 0;
    } else {
        currentIndex = currentIndex + 1; 
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex === 0) {
        currentIndex = 2;
    } else {
        currentIndex = currentIndex - 1; 
    }
    updateCarousel();
});
