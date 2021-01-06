//BOX
let nav = document.querySelector('.navigation');

//POSITION
let agencement = document.querySelector('.agencement');


//ANIMATION DE LA DIV NAVIGATION
let description = document.querySelector('.description');

window.addEventListener('scroll', () => {
   if (window.scrollY > description.offsetTop) {
      nav.classList.add('position');
   } else {
      nav.classList.remove('position');
   }

   if (window.scrollY > agencement.offsetTop - nav.offsetHeight) {
      nav.classList.add('couleur');
   } else {
      nav.classList.remove('couleur');
   }
});

//PARALLAX DESCRIPTION
function parallaxDescription(a, b, c) {
   let conteneur = document.querySelector(a);
   let item = document.querySelector(b);
   window.addEventListener('scroll', () => {
      if ((window.scrollY >= conteneur.offsetTop) && (window.scrollY < conteneur.offsetTop + conteneur.offsetHeight)) {
         let j = window.scrollY - conteneur.offsetTop;
         item.style.marginTop = (j / c) + '%';
      } else {
         item.style.marginTop = "0%";
      }
   });
}

//parallaxDescription(conteneur, item, vitesseItem)
parallaxDescription('.description', '.articleDescription', 19.8);

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
      } else {
         item1.style.marginTop = "0%";
         item2.style.marginTop = "-15%";
      }
   });
}

//parallaxInversee(conteneur, item1, item2, vitesseItem1, vitesseItem2)
parallaxInversee('.agencement', '.articleAgencement', '.imagesAgencement', 90, 55);

//OUVERTURE PHOTOS
function ouvrirImage(conteneur){
   let image = document.querySelector(conteneur).children;
   let drapeau = 0;

   //Ouvre/ferme l'image au clic
   function ouvrirImg(i){
      image[i].onclick = function() {
         if (drapeau == 0) {
            image[i].classList.add('open');
            let open = document.querySelector('.open');
            drapeau = 1;
         } else {
            image[i].classList.remove('open');
            drapeau = 0;
         }
      };

   };

   //appel la fonction pour chaque image
   for (var i = 0; i < image.length; i++) {
      ouvrirImg(i);
   }
}
//ouvrirImage(conteneur)
ouvrirImage('.imagesAgencement');
