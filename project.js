

var a = document.querySelector('h5')
var btn = document.querySelector('#add')
var flag = 0
var card = document.querySelector("#card")
var icon = document.querySelector("i")


//For like button


card.addEventListener("dblclick",function(){
    icon.style.transform = 'translate(-50%, 50%)scale(2)';
    icon.style.opacity = 0.8
    setTimeout(function(){
        icon.style.opacity = 0;
    },1000);
    setTimeout(function(){
        icon.style.transform = 'translate(-50%, 50%)scale(0)';
    },2000);
})

//For Add and remove

btn.addEventListener('click',function(){
    if (flag == 0) {
        a.innerHTML = 'Friends'
        a.style.color = 'Green'
        btn.innerHTML = 'Remove friend'
        flag = 1
    }
    else{
        a.innerHTML = 'Stranger'
        a.style.color = 'Red'
        btn.innerHTML = 'Add friend'
        flag = 0
    }
})

//Custom Curosor

var main = document.querySelector('body')
var crscr = document.querySelector(".cursor") 

main.addEventListener("mousemove",function(dets){
    crscr.style.left = dets.x+"px"
    crscr.style.top = dets.y+"px"
})
