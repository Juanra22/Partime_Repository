// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement("ul");

for (const country of countries) {
  const li = document.createElement("li");
  li.textContent = ` ${country}`;
  ul.appendChild(li);
}

document.body.appendChild(ul);


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const removeClass =  document.querySelector('.fn-remove-me');
removeClass.remove();


// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const printHere = document.querySelector('div[data-function="printHere"]')
const ulTwo = document.createElement("ul");

printHere.appendChild(ulTwo);

for (const car of cars) {
  const li = document.createElement("li");
  li.textContent = `${car}`;
  ulTwo.appendChild(li);
}


// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
const body = document.querySelector("body");

for (const country of countries2) {
        const div = document.createElement('div');
    div.innerHTML = `<h4>${country.title}</h4>
    <img src="${country.imgUrl}">`;
    body.appendChild(div);
};



// // 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// // elemento de la lista.
const recoverDiv = document.querySelector('div');


recoverDiv.insertAdjacentHTML('beforebegin', `<button id="myButton">Delete last title & pic</button>`);

const deleteButton = document.querySelector("Button");

const deleteLastElement = (el)=> {
    const node = document.querySelectorAll(el);
    let last = node[node.length- 1];
    last.remove();
    
};

deleteButton.addEventListener("click",   () => {
	deleteLastElement("div")
});



// // 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// // elementos de las listas que elimine ese mismo elemento del html.


const selectedH4 = document.querySelectorAll("h4");
let i = 0;
for (const element of selectedH4) {
    
    element.insertAdjacentHTML('beforebegin', `<button id="removeButton${i}">Delete this block ${i}</button>`);
    i += 1;
};

;

const deleteParent = (el) => {

        let removeButton = document.querySelector(el)
        removeButton.parentNode.remove();

        
    };

    removeButton0.addEventListener("click", () => {
        deleteParent("#removeButton0")
    })
    removeButton1.addEventListener("click", () => {
        deleteParent("#removeButton1")
    })
    removeButton2.addEventListener("click", () => {
        deleteParent("#removeButton2")
    })
    removeButton3.addEventListener("click", () => {
        deleteParent("#removeButton3")
    })
    removeButton4.addEventListener("click", () => {
        deleteParent("#removeButton4")
    })
