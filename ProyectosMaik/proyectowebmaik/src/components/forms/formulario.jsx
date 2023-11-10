import React, { useState } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function Formulario() {
  // Crea un estado para cada campo del formulario.
  const [detalle, setDetalle] = useState("");
  const [marca, setMarca] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");

  // Maneja el envío del formulario.
  const handleSubmit = (event) => {
    // Previene que el formulario se envíe por defecto.
    event.preventDefault();

    // Envía los datos del formulario a tu servidor.
    // Por ejemplo, puedes usar Axios para hacer una solicitud POST a tu servidor.
    axios.post("/envioform.php", {
      detalle,
      marca,
      precio,
      cantidad,
    }).then((response) => {
      // Si la respuesta es exitosa, muestra un mensaje de éxito.
      if (response.status === 200) {
        alert("El producto se agregó correctamente");
      } else {
        // Si la respuesta no es exitosa, muestra un mensaje de error.
        alert("Ocurrió un error al agregar el producto");
      }
    });
  };

  return (
    <div className="container m-5">
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Detalle</Label>
          <Input
            type="text"
            name="detalle"
            placeholder="Detalle"
            value={detalle}
            onChange={(event) => setDetalle(event.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Marca</Label>
          <Input
            type="text"
            name="marca"
            placeholder="Marca"
            value={marca}
            onChange={(event) => setMarca(event.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Precio</Label>
          <Input
            type="number"
            name="precio"
            placeholder="Precio"
            value={precio}
            onChange={(event) => setPrecio(event.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Cantidad</Label>
          <Input
            type="number"
            name="cantidad"
            placeholder="Cantidad"
            value={cantidad}
            onChange={(event) => setCantidad(event.target.value)}
          />
        </FormGroup>

        <Button type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default Formulario;
