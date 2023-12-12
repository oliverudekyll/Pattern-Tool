document.addEventListener('DOMContentLoaded', function() {
  const textArea = document.getElementById('textArea');

  if (textArea) { 
    let i = 0;

    while (
      textArea.getBoundingClientRect().top >= 64 &&
      textArea.getBoundingClientRect().bottom <= window.innerHeight - 64
    ) {
      textArea.rows = i;
      i++;
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const textArea = document.getElementById('textArea');

  if (textArea) { 
    let i = 0;

    while (
      textArea.getBoundingClientRect().right <= window.innerWidth - 64 &&
      textArea.getBoundingClientRect().left >= 64
    ) {
      textArea.cols = i;
      i++;
    }
  }
});

const close = document.getElementById('close');
const menu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');

menu.addEventListener('click', function() {
  sidebar.classList.toggle("active");
})

close.addEventListener('click', function() {
  sidebar.classList.remove("active");
})

const btnOutline = document.getElementById('btnOutline');
const btnRegular = document.getElementById('btnRegular');
const textArea = document.getElementById('textArea');
const ornament = document.querySelectorAll(".ornament");

btnOutline.addEventListener("click", function(){
  textArea.classList.toggle("outline");
  ornament.forEach(element => element.classList.toggle("outline"));
}) 

btnRegular.addEventListener("click", function(){
  if (textArea.classList.contains("outline")) {
    textArea.classList.remove("outline");
    ornament.forEach(element => element.classList.remove("outline"));
  }
  else {}
}) 