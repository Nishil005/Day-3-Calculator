const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = '';
}
function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try {
        display.value = eval(parsePercentage(display.value));
    } catch (e) {
        display.value = 'Error';
    }
}

function parsePercentage(expression) {
    return expression.replace(/(\d+(\.\d+)?)%/g, (match, p1) => {
        return p1 / 100;
    });
}