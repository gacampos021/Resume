colorDark={
    'htmlColor': 'antiquewhite', //same for font and incon
    'headerBG': 'rgba(22,22,22)',
    'mainBG': 'rgb(43, 43, 43)',
    'secBG': 'rgba(33,33,33)',
    'filterButton': 'rgba(255, 255, 255, 0.2)'
}

let html = document.getElementById('html');

function darkMode(){
    html.classList.toggle("dark-mode");
}