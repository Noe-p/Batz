//ANIMATION DE LA DIV NAVIGATION
let description = document.querySelector('.description');
let nav = document.querySelector('.navigation');

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

//OUVERTURE PHOTOS
function ouvrirImage(conteneur) {
   let image = document.querySelector(conteneur).children;

   function ouvrirImg(i) {

      image[i].onclick = function() {
         image[i].classList.toggle('ouvrirImg');
      };
   };
   //appel la fonction pour chaque image et les boutons
   for (var i = 0; i < image.length; i++) {
      ouvrirImg(i);
   }
}
//ouvrirImage(conteneur)
ouvrirImage('.etage1');
ouvrirImage('.etage0');
ouvrirImage('.etage2');
ouvrirImage('.jardin');
