// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

const inputClick = document.querySelector('.click');
const btnToClick = document.createElement('button');
btnToClick.id = 'btnToClick';
btnToClick.innerText = "Listen first inputs";
inputClick.parentNode.insertBefore(btnToClick, inputClick.nextSibling);

console.log(btnToClick);

const bntClickExe = () => {
  console.log(inputClick.value);
};

btnToClick.addEventListener("click", bntClickExe);



// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const btnFocus = document.querySelector('.focus');

btnFocus.addEventListener('focus', () => console.log(btnFocus.value))

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const btnInput = document.querySelector('.value');

btnInput.addEventListener('input', () => console.log(btnInput.value))