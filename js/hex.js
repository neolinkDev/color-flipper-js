
// VARIABLES
const d = document;

// '$' variable del DOM
const hexNumberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"],
      $btn          = d.getElementById("btn"),
      $color        = d.querySelector(".color");


// EVENTOS
$btn.addEventListener('click', () => {

  let hexColor = '#';

  // hacemos un ciclo de 6 movimientos que son el numero de caracteres de los colores hexadecimals
  for( let i = 0; i < 6; i++){

    hexColor += hexNumberList[ getRandomNumber() ];

  }
  // console.log(hexColor)

  d.body.style.backgroundColor = hexColor;
  $color.textContent = hexColor;
});

// FUNCIONES
// retorna de manera aleatoria los indices del arreglo `hexNumberList`
const getRandomNumber = () => Math.floor(Math.random() * hexNumberList.length);

