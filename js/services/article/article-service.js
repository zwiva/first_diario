import { CONFIG } from "../../../config/config";

const articlesPath = CONFIG.articles;
const sectionsPath = CONFIG.sections;

const getUserToken = () => {
  const user = localStorage.getItem('authToken')
  return user ? JSON.parse(user).authToken : user;
}

// 1,2,3,4
export const _getAllSections = async () => { // ok (home)
  // GET -> para traer todas las secciones y escoger una 
  const endpoint = import.meta.env.VITE_API_URL + sectionsPath;
  let response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getUserToken()}`,
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();
  return data
}

// 1,2,3,4
export const _getArticle = async () => { // pendiente
  // GET -> para traer un articulo completo

  const endpoint = import.meta.env.VITE_API_URL + articlesPath;
  console.log('getArticle pedido a: ', endpoint);

  let response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getUserToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  console.log('response', response);

  const data = await response.json();
  console.log('data', data);

}

// 1,2,3,4
export const _get1LastArticleByEachSection = async () => { // ok (home y article)
  // GET -> traer cada section con un articulo publicado (ultimo) -> co lumna izq

  const endpoint = import.meta.env.VITE_API_URL + articlesPath + '/section/latest/1';
  console.log('get1LastArticleByEachSection pedido a: ', endpoint);

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getUserToken()}`,
      'Content-Type': 'application/json'
    },
  });

  const data = await response.json();
  // console.log('data', data);
  return data;
}

// 1,2,3,4
export const _getAllLastsArticles = async () => { // WIP home
  // GET -> para traer todos los articulos de una seccion

  const endpoint = import.meta.env.VITE_API_URL + articlesPath + '/latest/10';
  console.log('get3LastArticlesByEachSection pedido a: ', endpoint);

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getUserToken()}`,
      'Content-Type': 'application/json'
    },
  });
  console.log('response', response);

  const data = await response.json();
  console.log('data', data);
  return data;
}

// 1,2,4
export const _getAllArticlesByOneSection = async () => { // pendiente
  // GET -> para traer todos los articulos de una seccion

  const endpoint = import.meta.env.VITE_API_URL + articlesPath;
  console.log('getAllArticlesByOneSection pedido a: ', endpoint);

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getUserToken()}`,
      'Content-Type': 'application/json'
    },
  });
  console.log('response', response);

  const data = await response.json();
  console.log('data', data);
}

// 1,2,4
export const _get3LastArticlesByEachSection = async () => { // WIP secciones
  // GET -> para traer todos los articulos de una seccion

  const endpoint = import.meta.env.VITE_API_URL + articlesPath;
  console.log('getLastArticlesOfAll pedido a: ', endpoint);

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getUserToken()}`,
      'Content-Type': 'application/json'
    },
  });

  console.log('response', response);

  const data = await response.json();
  console.log('data', data);
  return data
}

// 1,2
export const _createArticle = async (data) => { // pendiente
  // POST -> crear articulo

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

// 1,2
export const _editArticle = async (data) => { // pendiente
  // POST o PUT para editar articulo

  const endpoint = import.meta.env.VITE_API_URL + CONFIG.login;
  console.log('apuntando a: ', endpoint);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    const result = await response.json();
    alert('articulo actualizado correctamente.');
    // Opcional: Redirigir o actualizar la interfaz
  } else {
    const error = await response.json();
    alert('Error al actualizar el articulo: ' + error.message);
  }

}

// 1,2
export const _deleteArticle = async (data) => { // pendiente
  // DELETE -->

  const endpoint = import.meta.env.VITE_API_URL + CONFIG.login;
  console.log('apuntando a: ', endpoint);

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  if (response.ok) {
    const result = await response.json();
    alert('articulo actualizado correctamente.');
    // Opcional: Redirigir o actualizar la interfaz
  } else {
    const error = await response.json();
    alert('Error al actualizar el articulo: ' + error.message);
  }

}

// 3
export const _get3LastArticlesOfAll = async () => { // pendiente
  // GET -> traer los ultimos 3 articulos de toda la plataforma (sin escoger seccion)

  const endpoint = import.meta.env.VITE_API_URL + articlesPath;
  console.log('get3LastArticlesOfAll pedido a a: ', endpoint);

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getUserToken()}`,
      'Content-Type': 'application/json'
    },
  });
  console.log('response', response);

  const data = await response.json();
  console.log('data', data);

}
