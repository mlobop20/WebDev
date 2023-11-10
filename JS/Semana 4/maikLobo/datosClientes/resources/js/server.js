const express = require('express');
const mysql = require('mysql');

const app = express();

// Configurar la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'prueba'
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

// Ruta para agregar un cliente a la base de datos
app.post('/agregarCliente', (req, res) => {
  const { nombre, apellido, correo, fondos, mensualidad } = req.body;

  const INSERT_CLIENTE_QUERY = `INSERT INTO clientes (nombre, apellido, correo, fondos, mensualidad) VALUES (?, ?, ?, ?, ?)`;
  
  connection.query(INSERT_CLIENTE_QUERY, [nombre, apellido, correo, fondos, mensualidad], (error, results, fields) => {
    if (error) {
      res.status(500).send('Error al agregar el cliente a la base de datos');
      return;
    }
    res.status(200).send('Cliente agregado a la base de datos');
  });
});

// ... Otras rutas y lógica del servidor

const PORT = 443; // Puedes usar el puerto que desees

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});
