import "./src/styles.css";
const {checkAndGenerate} = require("./src/util.js");
const form = document.querySelector("#formPerson");

const initApp = () => {
  //const button = document.querySelector("#addPerson");
  form.addEventListener("submit", e => {
    e.preventDefault();
    addUser();
  });
};

const addUser = () => {
  const inpName = document.querySelector('#inpName').value;
  const inpAge = document.querySelector('#inpAge').value;

  const newText = checkAndGenerate(inpName, inpAge);

  if(!newText) {
    const error = generateErrorMessage('Entradas inválidas', 'errorMessage');
    document.querySelector('#result').appendChild(error);
    setTimeout(() => {
      document.querySelector('#result').removeChild(error);
    }, 3000)
  }
  else {
    const newElement = createParragraph(newText);
    document.querySelector('#result').appendChild(newElement);
    form.reset();
  }
};

const generateErrorMessage = (message, className) => {
  const errorMessage = document.createElement('p')
  errorMessage.textContent = message;
  errorMessage.classList.add(className);
  errorMessage.id = 'errorMessage';

  return errorMessage;
}

const createParragraph = text => {
  const parragraph = document.createElement('p');
  parragraph.classList.add('item-name-list');
  parragraph.textContent = text;
  
  return parragraph;
}

initApp();