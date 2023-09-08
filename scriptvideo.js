function waitForElementToExist(selector, callback) {
  var interval = setInterval(function() {
    var element = $(selector);
    if (element.length) {
      clearInterval(interval);
      callback(element);
    }
  }, 100); // Comprobar cada 100 milisegundos
}

// Espera a que exista un elemento con la clase vtex-slider-layout-0-x-videoContainer
waitForElementToExist('.vtex-slider-layout-0-x-videoContainer', function(videoContainer) {
  // Tu código jQuery aquí

  // Crea una etiqueta 'a' y establece el atributo 'href' con una URL válida
  var link = $('<a></a>', {
    href: 'https://www.spirito.com.co/wellness-club', // Reemplaza con la URL de destino que deseas
  });

  // Obtén el elemento 'video' dentro del contenedor
  var videoElement = videoContainer.find('video');

  // Envuelve el elemento 'video' con la etiqueta 'a'
  videoElement.wrap(link);
});
