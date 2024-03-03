var arr = [
   { dp : "https://media.istockphoto.com/id/543088760/photo/happy-late-teen-girl-student-thinking-while-holding-a-book.jpg?s=612x612&w=0&k=20&c=XKuP2kPqIpmgt9tx9MSze-jtP9OT3hBUbKcZYwuqET8="
,story :"https://media.istockphoto.com/id/846730696/photo/portrait-teenager.jpg?s=612x612&w=0&k=20&c=6d8f-zZySNoqNYq2DpJP6bCHd7eyEuKj7T6M0O_RhGo="},
{ dp : "https://media.istockphoto.com/id/1134068203/photo/glowing-face-of-beautiful-girl.jpg?s=612x612&w=0&k=20&c=mKR9jMPgzSJ3Rhpkk_avTMW4eZ12iGLVAqq38Ch9mTo="
,story :"https://media.istockphoto.com/id/1352606416/photo/young-woman-working-at-home-stock-photo.jpg?s=612x612&w=0&k=20&c=uKfBCoTeP54nA8KOzXDLIyoU31nZ4a4UreFE4p_x_3A="},
{ dp : "https://media.istockphoto.com/id/939443944/photo/indian-girl-listening-to-music-streaming-with-headphones-from-smartphone-in-summer-on-a-meadow.jpg?s=612x612&w=0&k=20&c=UUDYD1BL1JKM7qnvr5ANSkjS4TTvfnDvbvy7eCHFQA0="
,story :"https://media.istockphoto.com/id/1353377276/photo/young-indian-woman-on-yellow-copy-space-background-stock-photo.jpg?s=612x612&w=0&k=20&c=24Rd1zAtWi7Ci_1Rpy3QzqK4E2cbNZbFVAlJ530ycwc="},
{ dp : "https://media.istockphoto.com/id/1163467378/photo/a-portrait-of-young-healthy-asian-woman-with-smiling-closeup-face-with-clean-skin.jpg?s=612x612&w=0&k=20&c=QDnic6KVuUfB-DdDJ7GYhAOB4bLbGulw1KKb3LN5ETE="
,story :"https://media.istockphoto.com/id/944588692/photo/attractive-indian-young-women-portrait-with-indian-traditional-jewelry.jpg?s=612x612&w=0&k=20&c=mYzy7QnaJmQodnRt2Y8RTsNpxqHX99Xrd16fwWAsH9k="},
]
document.querySelector('#stories')
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt=""> </div>`
})

stories.innerHTML = clutter

stories.addEventListener("click",function(dets){
      document.querySelector("#full-scrn").style.display = 
      "block"
      document.querySelector("#full-scrn").style.backgroundImage = 
      `url(${arr[dets.target.id].story})`
      setTimeout(function(){
        document.querySelector("#full-scrn").style.display = "none"
      },1000)
})