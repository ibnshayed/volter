var hamburger = document.querySelector("#hamburger");
var menuOverlay = document.querySelector("#menu_overlay");

hamburger.addEventListener("click", function () {
    
    hamburger.classList.toggle("open")
    menuOverlay.classList.toggle("fade")

})