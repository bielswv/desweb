
const colorButton = document.getElementById('colorButton');


function changeColor() {
  colorButton.classList.toggle('clicked');
}


colorButton.addEventListener('click', changeColor);
