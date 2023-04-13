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

const projectBtn = document.querySelectorAll('.work-history .btn-all');
for (let i = 0; i < projectBtn.length; i += 1) {
  projectBtn[i].addEventListener('click', () => {
    const projects = [
      {
        projectName: 'Keeping track of hundreds of components',
        projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        projTechno: ['Ruby on Rails', 'CSS', 'JavaScript'],
        linkToLive: 'https://nahid1911.github.io',
        linkToSource: 'https://github.com/Nahid1911/Nahid-s_Portfolio',
      },
      {
        projectName: 'Keeping track of hundreds of components',
        projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        projTechno: ['JavaScript', 'CSS', 'Ruby on Rails'],
        linkToLive: 'https://nahid1911.github.io',
        linkToSource: 'https://github.com/Nahid1911/Nahid-s_Portfolio',
      },

      {
        projectName: 'Keeping track of hundreds of components',
        projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        projTechno: ['Ruby on Rails', 'CSS', 'JavaScript'],
        linkToLive: 'https://nahid1911.github.io',
        linkToSource: 'https://github.com/Nahid1911/Nahid-s_Portfolio',
      },

      {
        projectName: 'Keeping track of hundreds of components',
        projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        projTechno: ['Ruby on Rails', 'CSS', 'JavaScript'],
        linkToLive: 'https://nahid1911.github.io',
        linkToSource: 'https://github.com/Nahid1911/Nahid-s_Portfolio',
      },

      {
        projectName: 'Keeping track of hundreds of components',
        projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        projTechno: ['Ruby on Rails', 'CSS', 'JavaScript'],
        linkToLive: 'https://nahid1911.github.io',
        linkToSource: 'https://github.com/Nahid1911/Nahid-s_Portfolio',
      },

      {
        projectName: 'Keeping track of hundreds of components',
        projectDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
        projTechno: ['Ruby on Rails', 'CSS', 'JavaScript'],
        linkToLive: 'https://nahid1911.github.io',
        linkToSource: 'https://github.com/Nahid1911/Nahid-s_Portfolio',
      },
    ];

    const div1 = document.createElement('div');
    div1.id = 'mainContainerId';
    div1.className = 'mainContainer';
    div1.innerHTML = `
      <div id="mainContainerL2" class="mainContainerL2">
        <div id="children0" class="children0">
            <img id="children0Img" src="media/popup_Icon_mobile_Cancel.svg">
        </div><div id="children1" class="children1"></div>
        <div id="children2" class="children2">
            <h2>${projects[i].projectName}</h2>
            <ul id="ulChildren2Class" class="ulChildren2Class">
                <li id="liUlChildren2Class" class="liUlChildren2Class">${projects[i].projTechno[0]}</li>
                <li id="liUlChildren2Class" class="liUlChildren2Class">${projects[i].projTechno[1]}</li>
                <li id="liUlChildren2Class" class="liUlChildren2Class">${projects[i].projTechno[2]}</li>
            </ul>
        </div>
        <div id="children3" class="children3">
            <p id="pOfChild3" class="pOfChild3">${projects[i].projectDescription}</p>
        </div>
        <div id="children4" class="children4">
            <a href=${projects[i].linkToLive} target="_blank">
                <button id="btn-all-id" class="btn-all">See live
                    <img src="media/Popup_img_Mobile_btn.svg">
                </button>
            </a>
            <a href=${projects[i].linkToSource} target="_blank">
                <button id="btn-all-id2" class="btn-all">See source
                    <img src="media/Popup_img_mobile_btn_GitHub.svg">
                </button>  
            </a>
        </div>
      </div>`;
    document.body.appendChild(div1);

    // Mobile-Menu-Disapper

    const toggleBtn = document.getElementById('children0Img');
    const toggleContent = document.getElementById('mainContainerId');
    toggleBtn.addEventListener('click', () => {
      if (toggleContent) {
        toggleContent.parentNode.removeChild(toggleContent);
      }
    });
    div1.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
