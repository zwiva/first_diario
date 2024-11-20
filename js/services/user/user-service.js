
import { CONFIG } from '../../../config/config.js';

// idRole 1
export const getAllUsers = async () => { 
  // GET -->

  const endpoint = import.meta.env.VITE_API_URL + CONFIG.allUsers;
  console.log('endpoint', endpoint);

  let response = await fetch(endpoint);
  console.log('response', response);

  const data = await response.json();
  console.log('data', data);

  console.error('There was a problem with the fetch operation:', error);

}

// idRole 1,3
export async function createUser(data) { 
  // POST -->

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
export async function editUser(data) { 
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
export async function deleteUser(data) { 
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