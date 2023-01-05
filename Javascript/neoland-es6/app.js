// Iteración #1: Arrows

// Crea una arrow function que tenga dos parametros a y b y 
// que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
// por consola la suma de los dos parametros.

sumABFuntion = (a = 10, b = 5) => {
    let result = a + b;
    return console.log(result);
  }

// 1.1 Ejecuta esta función sin pasar ningún parametro
sumABFuntion();
// 1.2 Ejecuta esta función pasando un solo parametro
sumABFuntion(1);
// 1.3 Ejecuta esta función pasando dos parametros
sumABFuntion(5 , 23);

// Iteración #2: Destructuring

// 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
// del objeto usando object destructuring e imprimelas por consola. Cuidado, 
// no hace falta hacer destructuring del array, solo del objeto.

// const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}
let { title, gender, year} = game;
console.log(title);
console.log(gender);
console.log(year);


// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.

// const fruits = ['Banana', 'Strawberry', 'Orange'];
const fruits = ['Banana', 'Strawberry', 'Orange'];
let [fruit1, fruit2, fruit3 ] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

// 2.3 En base al siguiente javascript, usa destructuring para crear 2 
// variables igualandolo a la función e imprimiendolo por consola.

// const animalFunction = () => {
//     return {name: 'Bengal Tiger', race: 'Tiger'}
// };
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
let {name, race} = animalFunction();
console.log(name);
console.log(race);

// 2.4 En base al siguiente javascript, usa destructuring para crear las 
// variables name y itv con sus respectivos valores. Posteriormente crea 
// 3 variables usando igualmente el destructuring para cada uno de los años 
// y comprueba que todo esta bien imprimiendolo.

// const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
const car = {name1: 'Mazda 6', itv: [2015, 2011, 2020] }
let {name1, itv} = car;
console.log(name1);
console.log(itv);
let [year1, year2, year3] = itv;
console.log(year1);
console.log(year2);
console.log(year3);

// Iteración #3: Spread Operator

// 3.1 Dado el siguiente array, crea una copia usando spread operators.
// const pointsList = [32, 54, 21, 64, 75, 43]

const pointsList = [32, 54, 21, 64, 75, 43];
let pointsListCopy = [...pointsList];
console.log(pointsListCopy);

// 3.2 Dado el siguiente objeto, crea una copia usando spread operators.
// const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copyToy = { ...toy };
console.log(copyToy);
// 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
// spread operatos.
// const pointsList = [32, 54, 21, 64, 75, 43];
// const pointsLis2 = [54,87,99,65,32];
const pointsLis = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
const pointlisBoth = [...pointsLis,...pointsLis2];
console.log(pointlisBoth);

// 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
// con spread operators.
// const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
// const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const toyTwo = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const toyTogether = {...toyTwo,...toyUpdate};
console.log(toyTogether)

// 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
// pero sin editar el array inicial. De nuevo, usando spread operatos.
// const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorFinal = [...colors];
colorFinal.splice(1, 1);
console.log(colorFinal);
console.log(colors);


// Iteración #4: Map

// 4.1 Dado el siguiente array, devuelve un array con sus nombres 
// utilizando .map().
// const users = [
// 	{id: 1, name: 'Abel'},
// 	{id:2, name: 'Julia'},
// 	{id:3, name: 'Pedro'},
// 	{id:4, name: 'Amanda'}
// ];
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

let resultNames = users.map(person => ({Nombres: person.name}))
console.log(resultNames);

// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
// empiece por 'A'.
// const users = [
// 	{id: 1, name: 'Abel'},
// 	{id:2, name: 'Julia'},
// 	{id:3, name: 'Pedro'},
// 	{id:4, name: 'Amanda'}
// ];
const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
let resultUsers = users1.map(listName => 
listName.name
);


for (let index = 0; index < resultUsers.length; index++) {
   if (resultUsers[index].charAt(0) == "A") {
    resultUsers[index] = "Anacleto";
  }
}

console.log(resultUsers);


// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
// de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
// cuando el valor de la propiedad isVisited = true.
// const cities = [
// 	{isVisited:true, name: 'Tokyo'}, 
// 	{isVisited:false, name: 'Madagascar'},
// 	{isVisited:true, name: 'Amsterdam'}, 
// 	{isVisited:false, name: 'Seul'}
// ];

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

let citiesName = cities.map(listCities => { 
	let listCity = [];
    if (listCities.isVisited === true) {
		listCities.name += "Visitado";
		listCity.push(listCities.name);
	}
	else if (listCities.isVisited === false){
		listCities.name
		listCity.push(listCities.name);
	} 

	return listCity;
   });
  console.log(citiesName);



//   Iteración #5: Filter

// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

let over18 = ages.filter((mas18) => 
mas18 >= 18
);
console.log(over18);

// 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los valores que sean par.
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
let agesPair = ages1.filter((pair) => pair % 2 === 0);
console.log(agesPair);

// 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{name5: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name5: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name5: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name5: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
let lol = streamers.filter ((lolPlayer) => 
lolPlayer.gameMorePlayed.includes('League of Legends')
);
console.log(lol);


// 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
// usar la funcion .includes() para la comprobación.
const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
let lolNameU = streamers2.filter((lolPlayer) => lolPlayer.name.includes("u"));
console.log(lolNameU);


// 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
// .age sea mayor que 35.


let lol2 = streamers2.filter((legends)=> { 
	let lolStreamer = legends.gameMorePlayed
		.includes("League of Legends");
	if (lolStreamer && legends.age > 35) {
		legends.gameMorePlayed = legends.gameMorePlayed.toUpperCase();
	}
	return lolStreamer
});

console.log(lol2);


// 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// Revisar en la carpeta

// 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
// Revisar en la carpeta

// Iteración #6: Find
// 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];

let number100 = numbers.find(number => number === 100);
console.log(number100);

// 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];
let movie2010 = movies.find((movie) => (movie.date = 2010));
console.log(movie2010);

// 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
// 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
// spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
// lo queremos meter en la propiedad .mutation del objeto fusionado.
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

let nameCucus = aliens.find(cucus => cucus.name === 'Cucushumushu' );
console.log(nameCucus);
let namePoron = mutations.find(poron => poron.name === 'Porompompero');
console.log(namePoron);

let newAlien = { ...nameCucus, mutations: namePoron.name };
console.log(newAlien);

// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
// los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];
const notesTest = exams.reduce((accumulator, studens) => accumulator + studens.score, 0);
	console.log(notesTest);
// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
// alumnos que esten aprobados usando la función .reduce().
const notesTestApproved = exams.reduce((accumulator, studens) => studens.score >= 5 ? accumulator + studens.score : accumulator, 0);
	console.log(notesTestApproved);

// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

const notesTest1 = exams.reduce((accumulator, studens) => accumulator + studens.score, 0);
let notesTestAverage = notesTest1/exams.length;

	console.log(notesTestAverage);



	// Iteración #8: Bonus
	// 6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
	// .filter() y usa .reduce() para conseguir la media de sus .score. 
	// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
	// array .gender.
	
	const videogames = [
		{name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
		{name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
		{name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
		{name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
		{name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
		{name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
	]

	let genderRPG = videogames.filter(el => (
		el.genders.includes('RPG')));
	console.log(genderRPG); 

	const sumScore = genderRPG.reduce((accumulator, notas) => accumulator + notas.score, 0);
	let scoreAverage = sumScore/genderRPG.length;

	console.log(` RPG tiene un score de media de ${scoreAverage}`);