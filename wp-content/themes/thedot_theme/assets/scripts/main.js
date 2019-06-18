// Global js
console.log('hello')

const $carousels = document.querySelectorAll('.js-carousel')

for(const $carousel of $carousels)
{
    const carousel = new Carousel($carousel)
}