$(document).ready(function() {
  // Este código se ejecutará cuando el DOM esté completamente cargado.

  // Obtén la referencia al elemento div con la clase "relative"
  var videoContainer = $('.vtex-slider-layout-0-x-videoContainer');

  // Crea una etiqueta 'a' y establece el atributo 'href' con una URL válida
  var link = $('<a></a>', {
    href: 'https://www.spirito.com.co/wellness-club', // Reemplaza con la URL de destino que deseas
  });

  // Obtén el elemento 'video' dentro del contenedor
  var videoElement = videoContainer.find('video');

  // Envuelve el elemento 'video' con la etiqueta 'a'
  videoElement.wrap(link);
});

