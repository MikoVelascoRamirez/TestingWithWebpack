import './src/styles.css';
const { hello, stylingButton } = require('./src/util')

stylingButton('input[type=submit]', {fontColor: 'white', bgColor: 'blue'});
console.log(hello())