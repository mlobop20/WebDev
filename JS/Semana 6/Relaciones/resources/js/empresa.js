class Empresa {
    constructor(nombre) {
      this.nombre = nombre;
      this.clientes = [];
    }
  
    agregarCliente(cliente) {
      this.clientes.push(cliente);
    }
  
    obtenerClientes() {
      return this.clientes;
    }
  }
  
  class Cliente {
    constructor(nombre) {
      this.nombre = nombre;
    }
  }
  
  // Crear instancias de Empresa
  const empresa1 = new Empresa("Empresa 1");
  const empresa2 = new Empresa("Empresa 2");
  const empresa3 = new Empresa("Empresa 3");
  
  // Crear instancias de Cliente
  const cliente1 = new Cliente("Cliente 1");
  const cliente2 = new Cliente("Cliente 2");
  const cliente3 = new Cliente("Cliente 3");
  
  // Agregar clientes a las empresas
  empresa1.agregarCliente(cliente1);
  empresa1.agregarCliente(cliente2);
  empresa2.agregarCliente(cliente3);
  
  // Obtener la lista de empresas
  const empresas = [empresa1, empresa2, empresa3];
  
  // Mostrar empresas en un <select>
  const selectEmpresas = document.getElementById("selectEmpresas");
  
  empresas.forEach((empresa) => {
    const option = document.createElement("option");
    option.value = empresa.nombre;
    option.text = empresa.nombre;
    selectEmpresas.appendChild(option);
  });
  
  // Obtener el elemento <tbody> de la tabla de clientes
  const tablaClientes = document.getElementById("tablaClientes").getElementsByTagName("tbody")[0];
  
  // Mostrar clientes en la tabla según la empresa seleccionada
  selectEmpresas.addEventListener("change", () => {
    const empresaSeleccionada = empresas.find((empresa) => empresa.nombre === selectEmpresas.value);
  
    // Limpiar la tabla antes de mostrar los clientes
    tablaClientes.innerHTML = "";
  
    empresaSeleccionada.obtenerClientes().forEach((cliente) => {
      const row = tablaClientes.insertRow();
      const cell = row.insertCell();
      cell.textContent = cliente.nombre;
    });
  });