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
    const nameIsEmpty = name.trim().length;
    const ageIsEmpty = age.trim().length;

    if(!validateInput(name, nameIsEmpty === 0, !isNaN(name)) || !validateInput(age, ageIsEmpty === 0, isNaN(age))){
        return false;
    }
    return generateText(name, age)
}

exports.validateInput = validateInput;
exports.generateText = generateText;
exports.checkAndGenerate = checkAndGenerate;