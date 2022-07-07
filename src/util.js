//Test code
const hello = function() { return 'Hola '}
const stylingButton = (element, {fontColor, bgColor}) => {
    document.querySelector(element).style.backgroundColor = bgColor;
    document.querySelector(element).style.color = fontColor;
}

// Project code
const validateInput = (text, isEmpty, isNumber) => {
    return !text || isEmpty || isNumber ? false : true;
}

const generateText = (name, age) => `${name} (${age} years old)`

exports.validateInput = validateInput;
exports.generateText = generateText;