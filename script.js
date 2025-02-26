let html = document.getElementById('html');
let rightCard = document.getElementById('right');

function mobileCard(){
    rightCard.classList.toggle('card');
}

function burguerMenu(){
    
    let menu = document.getElementById('menu-sticky');
    console.log(menu);
    
    menu.classList.toggle('hidden');
}

function darkMode(){
    html.classList.toggle("dark-mode");
}