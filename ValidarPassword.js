function validarPassword() {
      // Obtener el valor del campo de contraseña
      var password = document.getElementById("password").value;

      // Verificar si la longitud de la contraseña es igual a 8
      if (password.length === 8) {
        alert("Contraseña válida");
      } else {
        alert("La contraseña debe tener exactamente 8 caracteres");
      }
    }
