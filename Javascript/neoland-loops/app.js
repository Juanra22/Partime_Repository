// **Iteración #1: Usa includes**

// Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .***includes*** de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
const camiseta = "Camiseta";
for (let index = 0; index < products.length; index++) {
    const element = products[index];
    if (element.includes(camiseta) == true) {;
        console.log(products[index]);
    }
};

// **Iteración #2: Condicionales avanzados**

// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** 
// a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
// for (const aprobados in alumns);
//  if (T1 == true && T2 == true || T1 == true && T3 == true || T2 == true && T3 == true) {;
//     alumns.isApproved = true;
//  } else {
//     alumns.isApproved = false;
// };
const newAlumns = [...alumns]

for (let index = 0; index < newAlumns.length; index++) {
    const element = newAlumns[index];
    if ( newAlumns[index].T1 == true &&  newAlumns[index].T2 == true ||  newAlumns[index].T1 == true &&  newAlumns[index].T3 == true ||  newAlumns[index].T2 == true &&  newAlumns[index].T3 == true) {;   
        newAlumns[index].isApproved = true;
         } else {
            newAlumns[index].isApproved = false;
} };
console.log(newAlumns);


// **teración #3: Probando For...of**

// Usa un bucle forof para recorrer todos los destinos del array. Imprime en un ***console.log*** sus valores.

// // Puedes usar este array:

// const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (const places of placesToTravel) {
    console.log(places);
}

// **Iteración #4: Probando For...in**

// Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

// const alien = {
//     name: 'Wormuck',
//     race: 'Cucusumusu',
//     planet: 'Eden',
//     weight: '259kg'
// }

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
    console.log(`Alien with property ${key} and value ${alien[key]}`);
    // if (alien.hasOwnProperty.call(alien, key)) {
    //     const element = alien[key];
        
    // }
}
// **Iteración #5: Probando For**

// Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.
// Imprime en un ***console log*** el array. Puedes usar este array:

// // const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, 
// {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

const placesToTravel0 = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]
const placesToTravel1 =[...placesToTravel0]
for (let index = 0; index < placesToTravel1.length; index++) {
    if (placesToTravel1[index].id === 11 || placesToTravel1[index].id === 40) {

        placesToTravel1.splice(index, index +1);
    };
}    console.log(placesToTravel1);


// **Iteración #6: Mixed For...of e includes**

// Usa un bucle **for...of** para recorrer todos los juguetes y elimina los que incluyan la palabra gato. 
// Recuerda que puedes usar la función ***.includes()*** 
// para comprobarlo.Puedes usar este array:

// const toys = [
//     {id: 5, name: 'Buzz MyYear'}, 
//     {id: 11, name: 'Action Woman'}, 
//     {id: 23, name: 'Barbie Man'}, 
//     {id: 40, name: 'El gato con Guantes'},
//     {id: 40, name: 'El gato felix'}
//     ]
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ];

    for (let index = 0; index < toys.length; index++) {
        
        if (toys[index].name.includes("gato")) {
            toys.splice(index, index +1);
        }
        
    }
    console.log(toys);

//     **Iteración #7: For...of avanzado**

// Usa un bucle **for...of** para recorrer todos los juguetes y añade los que tengan más de 15 ventas 
// (sellCount) al array popularToys. Imprimelo por consola.. Puedes usar este array:

// const popularToys = [];
// const toys = [
// 	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
// 	{id: 11, name: 'Action Woman', sellCount: 24}, 
// 	{id: 23, name: 'Barbie Man', sellCount: 15}, 
// 	{id: 40, name: 'El gato con Guantes', sellCount: 8},
// 	{id: 40, name: 'El gato felix', sellCount: 35}
// ]

const popularToys = [];
const toys1 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]
for (let popToy of toys1) {
    if (popToy['sellCount'] > 15) {
        popularToys.push(popToy);
    }
}
console.log(popularToys);
