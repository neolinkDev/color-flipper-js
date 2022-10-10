
// VARIABLES
const d = document;

// '$' variable del DOM
const colorList = ["green", "red", "rgba(133,122,200)", "yellow"],
      $btn    = d.getElementById("btn"),
      $color  = d.querySelector(".color");


// EVENTOS
$btn.addEventListener('click', () => {

  const randomNumber = getRandomNumber();
  
  d.body.style.backgroundColor = colorList[ randomNumber ];
  $color.textContent = colorList [ randomNumber ];

});


// FUNCIONES
// retorna de manera aleatoria los indices del arreglo de colores
const getRandomNumber = () => Math.floor( Math.random() * colorList.length );
