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
let description_agencement= document.querySelector('.description_agencement');

window.addEventListener('scroll', () =>{
   if(window.scrollY > description_agencement.offsetTop){
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

//DESCRIPTION
let articleDescription= document.querySelector('.articleDescription');
let vueDuCiel= document.querySelector('.vueDuCiel');

window.addEventListener('scroll', () =>{
   if(window.scrollY > description_agencement.offsetTop){
      articleDescription.classList.add('position');
   }
   else{
      articleDescription.classList.remove('position');
   }

   if(window.scrollY > vueDuCiel.offsetTop){
      articleDescription.classList.add('positionFin');
   }
   else{
      articleDescription.classList.remove('positionFin');
   }
});
