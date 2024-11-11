console.log('----andando main.js-----');

import { renderNavbar } from './components/shared/navbar.js';
import { renderFooter } from './components/shared/footer.js';
// import { decrypt } from './utils/decrypt.js';

// const pert = localStorage.getItem('fi4RQ0x')
// console.log('*** 0 pert main ****', JSON.parse(pert));

let role = '';

// async function detectTypeUser() {
//   const type = localStorage.getItem('fi4RQ0Y');
//   // console.log('type:', type);
  
//   if(type != null){
//     role = await decrypt(type, pert);
//   }
//   console.log('role inMain:', role);
// }

// Renderizar navbar en todas las páginas
document.addEventListener("DOMContentLoaded", () => {
  renderNavbar("navbar-container");
  renderFooter("footer-container");
});

// detectTypeUser();
