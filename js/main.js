import { renderNavbar } from './components/shared/navbar.js';
import { renderFooter } from './components/shared/footer.js';
import { getAuthToken } from './utils/auth.js';

// function init() {
//   const token = getAuthToken();
//   console.log('token in main --->', token);
// }

// init();

// async function detectTypeUser() {
//   if (!localStorage.getItem('auth-token')) {
//     const data = localStorage.getItem('auth-token');
//     console.log('no hay credenciales');
//   } else {
//     console.log('hay credenciales');
//   }
// }
// detectTypeUser();

// Renderizar navbar en todas las páginas
document.addEventListener("DOMContentLoaded", () => {
  renderNavbar("navbar-container");
  renderFooter("footer-container");
});

export function generarNoticia(param) {
  console.log('param main', param);
}