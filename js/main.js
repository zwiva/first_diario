import { renderNavbar } from './components/shared/navbar.js';
import { renderFooter } from './components/shared/footer.js';
import { verifyToken } from "./utils/helpers.js";

async function detectTypeUser() {
  
  verifyToken(import.meta.env.JWT_SECRET)

  if (!localStorage.getItem('auth-token')) {
    const data = localStorage.getItem('auth-token');

    // jwt.verify(data, import.meta.env.JWT_SECRET);
    // await verifyToken(data, import.meta.env.JWT_SECRET)
    console.log('no hay credenciales');

  } else {

    console.log('hay credenciales');
  }

}

// Renderizar navbar en todas las páginas
document.addEventListener("DOMContentLoaded", () => {
  renderNavbar("navbar-container");
  renderFooter("footer-container");
});

detectTypeUser();


export function generarNoticia(param) {
  console.log('param main', param);
}