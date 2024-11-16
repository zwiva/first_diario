
import { CONFIG } from "./../../config/config.js";

export async function login(email, pass) {
  const endpoint = import.meta.env.VITE_API_URL + CONFIG.login;

  console.log('haciendo login en: ', endpoint);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, pass })
    });

    if (!response.ok) throw new Error('Credenciales inválidas');

    const result = await response.json();

    localStorage.setItem('jwtToken', result.token); // Almacenar el token en localStorage
    console.log('data en login', result.data);
    
    localStorage.setItem('data', JSON.stringify(result.data)); // Almacenar el token en localStorage
    
    return true;
  } catch (error) {
    console.error('Error de autenticación:', error);
    return false;
  }

}

export function getAuthToken() {
  return localStorage.getItem('jwtToken');
}

export function logout() {
  localStorage.removeItem('jwtToken'); // Borra el token en el logout
}