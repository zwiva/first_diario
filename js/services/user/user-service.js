
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
export async function _createUser(role, data) { // ok
  // console.log('data user----->', data);
  if (role == 3) { // registrp
    const endpoint = import.meta.env.VITE_API_URL + CONFIG.register;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result
  } else { // crear
    const endpoint = import.meta.env.VITE_API_URL + CONFIG.users;
    // console.log('apuntando a: ', endpoint);
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getUserToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const result = await response.json();
    return result
  }
}

// idRole 1
export async function _editUser(id, data) { // ok
  // POST O PUT -->
  const endpoint = import.meta.env.VITE_API_URL + CONFIG.users + '/' + id;
  // console.log('apuntando a: ', endpoint);
  const response = await fetch(endpoint, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${getUserToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const result = await response.json();
  return result;
}

// idRole 1
export async function _deleteUser(id) { // pendiente
  // DELETE --> eliminar usuario
  console.log('id', id);
  if (id !== 1) {
    const endpoint = import.meta.env.VITE_API_URL + CONFIG.users + '/' + id;
    // console.log('apuntando a: ', endpoint);
    const response = await fetch(endpoint, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${getUserToken()}`,
        'Content-Type': 'application/json'
      },
    });
    const result = await response.json();
    return result
  } else {
    alert('❌ No se debe eliminar este usuario. ❌')
  }
}