var num1 = '';
var num2 = '';
var operator = '';
var result = '';

const display = document.getElementById('display');

const tambahAngka = (angka) => {
  if (operator === '') {
    num1 += angka;
    document.getElementById('display').value = num1;
  } else {
    num2 += angka;
    document.getElementById('display').value = num2;
  }
}

const tambahOperator = (op) => {
    operator= op;
    if (operator === '+') {
        document.getElementById('display').value = '+';
      } else if (operator === '-') {
        document.getElementById('display').value = '-';
      } else if (operator === '*') {
        document.getElementById('display').value = '*';
      } else {
        document.getElementById('display').value = '÷';
      }  
}

const hitung = () => {
  if (operator === '+') {
    result = parseFloat(num1) + parseFloat(num2);
  } else if (operator === '-') {
    result = parseFloat(num1) - parseFloat(num2);
  } else if (operator === '*') {
    result = parseFloat(num1) * parseFloat(num2);
  } else if (operator === '/') {
    result = parseFloat(num1) / parseFloat(num2);
  }
  document.getElementById('display').value = result;
  num1 = result;
  num2 = '';
  operator = '';
}

const clearScreen = () => {
  num1 = '';
  num2 = '';
  operator = '';
  result = '';
  document.getElementById('display').value = '';
}

// Keyboard support
document.addEventListener('keydown', (event) => {
  if (event.key >= '0' && event.key <= '9') {
    tambahAngka(event.key);
  } else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {
    tambahOperator(event.key);
  } else if (event.key === 'Enter') {
    hitung();
  } else if (event.key === 'Backspace') {
    clearScreen();
  }
});