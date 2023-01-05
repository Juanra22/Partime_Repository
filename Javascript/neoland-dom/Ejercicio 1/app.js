console.log('APP listen in index.html')


// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const recoverButton = document.querySelector('.showme');
console.log(recoverButton);
// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const recoverPillado = document.querySelector('#pillado');
console.log(recoverPillado);
// 1.3 Usa querySelector para mostrar por consola todos los p
const recoverP = document.querySelectorAll('p');
console.log(recoverP);
// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const recoverPokemon = document.querySelectorAll('.pokemon');
console.log(recoverPokemon);
// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe".
const recoverAtributoDataFunction = document.querySelectorAll('[data-function="testMe"]');
console.log(recoverAtributoDataFunction);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe".
console.log(recoverAtributoDataFunction[2]);






