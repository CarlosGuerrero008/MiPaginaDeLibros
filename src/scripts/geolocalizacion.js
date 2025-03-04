

function obtenerUbicacion() {
    // Verifica si el navegador soporta geolocalización
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(mostrarPosicion, mostrarError);
    } else {
      document.getElementById('resultado').innerHTML = "La geolocalización no es soportada por este navegador.";
    }
  }
  
  function mostrarPosicion(position) {
    const latitud = position.coords.latitude;
    const longitud = position.coords.longitude;
    const precision = position.coords.accuracy;
    document.getElementById('resultado').innerHTML =
      `<strong>Latitud:</strong> ${latitud}<br>
       <strong>Longitud:</strong> ${longitud}<br>
       <strong>Precisión:</strong> ${precision} metros`;
  }
  
  function mostrarError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        document.getElementById('resultado').innerHTML = "El usuario denegó el permiso de geolocalización.";
        break;
      case error.POSITION_UNAVAILABLE:
        document.getElementById('resultado').innerHTML = "La información de la ubicación no está disponible.";
        break;
      case error.TIMEOUT:
        document.getElementById('resultado').innerHTML = "La solicitud de geolocalización ha caducado.";
        break;
      case error.UNKNOWN_ERROR:
        document.getElementById('resultado').innerHTML = "Se ha producido un error desconocido.";
        break;
    }
  }