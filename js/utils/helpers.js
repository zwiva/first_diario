// import { CONFIG } from './../../config/config.js';

export const verifyToken = (token) => {

  const endpoint = import.meta.env.VITE_API_URL + '/verify';
  console.log('endpoint', endpoint);


  // fetch(endpoint, {
  //   method: 'POST', // HTTP method
  //   headers: {
  //     'Content-Type': 'application/json' // Content type for JSON data
  //   },
  //   body: JSON.stringify({
  //     token
  //   })
  // })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .catch(error => {
  //     console.error('There was a problem with the fetch operation:', error);
  //   });

  // // Obtener el JWT (almacenado previamente, por ejemplo, en localStorage)
  // const jwtToken = localStorage.getItem('authToken'); // Asegúrate de que esté bien almacenado

  // // Realizar una solicitud protegida
  // fetch('https://tu-backend.com/api/protegida', {
  //   method: 'GET', // O POST, según sea necesario
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${jwtToken}` // Enviar el token en el encabezado Authorization
  //   }
  // })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Error en la solicitud: Token inválido o expirado');
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log('Datos protegidos:', data);
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });



}
