'use strict';
$(document).ready(function() {

  let btnHamburguesa = document.getElementById("btn-hamburguesa");
  let menuNavegacion = document.getElementById("menu-navegacion");
  btnHamburguesa.addEventListener('click', function(){
    menuNavegacion.classList.toggle("viewMenu");
});
});
