import { renderNavbar } from './components/shared/navbar.js';
import { renderFooter } from './components/shared/footer.js';

// Renderizar navbar en todas las páginas
document.addEventListener("DOMContentLoaded", () => {
  renderNavbar("navbar-container");
  renderFooter("footer-container");
});

export function generarNoticia(param) {
  console.log('param main', param);
}