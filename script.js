// Función para iniciar sesión
function login() {
    const username = document.getElementById('username').value;
  
    // Crear cookies de sesión
    document.cookie = `${username}= ${generateRandomToken()}`;
    document.cookie = 'isLoggedIn=true';
  
    // Crear cookie persistente con expiración en un mes
    const expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1);
    document.cookie = `cesta de la compra=valor;expires=${expirationDate.toUTCString()}`;
  
    // Redirigir a la página de dashboard
    window.location.href = 'pagina.html';
  }
  
  // Función para cerrar sesión
  function logout() {
    // Cambiar el estado de isLoggedIn a falso
    document.cookie = 'isLoggedIn=false';
  
    // Redirigir a la página de inicio de sesión
    window.location.href = 'index.html';
  }
  
  // Función para generar un token aleatorio de 64 caracteres
  function generateRandomToken() {
    return [...Array(64)].map(() => Math.random().toString(36)[2]).join('');
  }
  
  // Comprobar si la cookie isLoggedIn tiene valor true al cargar la página de inicio de sesión
  window.onload = function () {
    const isLoggedIn = getCookie('isLoggedIn');
  
    if (isLoggedIn === 'true') {
      window.location.href = 'pagina.html';
    }
  };
  
  // Función para obtener el valor de una cookie
  function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return '';
  }
  