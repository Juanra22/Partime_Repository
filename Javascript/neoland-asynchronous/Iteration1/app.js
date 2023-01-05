// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
// hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
// console.log(). Para ello, es necesario que crees un .html y un .js.

const BASE_URL = "https://api.agify.io?name=michael";


const getItems = async () => {
    const res = await fetch(BASE_URL);
    const name = await res.json();
    console.log(name);
  };
  getItems()

//   2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
// fetch() para hacer una consulta a la api cuando se haga click en el botón, 
// pasando como parametro de la api, el valor del input.
// const baseUrl = 'https://api.nationalize.io';

// Codigo limpio que funciona
// const inputName = document.querySelector('input');
// const btn = document.querySelector('button');
// let result = [];
// let finalResult = [];

// const getName = async () => {
//   let inputNameValue = inputName.value;
//   const baseUrl = `https://api.nationalize.io/?name=${inputNameValue}`;
//   const res = await fetch(baseUrl);
//   const name = await res.json();
//   console.log(name)
//   result.push(name.country)
  
//   for (const el of result) {
//       const final = el.map(pais => 
//         finalResult.push(`El nombre ${inputNameValue} tiene un ${Math.round(pais.probability*100, 2)} porciento de ser de ${pais.country_id}`)
//          )
//   }
//   console.log(finalResult)
// };

// btn.addEventListener('click', getName);

// 2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
// a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
// EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
// de MZ.

const inputName = document.querySelector('input');
const btn = document.querySelector('button');
let result = [];
let finalResult = [];


const selectedBody = document.querySelector('body');
const getName = async () => {
  let inputNameValue = inputName.value;
  const baseUrl = `https://api.nationalize.io/?name=${inputNameValue}`;
  const res = await fetch(baseUrl);
  const name = await res.json();
  console.log(name) //primer ejercicio
//Segundo ejercicio
 
  result[0]= name.country
   for (const el of result) {
    const insertDiv = document.createElement('div') ;
    insertDiv.classList.add(`blockNumber${inputNameValue}`)
    
      const final = el.map(pais =>{
        
        insertDiv.innerHTML += `
        <button id="delete">"Delete this block ${inputNameValue}"</button>
        <p>El nombre ${inputNameValue} tiene un ${Math.round(pais.probability*100, 2)} porciento de ser de ${pais.country_id}</p>
        `
        selectedBody.appendChild(insertDiv);
        
      });
      
  }
  


  //ultimo ejercicio
  const btnDeletion = document.querySelectorAll(`[id*="delete"]`)
  for (const btn of btnDeletion) {
    btn.addEventListener('click', () => (
      btn.parentElement.remove()
      ))
  }
  
};

btn.addEventListener('click', getName);







// 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
// de los p que hayas insertado y que si el usuario hace click en este botón 
// eliminemos el parrafo asociado.