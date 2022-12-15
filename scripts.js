const index = prompt('What I have to do? Answers for exapmle: add, sub, mult or div');
const firstNumber = Number(prompt('Write first number, please'));
const secondNumber = Number(prompt('Write second number, please'));
const plusValue = firstNumber + secondNumber;
const minusValue = firstNumber - secondNumber;
const multiValue = firstNumber * secondNumber;
const divideValue = firstNumber / secondNumber;
    
    
switch (index) {
    case 'add':
        alert(''+firstNumber+'+'+secondNumber+'='+plusValue+'');
        break
    case 'sub':
        alert(''+firstNumber+'-'+secondNumber+'='+minusValue+'');
        break
    case 'mult':
        alert(''+firstNumber+'*'+secondNumber+'='+multiValue+'');
        break
    case 'div':
        alert(''+firstNumber+'/'+secondNumber+'='+divideValue+'');
        break
    default:
        alert('Mathematical operation does not exist');
}
