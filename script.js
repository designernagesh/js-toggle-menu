let hamburger_icon = document.querySelector(".hamburger_icon");
let left_menu = document.querySelector(".left_menu");

hamburger_icon.addEventListener("click", ()=>{    
    left_menu.classList.toggle('active');
    hamburger_icon.classList.toggle('active');
})