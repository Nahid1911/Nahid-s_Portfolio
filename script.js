let mobileMenu = document.getElementById("mobile-menu");
mobileMenu.addEventListener("click", displayFunction);


function displayFunction() {
let menuList = document.getElementById("nav-menu")
if(menuList.classList.contains("menue-button-pressed") === false){
    menuList.classList.add("menue-button-pressed")
}else {menuList.classList.remove("menue-button-pressed")}
let menuIcon = document.getElementById("mobile-menu");
let menuIconArrtibute = menuIcon.getAttribute("src");
let image1 = "media/Hamberger_menu_icon.svg"
let image2 = "media/Cancel-Menu-icon.svg"
let newSer = (menuIconArrtibute === image1) ? image2:image1;
menuIcon.setAttribute("src",newSer);
}
