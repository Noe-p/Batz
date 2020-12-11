const nav = document.querySelector('.navigation');
const description = document.querySelector('.description');
const agencement = document.querySelector('.agencement');
const equipements = document.querySelector('.equipements');
const photos= document.querySelector('.photos');
const carte= document.querySelector('.carte');
const tarif= document.querySelector('.tarif');

let heightDescription = description.offsetTop-70;
let heightAgencement = agencement.offsetTop-70;
let heightEquipements = equipements.offsetTop-70;
let heightPhotos = photos.offsetTop-70;
let heightCarte = carte.offsetTop-70;
let heightTarif = tarif.offsetTop-70;


window.addEventListener('scroll', () =>{
   if(window.scrollY > 420){
      nav.classList.add('position')
   }
   else{
      nav.classList.remove('position');
   }
   if(((window.scrollY > heightDescription) && (window.scrollY < heightAgencement))
   || ((window.scrollY > heightEquipements) && (window.scrollY < heightPhotos))
   || ((window.scrollY > heightCarte) && (window.scrollY < heightTarif))){
      nav.classList.add('couleur')
   }
   else if((window.scrollY < heightDescription)
   || (window.scrollY > heightAgencement)
   || (window.scrollY > heightPhotos)
   || (window.scrollY > heightTarif)){
      nav.classList.remove('couleur');
   }
   if(window.scrollY > 4725){
      nav.classList.add('positionFin');
   }
   else{
      nav.classList.remove('positionFin');
   }
});
