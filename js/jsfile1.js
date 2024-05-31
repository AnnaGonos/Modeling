const carouselItems = document.querySelectorAll('.carousel-item');
const prevControl = document.querySelector('.carousel-control.prev');
const nextControl = document.querySelector('.carousel-control.next');
let currentIndex = 0;

function showSlide(n) {
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselItems[n].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
}

prevControl.addEventListener('click', prevSlide);
nextControl.addEventListener('click', nextSlide);

setInterval(nextSlide, 5000);