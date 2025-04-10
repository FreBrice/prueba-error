document.addEventListener('DOMContentLoaded', () => {
  const logoContainer = document.querySelector('.logo-container');
  const loginContainer = document.querySelector('.login-container');

  // Animación inicial
  setTimeout(() => {
      logoContainer.classList.add('animate');
      setTimeout(() => {
          loginContainer.classList.remove('hidden');
          loginContainer.classList.add('show');
      }, 1200);
  }, 200);
});

function validateForm(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const passwordError = document.getElementById('passwordError');
  
  // Validar formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Por favor, ingrese un correo electrónico válido');
      return false;
  }
  
  // Validar longitud de la contraseña (6-10 caracteres)
  if (password.length < 6 || password.length > 10) {
      passwordError.textContent = 'La contraseña debe tener entre 6 y 10 caracteres';
      return false;
  }
  
  // Aquí puedes agregar la lógica de autenticación
  // Por ejemplo, una llamada a un servidor o verificación de credenciales
  
  // Si la autenticación es exitosa, redirigir a la landing page
  window.location.href = 'landing.html';
  return false;
}