function calcularPrecio(precioBase, descuento) {
  // Verificar si los valores ingresados son inválidos
  if (precioBase <= 0 || descuento < 0 || descuento > 100) {
    return "Los valores ingresados son inválidos";
  }

  // Calcular el precio final con descuento
  let precioFinal;
  if (descuento === 0) {
    precioFinal = precioBase;
  } else {
    precioFinal = precioBase - (precioBase * descuento / 100);
  }

  // Retornar el precio final con descuento
  return "El precio final con descuento es $" + precioFinal;
}