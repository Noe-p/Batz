const nav = document.querySelector('.navigation');
const agencement = document.querySelector('.agencement');




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
let conteneurDescription= document.querySelector('.conteneurDescription');

window.addEventListener('scroll', () =>{
   if(window.scrollY > conteneurDescription.offsetTop){
      nav.classList.add('position');
   }
   else{
      nav.classList.remove('position');
   }

});

//DESCRIPTION
let articleDescription= document.querySelector('.articleDescription');
let lastPhoto= document.querySelector('.lastPhoto');

window.addEventListener('scroll', () =>{
   if(window.scrollY > conteneurDescription.offsetTop){
      articleDescription.classList.add('position');
   }
   else{
      articleDescription.classList.remove('position');
   }

   if(window.scrollY > lastPhoto.offsetTop){
      articleDescription.classList.add('positionFin');
   }
   else{
      articleDescription.classList.remove('positionFin');
   }
});

//AGENCEMENT
let articleAgencement= document.querySelector('.articleAgencement');

window.addEventListener('scroll', () =>{
   if(window.scrollY > lastPhoto.offsetTop){
      articleAgencement.classList.add('animation');
   }
   else{
      articleAgencement.classList.remove('animation');
   }
});
