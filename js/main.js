console.log('----andando main.js-----');

import { renderNavbar } from './components/shared/navbar.js';
import { renderFooter } from './components/shared/footer.js';


function detectTypeUser() {
  // console.log('ejecutando deteccion tipo usuario');

}

// Renderizar navbar en todas las páginas
document.addEventListener("DOMContentLoaded", () => {
  renderNavbar("navbar-container");
  renderFooter("footer-container");
});

detectTypeUser();
