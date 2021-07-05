const burgerManu = document.querySelector('.manu__burger');
const manuBody = document.querySelector('.manu__body');
const asideburgerManu = document.querySelector('.manu-page__burger-manu');
const asideManuBody = document.querySelector('.manu-page__body');

burgerManu.addEventListener('click', () => {
  body.classList.toggle('lock');
  burgerManu.classList.toggle('open');
  manuBody.classList.toggle('open');
});

asideburgerManu.addEventListener('click', () => {
  asideburgerManu.classList.toggle('open');
  asideManuBody.classList.toggle('open');
});
