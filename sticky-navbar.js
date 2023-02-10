const btnClose = document.querySelector('.btn__close');
const btnOpen = document.querySelector('.btn__open');
const header = document.querySelector('.header');

btnClose.addEventListener('click', () => {
  header.classList.remove('open-nav');
});

btnOpen.addEventListener('click', () => {
  header.classList.add('open-nav');
});
