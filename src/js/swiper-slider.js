if (document.querySelector('.main-slider')) {
  let mainSlider = new Swiper('.main-slider__container', {
    pagination: {
      el: '.main-slider__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },

    keyboard: {
      enabled: true,
    },

    preloadImages: false,
    lazy: {
      loadOntransitionStart: true,
      loadPrevNext: true,
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,

    touchRatio: 2,
    speed: 800,
  });
  let mainSliderBullets = document.querySelectorAll('.main-slider__pagination .swiper-pagination-bullet');
  let mainSliderImages = document.querySelectorAll('.main-slider__image');

  for (let i = 0; i < mainSliderImages.length; i++) {
    if (i <= 1) {
      const mainSliderImage = mainSliderImages[i].querySelector('img').getAttribute('src');
      mainSliderBullets[i].style.backgroundImage = 'url(' + mainSliderImage + ')';
    } else {
      const mainSliderImage = mainSliderImages[i].querySelector('img').getAttribute('data-src');
      mainSliderBullets[i].style.backgroundImage = 'url(' + mainSliderImage + ')';
    }
  }
}

let productsSlider = new Swiper('.products-slider__container', {
  navigation: {
    nextEl: '.products-slider__next-btn',
    prevEl: '.products-slider__prev-btn',
  },
  pagination: {
    el: '.products-slider__info-pagination',
    type: 'fraction',
  },

  spaceBetween: 30,
});

let bransSlider = new Swiper('.brands-slider__container', {
  navigation: {
    nextEl: '.brands-slider__next-btn',
    prevEl: '.brands-slider__prev-btn',
  },
  slidesPerView: 5,
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 5,
    },
  },
});

let productSlider = new Swiper('.product-slider__container', {
  preloadImages: true,
  lazy: {
    loadOntransitionStart: true,
    loadPrevNext: true,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  speed: 600,

  keyboard: {
    enabled: true,
  },

  thumbs: {
    swiper: {
      el: '.mini-product-slider__container',
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
