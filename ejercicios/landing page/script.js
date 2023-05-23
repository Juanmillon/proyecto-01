function tomaUnaCarta() {
    // Obtener una carta aleatoria
    var cartas = [
        "ruta/the devil.jpg"  
    ];
    var cartaAleatoria = cartas[Math.floor(Math.random() * cartas.length)];
    
    // Crear un elemento de imagen y establecer la ruta de la carta seleccionada
    var imagenCarta = document.createElement("img");
    imagenCarta.src = cartaAleatoria;
    imagenCarta.alt = "Carta seleccionada";
    
    // Agregar la imagen de la carta al contenido principal
    var main = document.querySelector("main");
    main.appendChild(imagenCarta);
  }
  