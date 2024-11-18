
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

    localStorage.setItem('auth-token', JSON.stringify({ 'auth-token': result.data.token }));

    localStorage.setItem('navigation', JSON.stringify(({
      'navigation': {
        'id_role': result.data.id_role,
        'name': result.data.name,
        'lastname': result.data.name
      }
    })))
  } else {
    localStorage.clear();
  }

  return result;
}

export function getAuthToken() {
  // console.log('aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii');
  // const authToken = localStorage.getItem('auth-token');
  // if (!authToken)
  //   return null;
  // return jwtDecode(authToken);
}
