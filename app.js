const toggle = document.querySelector(".toggle");
const list = document.querySelector(".list");
toggle.addEventListener("click",function(){
    list.classList.toggle("show");
});