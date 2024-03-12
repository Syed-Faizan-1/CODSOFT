let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').innerText = '0';
}

function calculate() {
  let result;
  try {
    result = eval(displayValue);
    if (!isFinite(result)) {
      throw new Error('Invalid input');
    }
    document.getElementById('display').innerText = result;
  } catch (error) {
    document.getElementById('display').innerText = 'Error';
  }
  displayValue = '';
}
