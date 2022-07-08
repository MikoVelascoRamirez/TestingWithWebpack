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

  if(!newText) console.log('Nel');
  else {
    const newElement = createParragraph(newText);
    document.querySelector('#result').appendChild(newElement);
    form.reset();
  }
};

const createParragraph = text => {
  const parragraph = document.createElement('p');
  parragraph.classList.add('item-name-list');
  parragraph.textContent = text;
  
  return parragraph;
}

initApp();