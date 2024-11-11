console.log('andando el login.js');

import { login, logout } from './../../../utils/auth';
import { fetchProtectedData } from './../../../utils/protected';

document.getElementById('btnlogin').addEventListener('click', async () => {
  console.log('NUUUUUEVO');
  
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
    const success = await login(username, password);

    if (success) {
        // alert('Autenticación exitosa');
        window.location.href = "./index.html" // a todo evento redirige
    } else {
        alert('Credenciales incorrectas');
    }
});

// document.getElementById('fetchDataButton').addEventListener('click', async () => {
//     const data = await fetchProtectedData();
//     if (data) {
//         alert(`Datos protegidos: ${JSON.stringify(data)}`);
//     }
// });

// document.getElementById('logoutButton').addEventListener('click', () => {
//     logout();
//     alert('Cerraste sesión');
// });