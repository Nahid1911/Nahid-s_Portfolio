const mobileMenu = document.getElementById('mobile-menu');

function displayFunction() {
  const menuList = document.getElementById('nav-menu');
  if (menuList.classList.contains('menue-button-pressed') === false) {
    menuList.classList.add('menue-button-pressed'); }
  else { menuList.classList.remove('menue-button-pressed') }
  const menuIcon = document.getElementById('mobile-menu');
  const menuIconArrtibute = menuIcon.getAttribute('src');
  const image1 = 'media/Hamberger_menu_icon.svg';
  const image2 = 'media/Cancel-Menu-icon.svg';
const newSer = (menuIconArrtibute === image1) ? image2 : image1;
  menuIcon.setAttribute('src', newSer);
}
  mobileMenu.addEventListener('click', displayFunction);
