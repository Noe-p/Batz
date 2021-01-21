//ANIMATION DE LA DIV NAVIGATION
let description = document.querySelector('.description');
let nav = document.querySelector('.navigation');
let agencement = document.querySelector('.agencement');
let carte = document.querySelector('.carte');
let photosDescription = document.querySelector('.photosDescription');

//ANIMATION NAVIGATION
window.addEventListener('scroll', () => {
   if (window.scrollY > description.offsetTop) {
      nav.classList.add('position');
   } else {
      nav.classList.remove('position');
   }
});

//GALERIE PHOTOS
let jardin = document.querySelector('.jardin');
let etage0 = document.querySelector('.etage0');
let etage1 = document.querySelector('.etage1');
let etage2 = document.querySelector('.etage2');

let buttonJardin = document.querySelector('.buttonJardin');
let buttonEtage0 = document.querySelector('.buttonEtage0');
let buttonEtage1 = document.querySelector('.buttonEtage1');
let buttonEtage2 = document.querySelector('.buttonEtage2');

buttonJardin.onclick = function(){
   jardin.classList.add('open');
   etage0.classList.remove('open');
   etage1.classList.remove('open');
   etage2.classList.remove('open');
   buttonJardin.classList.add('open');
   buttonEtage0.classList.remove('open');
   buttonEtage1.classList.remove('open');
   buttonEtage2.classList.remove('open');
}
buttonEtage0.onclick = function(){
   jardin.classList.remove('open');
   etage0.classList.add('open');
   etage1.classList.remove('open');
   etage2.classList.remove('open');
   buttonJardin.classList.remove('open');
   buttonEtage0.classList.add('open');
   buttonEtage1.classList.remove('open');
   buttonEtage2.classList.remove('open');
}
buttonEtage1.onclick = function(){
   jardin.classList.remove('open');
   etage0.classList.remove('open');
   etage1.classList.add('open');
   etage2.classList.remove('open');
   buttonJardin.classList.remove('open');
   buttonEtage0.classList.remove('open');
   buttonEtage1.classList.add('open');
   buttonEtage2.classList.remove('open');
}
buttonEtage2.onclick = function(){
   jardin.classList.remove('open');
   etage0.classList.remove('open');
   etage1.classList.remove('open');
   etage2.classList.add('open');
   buttonJardin.classList.remove('open');
   buttonEtage0.classList.remove('open');
   buttonEtage1.classList.remove('open');
   buttonEtage2.classList.add('open');
}

//ANIMATION

//creer une classe lors du scroll
function animation(element, hauteur) {
   let item = document.querySelector(element);
   window.addEventListener('scroll', () => {
      if (window.scrollY > item.offsetTop - (screen.height / hauteur)) {
         item.classList.add('animation');
      }
   });
}



//ANIMATION SMARTPHONE :
function smartphone() {
   if (navigator.userAgent.search('Mobile') == -1) {
      return false;
   } else {
      return true;
   }
}
