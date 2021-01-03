
//BOX
let nav = document.querySelector('.navigation');

//POSITION
let agencement = document.querySelector('.agencement');


//ANIMATION DE LA DIV NAVIGATION
let description= document.querySelector('.description');

window.addEventListener('scroll', () =>{
   if(window.scrollY > description.offsetTop){
      nav.classList.add('position');
   }
   else{
      nav.classList.remove('position');
   }

   if(window.scrollY > agencement.offsetTop-nav.offsetHeight){
      nav.classList.add('couleur');
   }
   else{
      nav.classList.remove('couleur');
   }
});

//PARALLAX DESCRIPTION
function parallax(a, b, c, d, e){
   window.addEventListener('scroll', () => {
      if(window.scrollY >= a.offsetTop){
         let j=window.scrollY-description.offsetTop;
         b.style["top"] = (j/d)+"%";
         c.style["top"] = (j/e)+"%";
      }
   });
}

let conteneur = document.querySelector('.description');
let gauche = document.querySelector('.photosDescription');
let droite = document.querySelector('.articleDescription');


parallax(conteneur, gauche, droite, 500, 19.5);
