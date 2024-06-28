// javascripts/products.js
import '../stylesheets/products.css'; // Adjust the path to your CSS file

// Your JS code for products.html
console.log('Products JS loaded');


function filterAnimation(){
    function toggleActiveClass(event) {
        var box = event.currentTarget.querySelector('.box');
        box.classList.toggle('active');
    }
    var category = document.querySelectorAll('.category');
    category.forEach(category => {
        category.addEventListener('click', toggleActiveClass);
    });
}
filterAnimation()

function homepageAnimation(){
    var hide = document.querySelector(".sorting h6")
    var show = document.querySelector("#show")
    var homeright = document.querySelector(".home-right")
    var filterparts = document.querySelector(".home-left")
    var shoesboxes = document.querySelectorAll(".shoes-boxes")
    var footer = document.querySelectorAll(".footer")
    const initialHeight = '40vw';
    const expandedHeight = '45vw';
    let isExpanded = false;
    hide.addEventListener("click",function(){
        homeleft.style.display = "none"
        show.style.display = "initial"
        hide.style.display = "none"
        homeright.style.width = "96vw"
        homeright.style.marginLeft = "-16vw"
        footer.style.top = "390vh"
        shoesboxes.forEach(div => {
            if(isExpanded) {
                div.style.height = initialHeight;
            } else {
                div.style.height = expandedHeight;                
            }      
        });
        isExpanded = !isExpanded;
    })
    show.addEventListener("click",function(){
        homeleft.style.display = "initial"
        show.style.display = "none"
        hide.style.display = "initial" 
        homeright.style.width = "80vw"
        homeright.style.left = "20vw"
        homeright.style.marginLeft = "0vw"
        shoesboxes.style.paddingLeft = "20vw"
    })
}
homepageAnimation()
function menubarAnimation(){
    var closeicon = document.querySelector(".close-icon")
    var menubar = document.querySelector("#menu-bar")
    var navpart4 = document.querySelector(".nav-part4")
    menubar.addEventListener("click",function(){
        navpart4.style.scale = 1
    })
    closeicon.addEventListener("click",function(){
        navpart4.style.scale = 0
})
}
menubarAnimation()

let tl2 = gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:".main",
        start:"top -22%",
        end:"top -500%",
        markers:true,
        scrub:true,
        pin:true
    }
})
tl2.to('.home-right',{
    y:-1500,
})

var filterparts = document.querySelector(".filter-parts")
var filteroption = document.querySelector(".filter-option")
var close = document.querySelector(".close")
filteroption.addEventListener("click",function(){
    filterparts.style.display = "initial"
})
close.addEventListener("click",function(){
    filterparts.style.display = "none"
})
