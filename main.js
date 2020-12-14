const nav = document.querySelector('.navigation');
const description = document.querySelector('.description');
const agencement = document.querySelector('.agencement');
const equipements = document.querySelector('.equipements');
const photos= document.querySelector('.photos');
const carte= document.querySelector('.carte');
const tarif= document.querySelector('.tarifsInformations');



//ANIMATION LORS DE L'OUVERTURE D'UNE IMAGE

//Images agencement
const imageAgencement=".allImageAgencement div";
const allImageAgencement = document.querySelectorAll(imageAgencement);
let body = document.querySelector('.body');

allImageAgencement.forEach(imageAgencement => {
   imageAgencement.addEventListener('click', ouvertureImage);
});
let drapeau = 1;
function ouvertureImage() {
   if(drapeau==1){
      this.classList.add('ouvertureImage');
      body.classList.add('ouvertureImageb');
      drapeau=0;
   }
   else{
      this.classList.remove('ouvertureImage');
      body.classList.remove('ouvertureImageb');
      drapeau=1;
   }
}

//ANIMATION DE LA DIV NAVIGATION
let heightNav=nav.offsetHeight

window.addEventListener('scroll', () =>{
   if(window.scrollY > 420){
      nav.classList.add('position');
   }
   else{
      nav.classList.remove('position');
   }

   if(((window.scrollY > description.offsetTop-heightNav) && (window.scrollY < agencement.offsetTop-heightNav))
   || ((window.scrollY > equipements.offsetTop-heightNav) && (window.scrollY < photos.offsetTop-heightNav))
   || ((window.scrollY > carte.offsetTop-heightNav) && (window.scrollY < tarif.offsetTop-heightNav))){
      nav.classList.add('couleur');
   }
   else{
      nav.classList.remove('couleur');
   }

   if(window.scrollY > (carte.offsetTop+carte.offsetHeight-heightNav-60)){
      nav.classList.add('positionFin');
   }
   else{
      nav.classList.remove('positionFin');
   }
});

//CARROUSEL
$(document).ready(function() {

   var $carrousel = $('#photos'), // on cible le bloc du carrousel
      $img = $('#photos img'), // on cible les images contenues dans le carrousel
      indexImg = $img.length - 1, // on définit l'index du dernier élément
      i = 0, // on initialise un compteur
      $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)

   $img.css('display', 'none'); // on cache les images
   $currentImg.css('display', 'block'); // on affiche seulement l'image courante

   $carrousel.append('<img class="prev" src="photos/flecheGauche.png"/> <img class="next" src="photos/flecheDroite.png"/>');

   $('.next').click(function() { // image suivante

      i++; // on incrémente le compteur

      if (i <= indexImg) {
         $img.css('display', 'none'); // on cache les images
         $currentImg = $img.eq(i); // on définit la nouvelle image
         $currentImg.css('display', 'block'); // puis on l'affiche
      } else {
         i = indexImg;
      }

   });

   $('.prev').click(function() { // image précédente

      i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

      if (i >= 0) {
         $img.css('display', 'none');
         $currentImg = $img.eq(i);
         $currentImg.css('display', 'block');
      } else {
         i = 0;
      }

   });

});
