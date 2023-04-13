// for mobile menu appear and disappear
const mobileMenu = document.getElementById('mobile-menu');

function displayFunction() {
  const menuList = document.getElementById('nav-menu');
  if (menuList.classList.contains('menue-button-pressed') === false) {
    menuList.classList.add('menue-button-pressed');
  } else { menuList.classList.remove('menue-button-pressed'); }
  const menuIcon = document.getElementById('mobile-menu');
  const menuIconArrtibute = menuIcon.getAttribute('src');
  const image1 = 'media/Hamberger_menu_icon.svg';
  const image2 = 'media/Cancel-Menu-icon.svg';
  const newSer = (menuIconArrtibute === image1) ? image2 : image1;
  menuIcon.setAttribute('src', newSer);
}
mobileMenu.addEventListener('click', displayFunction);

// Mobile Menu disappear after clicking

const menuItemPortfolio = document.getElementById('portfolio-li');
const menuItemAbout = document.getElementById('about-li');
const menuItemContact = document.getElementById('contact-li');

function menuDisappear() {
  const menuList = document.getElementById('nav-menu');
  menuList.classList.remove('menue-button-pressed');
  document.getElementById('mobile-menu').setAttribute('src', 'media/Hamberger_menu_icon.svg');
}

menuItemPortfolio.addEventListener('click', menuDisappear);
menuItemAbout.addEventListener('click', menuDisappear);
menuItemContact.addEventListener('click', menuDisappear);

//  ----Mobile Popup Window ----

// let projects = {
// project1 {
//    projectName: 'Keeping track of hundreds of components',
//    projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`
//    projCoverImage: '', projTechno1: 'Ruby on Rails', projTechno2: 'CSS', projTechno3: 'JavaScript',
//    linkToLive: 'https://nahid1911.github.io', linkToSource: 'https://github.com/Nahid1911/Nahid-s_Portfolio'
// }
// project2 {
//    projectName: 'Keeping track of hundreds of components',
//    projectDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.`
//    projCoverImage: '', projTechno1: 'Ruby on Rails', projTechno2: 'CSS', projTechno3: 'JavaScript',
//    linkToLive: 'https://nahid1911.github.io', linkToSource: 'https://github.com/Nahid1911/Nahid-s_Portfolio'
// }
// }


const firstProjectBtn = document.getElementById('project-1');
const secondProjectBtn = document.getElementById('project-2');
const thirdProjectBtn = document.getElementById('project-3');
const fourthProjectBtn = document.getElementById('project-4');
const fifthProjectBtn = document.getElementById('project-5');
const sixthProjectBtn = document.getElementById('project-6');

function firstProPopUp() {
  const div1 = document.createElement('div');
  div1.id = 'mainContainerId';
  div1.className = 'mainContainer';
  const firstChildDiv1 = document.createElement('div');
  firstChildDiv1.id = 'mainContainerL2';
  firstChildDiv1.className = 'mainContainerL2';
  const children1OffirstChild = document.createElement('div');
  children1OffirstChild.id = 'children1';
  children1OffirstChild.className = 'children1';
  const children0OffirstChild = document.createElement('div');
  children0OffirstChild.id = 'children0';
  children0OffirstChild.className = 'children0';
  const closePopupImg = document.createElement('img');
  closePopupImg.id = 'children0Img';
  closePopupImg.src = 'media/popup_Icon_mobile_Cancel.svg';
  const children2OffirstChild = document.createElement('div');
  children2OffirstChild.id = 'children2';
  children2OffirstChild.className = 'children2';
  const h2Ofchildren2 = document.createElement('h2');
  h2Ofchildren2.innerText = 'Keeping track of hundreds of components';
  const ulChildren2 = document.createElement('ul');
  ulChildren2.id = 'ulChildren2Class';
  ulChildren2.className = 'ulChildren2Class';
  const li1UlChildren2 = document.createElement('li');
  li1UlChildren2.id = 'liUlChildren2Class';
  li1UlChildren2.id = 'liUlChildren2Class';
  li1UlChildren2.className = 'liUlChildren2Class';
  li1UlChildren2.innerText = 'Ruby on Rails';
  const li2UlChildren2 = document.createElement('li');
  li2UlChildren2.id = 'liUlChildren2Class';
  li2UlChildren2.className = 'liUlChildren2Class';
  li2UlChildren2.innerText = 'CSS';
  const li3UlChildren2 = document.createElement('li');
  li3UlChildren2.id = 'liUlChildren2Class';
  li3UlChildren2.className = 'liUlChildren2Class';
  li3UlChildren2.innerText = 'JavaScript';
  const children3OffirstChild = document.createElement('div');
  children3OffirstChild.id = 'children3';
  children3OffirstChild.className = 'children3';
  const pOfChildre3 = document.createElement('p');
  pOfChildre3.id = 'pOfChild3';
  pOfChildre3.className = 'pOfChild3';
  pOfChildre3.innerText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.';
  const children4OffirstChild = document.createElement('div');
  children4OffirstChild.id = 'children4';
  children4OffirstChild.className = 'children4';
  const anchor2 = document.createElement('a');
  anchor2.href = 'https://github.com/Nahid1911/Nahid-s_Portfolio';
  anchor2.target = '_blank';
  const btn1 = document.createElement('button');
  btn1.innerHTML = 'See live';
  btn1.id = 'btn-all-id';
  btn1.className = 'btn-all';
  const btn1Img = document.createElement('img');
  btn1Img.src = 'media/Popup_img_Mobile_btn.svg';
  const anchor1 = document.createElement('a');
  anchor1.href = 'https://nahid1911.github.io';
  anchor1.target = '_blank';
  const btn2 = document.createElement('button');
  btn2.innerHTML = 'See source';
  btn2.id = 'btn-all-id2';
  btn2.className = 'btn-all';
  const btn2Img = document.createElement('img');
  btn2Img.src = 'media/Popup_img_mobile_btn_GitHub.svg';
  ulChildren2.appendChild(li3UlChildren2);
  ulChildren2.appendChild(li2UlChildren2);
  ulChildren2.appendChild(li1UlChildren2);
  children2OffirstChild.appendChild(h2Ofchildren2);
  children2OffirstChild.appendChild(ulChildren2);
  btn1.appendChild(btn1Img);
  btn2.appendChild(btn2Img);
  anchor1.appendChild(btn1);
  anchor2.appendChild(btn2);
  children3OffirstChild.appendChild(pOfChildre3);
  children4OffirstChild.appendChild(anchor1);
  children4OffirstChild.appendChild(anchor2);
  children0OffirstChild.appendChild(closePopupImg);
  firstChildDiv1.appendChild(children0OffirstChild);
  firstChildDiv1.appendChild(children1OffirstChild);
  firstChildDiv1.appendChild(children2OffirstChild);
  firstChildDiv1.appendChild(children3OffirstChild);
  firstChildDiv1.appendChild(children4OffirstChild);
  div1.appendChild(firstChildDiv1);
  document.body.appendChild(div1);
  div1.classList.add('popup-open');

  // screen scroll to the popupwindow

  // Mobile-Menu-Disapper
  const toggleBtn = document.getElementById('children0Img');
  const toggleContent = document.getElementById('mainContainerId');
  toggleBtn.addEventListener('click', () => {
    if (toggleContent) {
      toggleContent.parentNode.removeChild(toggleContent);
    }
  });
  div1.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
firstProjectBtn.addEventListener('click', firstProPopUp);
secondProjectBtn.addEventListener('click', firstProPopUp);
thirdProjectBtn.addEventListener('click', firstProPopUp);
fourthProjectBtn.addEventListener('click', firstProPopUp);
fifthProjectBtn.addEventListener('click', firstProPopUp);
sixthProjectBtn.addEventListener('click', firstProPopUp);
