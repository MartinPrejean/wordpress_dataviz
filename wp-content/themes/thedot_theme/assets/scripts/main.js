// Global js
console.log('hello')

const $carousels = document.querySelectorAll('.js-carousel')

for(const $carousel of $carousels)
{
    const carousel = new Carousel($carousel)
}

var glide = new Glide('#intro', {
    type: 'carousel',
    perView: 4,
    focusAt: 'center',
    breakpoints: {
      800: {
        perView: 2
      },
      480: {
        perView: 1
      }
    }
  })
  
  glide.mount()