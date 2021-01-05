
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
function parallaxDescription(a, b, c){
   let conteneur = document.querySelector(a);
   let item = document.querySelector(b);
   window.addEventListener('scroll', () => {
      if((window.scrollY >= conteneur.offsetTop) && (window.scrollY < conteneur.offsetTop+conteneur.offsetHeight)){
         let j=window.scrollY-conteneur.offsetTop;
         item.style.marginTop = (j/c)+'%';
      }
      else {
         item.style.marginTop = "0%";
      }
   });
}

//parallaxDescription(conteneur, item, vitesseItem)
parallaxDescription('.description', '.articleDescription', 19.8);

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

//parallaxInversee(item1, item2, vitesseItem1, vitesseItem2)
parallaxInversee('.articleAgencement', '.imagesAgencement',90, 55);
