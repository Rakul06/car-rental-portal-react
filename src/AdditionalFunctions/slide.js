    let slideIndex = 0;
    
    export function showSlides(){
        let i;
        let slides=document.getElementsByClassName("slides");
        let dots=document.getElementsByClassName("dot");
        if(slides.length>0 && dots.length>0){
            for (i=0;i<slides.length;i++) {
                slides[i].style.display="none";  
              }
              slideIndex++;
              if (slideIndex>slides.length) 
              {slideIndex = 1}    
              for (i=0;i<dots.length;i++){
                dots[i].className=dots[i].className.replace("activeDot","");
              }
              slides[slideIndex-1].style.display="block";  
              dots[slideIndex-1].className=dots[slideIndex-1].className+" activeDot";
              setTimeout(showSlides,6000); 
        }
        
      }

      let carSlidesIndex=0;
      export function carSlides(){
        let i;
        let slides=document.getElementsByClassName("image");
        if(slides.length>0 ){
            for (i=0;i<slides.length;i++) {
                slides[i].style.display="none";  
              }
              carSlidesIndex++;
              if (carSlidesIndex>slides.length) 
              {carSlidesIndex = 1}    
              slides[carSlidesIndex-1].style.display="block";  
              setTimeout(carSlides,2000); 
        }
        
      }
