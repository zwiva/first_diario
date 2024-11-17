
import { CONFIG } from './../../config/config.js';

export async function login(email, pass) {
  const endpoint = import.meta.env.VITE_API_URL + CONFIG.login;

  console.log('haciendo login en: ', endpoint);
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, pass })
  });

  const result = await response.json();

  if (result.isSuccess) {
    localStorage.setItem('auth-token', JSON.stringify({ 'auth-token': result.data })); // Almacenar el token en localStorage
  } else {
    localStorage.clear();
  }

  return result;
}

export function getAuthToken() {
  return localStorage.getItem('jwtToken');
}

export function logout() {
  localStorage.removeItem('jwtToken'); // Borra el token en el logout
}