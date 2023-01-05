console.log('APP listen in index.html')

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let newDiv = document.createElement('div');
console.log(newDiv);
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let newP = document.createElement('p');

newDiv.appendChild(newP)
console.log(newDiv)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

let newDiv2 = document.createElement('div');

for (let index = 0; index < 6; index++) {
    let newP6 = document.createElement('p');
    newDiv2.appendChild(newP6);   
}
console.log(newDiv2);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

let newPDinamico = document.createElement('p');
let textDinamico = document.createTextNode('Soy dinámico!');

newPDinamico.appendChild(textDinamico);
console.log(newPDinamico); 
// también se puede añadir texto de la siguiente manera:
newPDinamico.innerHTML += ' Así se puede añadir texto';

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let newH2 = document.createElement('h2');
newH2.classList.add('fn-insert-here');
newH2.innerHTML = 'Wubba Lubba dub dub';
console.log(newH2);


// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let addLu = document.createElement('ul');

apps.forEach(app => {
    let addLi = document.createElement('li');
    addLu.appendChild(addLi);
    addLi.innerHTML = app
});

console.log(addLu);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const recoverClassFnRemove = document.querySelectorAll('.fn-remove-me');
recoverClassFnRemove.forEach(el => el.remove());

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
let recoverDiv = document.querySelectorAll('div');

for (let index = 0; index < 2; index++) {
    recoverDiv[index].insertAdjacentHTML('afterbegin', '<p>Voy en medio!</p>');
 }


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
let recoverClassInsert = document.querySelectorAll('div.fn-insert-here');
console.log(recoverClassInsert);
for (let index = 0; index < recoverClassInsert.length; index++) {
    recoverClassInsert[index].insertAdjacentHTML('afterbegin', '<p>Voy dentro</p>');
 };