


function pageAnime(){
   var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener('mouseenter',function(){
   fixed.style.display = 'block'
})
elemC.addEventListener('mouseleave',function(){
    fixed.style.display = 'none'
 })


var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
e.addEventListener('mouseenter',function(){
   var image = e.getAttribute("data-image")
   fixed.style.backgroundImage = `url(${image})`
})

})
}
function swiper(){
   var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
    });
}
pageAnime();
swiper();