document.addEventListener('DOMContentLoaded', () => {
    const logoContainer = document.querySelector('.logo-container');
    const loginContainer = document.querySelector('.login-container');

    // Añadir la clase para iniciar la animación del logo después de un breve retraso (opcional)
    setTimeout(() => {
        logoContainer.classList.add('animate');

        // Mostrar el formulario de login después de que la animación del logo termine (ajusta el tiempo según la duración de tu animación)
        setTimeout(() => {
            loginContainer.classList.remove('hidden');
            loginContainer.classList.add('show');
        }, 1200); // 1000ms (duración de la animación) + un pequeño margen
    }, 200); // Un pequeño retraso inicial (opcional)
});