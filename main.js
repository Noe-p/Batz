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
   function ouvrirImg(i){

      function nextImg(){
         if(i==image.length-2) {//si on est sur la derniere image
            i=1;//on retourne à la première
            image[image.length-2].classList.toggle('open');//on cache la derniere image
         }
         else
         {
            i++;
            image[i-1].classList.toggle('open');
         }
         image[i].classList.toggle('open');//on affiche la nouevlle image
      }
      function prevImg(){
         if(i==1){//si on est sur la premiere
            i=image.length-2;// on va sur la derniere
            image[1].classList.toggle('open');// on cache la nouvelle image
         }
         else {
            i--;
            image[i+1].classList.toggle('open');
         }
         image[i].classList.toggle('open');// on affiche la nouvelle image
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
