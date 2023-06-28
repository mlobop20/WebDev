window.addEventListener('load', main)
function main() { 
    // Modelo
    const modelo = {
        validarEdad: function (edad) {
          if (edad >= 0 && edad <= 10) {
            return "La persona es un niño/a (de 0 meses a 10 años).";
          } else if (edad >= 10 && edad <= 13) {
            return "La persona es un preadolescente (de 10 a 13 años).";
          } else if (edad >= 14 && edad <= 17) {
            return "La persona es un adolescente (de 14 a 17 años).";
          } else if (edad >= 18 && edad <= 25) {
            return "La persona es un joven adulto (de 18 a 25 años).";
          } else if (edad >= 26 && edad <= 64) {
            return "La persona es un adulto (de 26 a 64 años).";
          } else if (edad > 64) {
            return "La persona es un adulto mayor (mayor a 64 años).";
          } else {
            return "La persona tiene una edad inválida.";
          }
        }
      };
      
  
  // Vista
  const vista = {
    mostrarResultado: function (mensaje) {
      const resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerHTML = `
        <h3>Resultado:</h3>
        <p>${mensaje}</p>
      `;
    }
  };
  
  // Controlador
  const controller = {
    validarEdad: function (event) {
      event.preventDefault(); // Evita el envío del formulario por defecto
  
      const cedula = document.getElementById("cedula").value;
      const nombre = document.getElementById("nombre").value;
      const edad = parseInt(document.getElementById("edad").value);
  
      const mensaje = modelo.validarEdad(edad);
      vista.mostrarResultado(mensaje);
    },
  
    salir: function () {
      const resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerHTML = "";
    }
  };
  
  // Configuración de eventos
  document.getElementById("validar-btn").onclick = controller.validarEdad;
  document.getElementById("salir-btn").onclick = controller.salir;
  
}