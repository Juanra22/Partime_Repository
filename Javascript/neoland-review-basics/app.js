// **Iteración #1: Mix for e includes**

// Dado el siguiente javascript usa forof para recorrer el array de películas, 
// genera un nuevo array con las categorías de las películas e imprime por consola el array de categorías. 
// Ten en cuenta que las categorías no deberían repetirse. 
// Para filtrar las categorías puedes ayudarte de la función **.includes()**

// const movies = [
//     {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
//     {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
//     {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
//     {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
// ]
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
];
let movieCate =[];
for (let movie of movies) {
    for (let index = 0; index < movie.categories.length; index++) {
        if (!movieCate.includes(movie.categories[index])) {
        movieCate.push(movie.categories[index]);
    }}
}
console.log(movieCate);


// **Iteración #2: Mix Fors**

// Dado el siguiente javascript usa forof y forin para hacer la media del 
// volumen de todos los sonidos favoritos que tienen los usuarios.

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let counter = 0;
let favoriteSoundNatural = []; 
let finalResult;
let sonidosFavoritos = 0;

for (let user of users ) { 
     favoriteSoundNatural.push(user.favoritesSounds)
     for (let key in user.favoritesSounds) {
        sonidosFavoritos += user.favoritesSounds[key].volume;
        counter += 1;
     } 
   }   
   finalResult = sonidosFavoritos/counter;
console.log(`Avera is ${finalResult}`);     



// **Iteración #3: Mix Fors**

// Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. 
// Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

// Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender que 
// hay muchas formas de hacer las cosas en javascript.
const users1 = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let favoriteSoundNatural1 = []; 
let sonidosFavoritos1 = [];
let resultadoTypes = {};

for (let user of users1 ) { 
     favoriteSoundNatural1.push(user.favoritesSounds)
     for (let key in user.favoritesSounds) {
        console.log(key);
        sonidosFavoritos1.push(key);
     } 
   }

for (const el of sonidosFavoritos1) resultadoTypes[el] = resultadoTypes[el] + 1 || 1   

console.log(resultadoTypes);

// **Iteración #4: Métodos findArrayIndex**

// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos
//  y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

// Sugerencia de función:

const animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(arrayText, text) {
    
for (let i = 0; i < arrayText.length; i++) {
    if ((arrayText[i] == text && typeof(text)) == "string") {
        console.log(`La posición del array cuándo el valor de la longitud es igual al texto es ${i}, tomando 0 como la primera posición`);    
} }};

findArrayIndex(animales, "Salamandra");
findArrayIndex(animales, "alamandra");
findArrayIndex(animales, 56);






// **Iteración #5: Función rollDice**

// Crea una función llamada **rollDice()** que reciba como parametro el numero de caras que queramos que 
// tenga el dado que deberá silumar el codigo dentro de la función. Como hemos dicho, que la función use 
// el parametro para simular una tirada de dado y retornar el resultado. Si no se te ocurre como hacer 
// un numero aleatorio no te preocupes! busca información sobre la función de javascript **Math.random();**

function rollDice(caras) {
    console.log(Math.floor(Math.random()*(caras+1)));
    
}
rollDice(1);
rollDice(180);
