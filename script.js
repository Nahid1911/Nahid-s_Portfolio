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

// let projectInfo1 = {
//    projectName: 'Keeping track of hundreds of components',
//    projectDescriptionP1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
//    projImage: '', projTechno1: 'Ruby on Rails', projTechno2: 'CSS', projTechno3: 'JavaScript',
//    linkToLive: 'https://nahid1911.github.io', linkToSource: 'https://github.com/Nahid1911/Nahid-s_Portfolio'
// }

let firstProjectBtn = document.getElementById('project-1');
let secondProjectBtn = document.getElementById('project-2');
let thirdProjectBtn = document.getElementById('project-3');
let fourthProjectBtn = document.getElementById('project-4');
let fifthProjectBtn = document.getElementById('project-5');
let sixthProjectBtn = document.getElementById('project-6');
function firstProPopUp() {
  let firstProCardPopup = document.getElementById('firstProCard');
  let div1 = document.createElement('div');
  div1.id = 'mainContainerId';
  div1.className = 'mainContainer';
  let firstChildDiv1 = document.createElement('div')
  firstChildDiv1.id = "mainContainerL2";
  firstChildDiv1.className = "mainContainerL2";
  let clildren1OffirstChild = document.createElement('div')
  clildren1OffirstChild.id = "clildren1";
  clildren1OffirstChild.className = "clildren1";
  let divInsideChil1 = document.createElement('div');
  divInsideChil1.id = 'close-popup';
  divInsideChil1.className = 'close-popup';
  clildren1OffirstChild.appendChild(divInsideChil1);
  let closePopupImg = document.createElement('img');
  closePopupImg.id = 'close-popupImg';
  closePopupImg.src = 'media/popup_Icon_mobile_Cancel.svg';
  divInsideChil1.appendChild(closePopupImg);
  let clildren2OffirstChild = document.createElement('div')
  clildren2OffirstChild.id = "clildren2";
  clildren2OffirstChild.className = "clildren2";
  clildren2OffirstChild.innerHTML = '<h2>Keeping track of hundreds of components</h2>'
  let ulChildren2 = document.createElement('ul');
  ulChildren2.id = "ulChildren2Class";
  ulChildren2.className = "ulChildren2Class";
  let li1UlChildren2 = document.createElement('li')
  li1UlChildren2.id = "liUlChildren2Class";
  li1UlChildren2.id = "liUlChildren2Class";
  li1UlChildren2.className = "liUlChildren2Class";
  li1UlChildren2.innerText = 'Ruby on Rails';
  let li2UlChildren2 = document.createElement('li')
  li2UlChildren2.id = "liUlChildren2Class";
  li2UlChildren2.className = "liUlChildren2Class";
  li2UlChildren2.innerText = 'CSS';
  let li3UlChildren2 = document.createElement('li')
  li3UlChildren2.id = "liUlChildren2Class";
  li3UlChildren2.className = "liUlChildren2Class";
  li3UlChildren2.innerText = 'JavaScript';
  let clildren3OffirstChild = document.createElement('div')
  clildren3OffirstChild.id = "clildren3";
  clildren3OffirstChild.className = "clildren3";
  clildren3OffirstChild.innerHTML = '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p> <br> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.</p>'
  let clildren4OffirstChild = document.createElement('div')
  clildren4OffirstChild.id = "clildren4";
  clildren4OffirstChild.className = "clildren4";
  let anchor2 = document.createElement('a');
  anchor2.href = 'https://github.com/Nahid1911/Nahid-s_Portfolio';
  anchor2.target ='_blank';
  let btn1 = document.createElement("button")
  btn1.innerHTML = "See live";
  btn1.id = "btn-all-id"
  btn1.className = "btn-all"
  let btn1Img = document.createElement('img');
  btn1Img.src= 'media/Popup_img_Mobile_btn.svg';

  // let btnAllOnClick = document.getElementById('btn-all-id')
  // btnAllOnClick.addEventListener('click', function(event){
  //   event.preventDefault();
  //   window.location.href ='https://nahid1911.github.io';
  // });

  let anchor1 = document.createElement('a');
  anchor1.href = 'https://nahid1911.github.io'
  anchor1.target ='_blank';
  let btn2 = document.createElement("button");
  btn2.innerHTML = "See source";
  btn2.id = "btn-all-id2";
  btn2.className = "btn-all";
  let btn2Img = document.createElement('img');
  btn2Img.src= 'media/Popup_img_mobile_btn_GitHub.svg';

  ulChildren2.appendChild(li3UlChildren2);
  ulChildren2.appendChild(li2UlChildren2);
  ulChildren2.appendChild(li1UlChildren2);
  clildren2OffirstChild.appendChild(ulChildren2)
  btn1.appendChild(btn1Img);
  btn2.appendChild(btn2Img);
  anchor1.appendChild(btn1)
  anchor2.appendChild(btn2)
  clildren4OffirstChild.appendChild(anchor1);
  clildren4OffirstChild.appendChild(anchor2);
  firstChildDiv1.appendChild(clildren1OffirstChild);
  firstChildDiv1.appendChild(clildren2OffirstChild);
  firstChildDiv1.appendChild(clildren3OffirstChild);
  firstChildDiv1.appendChild(clildren4OffirstChild);
  div1.appendChild(firstChildDiv1)
  document.body.appendChild(div1);
  div1.classList.add('popup-open');

// screen scroll to the popupwindow

// Mobile-Menu-Disapper
let toggleBtn = document.getElementById('close-popupImg');
let toggleContent = document.getElementById('mainContainerId');
    toggleBtn.addEventListener('click', function() {
      if(toggleContent){
    toggleContent.parentNode.removeChild(toggleContent);}
});
div1.scrollIntoView({behavior: "smooth", block: 'start'})
}
firstProjectBtn.addEventListener('click', firstProPopUp);
secondProjectBtn.addEventListener('click', firstProPopUp);
thirdProjectBtn.addEventListener('click', firstProPopUp);
fourthProjectBtn.addEventListener('click', firstProPopUp);
fifthProjectBtn.addEventListener('click', firstProPopUp);
sixthProjectBtn.addEventListener('click', firstProPopUp);

