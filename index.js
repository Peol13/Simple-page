

 const prev = document.querySelector("#button_prev");
 const next = document.querySelector("#button_next");
 

let slide = 0
changeSlide(slide)
prev.addEventListener("click", ()=>{
 if(slide === 0){
   return
 }
 slide --;
 changeSlide(slide)

});
next.addEventListener("click", ()=>{
 if(slide === 2){
   return
 }
 slide ++;
 changeSlide(slide)

});

function changeSlide(slide){
 const slideGroup = document.querySelector(".figure_group");
if(slide === 0){
 slideGroup.style.right = "0"

 prev.style.cursor = "default"
}
if (slide === 1 ){
  slideGroup.style.right = "1038px"

  prev.style.cursor = "pointer"
  next.style.cursor = "pointer"

} if (slide === 2){
 slideGroup.style.right = "2076px"

 next.style.cursor = "default"
}


}
