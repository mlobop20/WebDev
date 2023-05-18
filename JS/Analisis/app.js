// Definición de la función abstracta
function calcularArea(figura) {
    if (figura === 'cuadrado') {
      return calcularAreaCuadrado();
    } else if (figura === 'triangulo') {
      return calcularAreaTriangulo();
    } else {
      return 'Figura no válida';
    }
  }
  
  // Implementación de las funciones concretas
  function calcularAreaCuadrado() {
    const lado = 5; // Longitud del lado del cuadrado
    return lado * lado;
  }
  
  function calcularAreaTriangulo() {
    const base = 4; // Base del triángulo
    const altura = 3; // Altura del triángulo
    return (base * altura) / 2;
  }
  
  // Uso de la función abstracta
  const figura1 = 'cuadrado';
  const figura2 = 'triangulo';
  
  const area1 = calcularArea(figura1);
  const area2 = calcularArea(figura2);
  
  console.log('El área del cuadrado es:', area1);
  console.log('El área del triángulo es:', area2);