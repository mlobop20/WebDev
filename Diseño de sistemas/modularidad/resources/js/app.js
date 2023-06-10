import { suma } from './operaciones.js';

const calcularBtn = document.getElementById('calcularBtn');

calcularBtn.addEventListener('click', () => {
  const inputA = document.getElementById('inputA');
  const inputB = document.getElementById('inputB');

  const numA = parseFloat(inputA.value);
  const numB = parseFloat(inputB.value);

  const resultado = suma(numA, numB);

  alert(`El resultado de la suma es: ${resultado}`);
});