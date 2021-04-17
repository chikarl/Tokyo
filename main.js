const bgImg = [{
   "bgimg":'./img/about.jpg',
   "text":'good life'
}]
const menu = document.querySelector(".bars");
const toggles = document.querySelector(".menu")


menu.addEventListener("click", function(){
    
    if (toggles.classList.contains('toggle')){
        toggles.classList.remove('toggle')
    }
    else{
        toggles.classList.add('toggle')
    }
})