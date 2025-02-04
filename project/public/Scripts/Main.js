// Header Desktop
let $ = document
const toggleBtn = $.getElementById("btn-toggle")
const MenuMobile = $.getElementById("Mobile-menu")
toggleBtn.addEventListener("click" , function() {
    MenuMobile.classList.toggle("hidden")
})
let liItems = document.querySelectorAll(".li-items");

liItems.forEach(function(e) {
    e.addEventListener("click", function(es) {
        es.preventDefault();
        let liData = e.getAttribute("data-section");
        let sectionTop = document.querySelector(`.${liData}`).offsetTop;
        window.scrollTo ({
            top : sectionTop - 113,
            behavior  : "smooth"
        })
    });
});