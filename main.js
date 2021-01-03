
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
function parallaxDescription(a, b, c, d, e){
   let conteneur = document.querySelector(a);
   let item1 = document.querySelector(b);
   let item2 = document.querySelector(c);
   window.addEventListener('scroll', () => {
      if(window.scrollY >= conteneur.offsetTop){
         let j=window.scrollY-description.offsetTop;
         item1.style["top"] = (j/d)+"%";
         item2.style["top"] = (j/e)+"%";
      }
   });
}

//parallaxDescription(item1, item2, conteneur, reglage1, reglage2)
parallaxDescription('.description', '.photosDescription', '.articleDescription', 500, 19.5);

//PARALLAX INVERSEE AGENCEMENT
function parallaxInversee(a, b, i, k){
   let item1 = document.querySelector(a)
   let item2 = document.querySelector(b);
   window.addEventListener('scroll', () => {
      if(window.scrollY >= agencement.offsetTop-screen.availHeight){
         let j=window.scrollY-agencement.offsetTop;
         item1.style["opacity"] = "1";
         item1.style["top"] =1-(j/i)+"%";
         item2.style["opacity"] = "1";
         item2.style["top"] =1-(j/k)+"%";
      }
   });
}

//parallaxInversee(intem1, intem2, vitesseItem1, vitesseItem2)
parallaxInversee('.articleAgencement', '.imagesAgencement',90, 30);
