@@include('wNumb.js');
@@include('nouiSlider.js');
@@include('popup.js');
@@include('touchscreen-manu.js');
@@include('swiper-slider.js');
@@include('webp.js');
@@include('dynamic-adaptive.js');
@@include('burger-manu.js');
@@include('range-slider.js');
@@include('spoiler.js');
@@include('tabs.js');

if (isMobile.any()) {
  let manuParents = document.querySelectorAll('.manu-page__item-parent');

  for (let i = 0; i < manuParents.length; i++) {
    const manuParent = manuParents[i];
    manuParent.addEventListener('click', (e) => {
      manuParent.classList.toggle('active');
      e.preventDefault();
    });
  }
} else {
  let manuParents = document.querySelectorAll('.manu-page__item-parent');

  for (let i = 0; i < manuParents.length; i++) {
    const manuParent = manuParents[i];
    manuParent.addEventListener('mouseenter', function (e) {
      manuParent.classList.add('active');
    });
    manuParent.addEventListener('mouseleave', function (e) {
      manuParent.classList.remove('active');
    });
  }
}

let searchSelectTitle = document.querySelector('.search-page__title');
let searchCategories = document.querySelector('.search-page__categories');

searchSelectTitle.addEventListener('click', () => {
  searchSelectTitle.classList.toggle('active');
  searchCategories.classList.toggle('open');
});

let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

for (let i = 0; i < checkboxCategories.length; i++) {
  const checkboxCategory = checkboxCategories[i];
  checkboxCategory.addEventListener('change', () => {
    checkboxCategory.classList.toggle('active');
    let checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox.active');

    if (checkboxActiveCategories.length > 0) {
      searchSelectTitle.classList.add('categories');
      let searchQuantity = document.querySelector('.search-page__text-quantity');
      searchQuantity.textContent = 'რაოდენობა: ' + checkboxActiveCategories.length;
    } else {
      searchSelectTitle.classList.remove('categories');
    }
  });
}

if (document.querySelector('.quantity')) {
  let minusBtn = document.querySelector('.quantity__minus-btn');
  let plusBtn = document.querySelector('.quantity__plus-btn');
  let quantityInput = document.querySelector('.quantity__input-inner');

  minusBtn.addEventListener('click', () => {
    quantityInput.value -= 1;
    chackValue();
  });
  plusBtn.addEventListener('click', () => {
    quantityInput.value = +quantityInput.value + 1;
    chackValue();
  });

  function chackValue() {
    if (quantityInput.value <= 1) {
      minusBtn.setAttribute('disabled', 'disabled');
    } else {
      minusBtn.removeAttribute('disabled', 'disabled');
    }
  }
}
