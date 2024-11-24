
import { CONFIG } from '../../../config/config.js';

const getUserToken = () => {
  const user = localStorage.getItem('authToken')
  const token = JSON.parse(user)
  // console.log('token---->', token.authToken);
  return token.authToken
}

// idRole 1
export const _getAllUsers = async () => { // OK  
  const endpoint = import.meta.env.VITE_API_URL + CONFIG.users;
  // console.log('endpoint', endpoint);
  let response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getUserToken()}`,
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json();
  return data;
}

// idRole 1,3
export async function _createUser(data, token) { // pendiente

  const endpoint = import.meta.env.VITE_API_URL + CONFIG.newUser;
  console.log('apuntando a: ', endpoint);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${getUserToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  console.log('result', result);
  return result

}

// idRole 1
export async function _editUser(data) { // pendiente
  // POST O PUT -->

  const endpoint = import.meta.env.VITE_API_URL + CONFIG.login;
  console.log('apuntando a: ', endpoint);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();

  console.log('result', result);

  if (result.isSuccess) {
    // si se crea bien el usuario 

  } else {

  }

}

// idRole 1
export async function _deleteUser(data) { // pendiente
  // DELETE --> eliminar usuario

  const endpoint = import.meta.env.VITE_API_URL + CONFIG.login;
  console.log('apuntando a: ', endpoint);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  const result = await response.json();

  console.log('result', result);

  if (result.isSuccess) {
    // si se crea bien el usuario 

  } else {

  }

}