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

const checkAndGenerate = (name, age) => {
    if(!validateInput(name, false, false) || !validateInput(age, false, false)){
        return false;
    }
    return generateText(name, age)
}

exports.validateInput = validateInput;
exports.generateText = generateText;
exports.checkAndGenerate = checkAndGenerate;