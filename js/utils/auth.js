
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

  console.log('result', result);

  if (result.isSuccess) {

    localStorage.setItem('authToken', JSON.stringify({ 'authToken': result.data.token }));

    localStorage.setItem('navigation', JSON.stringify(({
      'navigation': {
        'id_role': result.data.id_role,
        'name': result.data.name,
        'lastname': result.data.lastname,
        'id_user': result.data.id_user
      }
    })))
  } else {
    localStorage.clear();
  }

  return result;
}
