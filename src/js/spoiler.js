let filterSpoilerButtons = document.querySelectorAll('.section-filter__header');
let manuPageSpoilers = document.querySelectorAll('.manu-page__header');
let filterTitle = document.querySelectorAll('.filter__title');

if (filterSpoilerButtons) {
  for (let i = 0; i < filterSpoilerButtons.length; i++) {
    filterSpoilerButtons[i].addEventListener('click', () => {
      filterSpoilerButtons[i].classList.toggle('active');
      let content = filterSpoilerButtons[i].nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }
}

if (manuPageSpoilers) {
  for (let i = 0; i < manuPageSpoilers.length; i++) {
    manuPageSpoilers[i].addEventListener('click', () => {
      manuPageSpoilers[i].classList.toggle('active');
      let content = manuPageSpoilers[i].nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }
}

if (filterTitle) {
  for (let i = 0; i < filterTitle.length; i++) {
    filterTitle[i].addEventListener('click', () => {
      filterTitle[i].classList.toggle('active');
      let content = filterTitle[i].nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  }
}
