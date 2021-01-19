//ANIMATION DE LA DIV NAVIGATION
let description = document.querySelector('.description');
let nav = document.querySelector('.navigation');
let agencement = document.querySelector('.agencement');
let carte = document.querySelector('.carte');
let photosDescription = document.querySelector('.photosDescription');
let test = document.querySelector(".iconesNav");
let test2 = document.querySelector(".test2");

//ANIMATION NAVIGATION
window.addEventListener('scroll', () => {
   if (window.scrollY > description.offsetTop) {
      nav.classList.add('position');
   } else {
      nav.classList.remove('position');
   }
});

function onmouseover(element){
   element.onmouseout = function(){
      test2.style.opacity = "0";
   };
   element.onmouseover = function(){
      test2.style.opacity = "1";
   };
}


//OUVERTURE PHOTOS
function ouvrirImage(conteneur) {
   let image = document.querySelector(conteneur).children;
   let conteneurImg = document.querySelector(conteneur);
   let firstDiv = document.createElement("div");
   let lastDiv = document.createElement("div");

   conteneurImg.insertAdjacentElement('afterbegin', firstDiv);
   conteneurImg.firstChild.classList.add('prev');
   let prev = document.querySelector('.prev');
   conteneurImg.insertAdjacentElement('beforeend', lastDiv);
   conteneurImg.lastChild.classList.add('next');
   let next = document.querySelector('.next');


   //Creer/supprime une nouvelle classe lors du clic
   //Caroussel permettant de switcher entre les images
   function ouvrirImg(i) {

      function nextImg() {
         if (i == 1) { //si on est sur la premiere
            i = image.length - 2; // on va sur la derniere
            image[1].classList.toggle('open'); // on cache la nouvelle image
         } else {
            i--;
            image[i + 1].classList.toggle('open');
         }
         image[i].classList.toggle('open'); // on affiche la nouvelle image
      }

      function prevImg() {
         if (i == image.length - 2) { //si on est sur la derniere image
            i = 1; //on retourne à la première
            image[image.length - 2].classList.toggle('open'); //on cache la derniere image
         } else {
            i++;
            image[i - 1].classList.toggle('open');
         }
         image[i].classList.toggle('open'); //on affiche la nouvelle image
      }

      image[i].onclick = function() {
         image[i].classList.toggle('open');
         prev.classList.toggle('open');
         next.classList.toggle('open');
         next.onclick = nextImg;
         prev.onclick = prevImg;
      };
   };

   //appel la fonction pour chaque image et les boutons
   for (var i = 0; i < image.length; i++) {
      ouvrirImg(i);
   }
}

//ouvrirImage(conteneur)
ouvrirImage('.mosaic');

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
