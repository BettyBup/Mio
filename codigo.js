// Obtener el formulario por su ID
const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
  // Detener el envío del formulario
  event.preventDefault();

  // Obtener los valores de los campos de usuario y contraseña
  const usuario = document.getElementById('usuario').value;
  const password = document.getElementById('password').value;

  // Validar que los campos no estén vacíos
  if (usuario.trim() === '' || password.trim() === '') {
    alert('Por favor, llene todos los campos');
    return;
  }

  // Validar el formato del usuario
  const usuarioRegex = /^[a-zA-Z0-9]+$/;
  if (!usuarioRegex.test(usuario)) {
    alert('El usuario debe contener sólo letras y números');
    return;
  }

  // Validar el formato de la contraseña
  // Al menos una letra mayúscula, una letra minúscula, un número y mínimo 8 caracteres
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    alert('La contraseña debe contener al menos: una letra mayúscula, una letra minúscula, un número y mínimo 8 caracteres');
    return;
  }

  // Si se llega a este punto, el formulario es válido
  alert('Formulario válido, enviando datos...');
  form.submit();
});
// Crear una constante para el botón de "Registrarse"
const registrarseBtn = document.getElementById('registrarse-btn');

// Agregar un evento de escucha de clic al botón de "Registrarse"
registrarseBtn.addEventListener('click', function() {
  // Redirigir al usuario a la página de registro
  window.location.href = "registro.html";
});