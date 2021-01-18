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

nav.onmouseout = function(){
   nav.classList.remove('open');
};
nav.onmouseover = function(){
   nav.classList.add('open');
};

//POSITION FIXED articleDescription
let articleDescription = document.querySelector('.articleDescription');

window.addEventListener('scroll', () => {
   if(window.scrollY > description.offsetTop) {
      articleDescription.classList.add('position');
   } else {
      articleDescription.classList.remove('position');
   }

   if(window.scrollY >= description.offsetTop + description.offsetHeight - articleDescription.offsetHeight - 60 ){
      articleDescription.classList.add('positionFin');
   } else {
      articleDescription.classList.remove('positionFin');
   }
});


//PARALLAX INVERSEE AGENCEMENT
function parallaxInversee(c, a, b, i, k) {
   let conteneur = document.querySelector(c);
   let item1 = document.querySelector(a)
   let item2 = document.querySelector(b);
   window.addEventListener('scroll', () => {
      if ((window.scrollY >= conteneur.offsetTop - screen.availHeight) && (window.scrollY < conteneur.offsetTop + conteneur.offsetHeight)) {
         let j = window.scrollY - conteneur.offsetTop;
         item1.style.marginTop = 1 - (j / i) + "%";
         item2.style.marginTop = 1 - (j / k) + "%";
      } else if (window.scrollY < conteneur.offsetTop) {
         item1.style.marginTop = "9%";
         item2.style.marginTop = "10%";
      }
   });
}

//parallaxInversee(conteneur, item1, item2, vitesseItem1, vitesseItem2)
parallaxInversee('.agencement', '.articleAgencement', '.imagesAgencement', 90, 80);

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
ouvrirImage('.imagesAgencement');
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

//animation(element a animer, hauteur de déclenchement)

if(smartphone()==true){
   animation('.photosDescription', 0.4);
   animation('.articleDescription', 0.4);
}
else{
   animation('.mosaic', 1.2);
}

//ANIMATION SMARTPHONE :
function smartphone() {
   if (navigator.userAgent.search('Mobile') == -1) {
      return false;
   } else {
      return true;
   }
}
