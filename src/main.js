const r = {
  body: document.body,
  open: document.querySelector('.header-open-menu-button'),
  close: document.querySelector('.header-close-menu-button'),
  backdrop: document.querySelector('.menu-backdrop'),
  menu: document.querySelector('.menu-container'),
};

function toggleMenu() {
  r.backdrop.classList.toggle('menu-backdrop-hidden');
  r.menu.classList.toggle('menu-container-hidden');
  r.body.classList.toggle('no-scroll');
}

function onClick(e) {
  console.log(e.target);
  if (e.target.dataset.action === 'open') {
    toggleMenu();
  } else if (e.target.dataset.action === 'close') {
    toggleMenu();
  } else if (e.target === r.menu) {
    return;
  } else {
    toggleMenu();
  }
}

r.open.addEventListener('click', onClick);
r.backdrop.addEventListener('click', onClick);
