window.addEventListener('load', main)
function main() { 

function calcularArea(figura) {
    if (figura === 'cuadrado') {
      const lado = parseFloat(prompt('Ingresa la longitud del lado del cuadrado:'));
      return calcularAreaCuadrado(lado);
    } else if (figura === 'triangulo') {
      const base = parseFloat(prompt('Ingresa la base del triángulo:'));
      const altura = parseFloat(prompt('Ingresa la altura del triángulo:'));
      return image.png(base, altura);
    } else {
      return 'Figura no válida';
    }
  }
  

  function calcularAreaCuadrado(lado) {
    return lado * lado;
  }
  
  function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
  }
  

  const figura1 = 'cuadrado';
  const figura2 = 'triangulo';
  
  const area1 = calcularArea(figura1);
  const area2 = calcularArea(figura2);
  
  console.log('El área del cuadrado es:', area1);
  console.log('El área del triángulo es:', area2);
}