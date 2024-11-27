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
export const _getArticle = async (id) => { // ok
  // GET -> para traer un articulo completo
  const endpoint = import.meta.env.VITE_API_URL + articlesPath + '/' + id;
  // console.log('getArticle pedido a: ', endpoint);
  let response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getUserToken()}`,
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  return data;
}

// 1,2,3,4
export const _get1LastArticleByEachSection = async () => { // ok (home y article)
  // GET -> traer cada section con un articulo publicado (ultimo) -> co lumna izq
  const endpoint = import.meta.env.VITE_API_URL + articlesPath + '/section/latest/1';
  // console.log('get1LastArticleByEachSection pedido a: ', endpoint);
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
export const _getAllLastsArticles = async () => { // ok
  // GET -> para traer todos los articulos de una seccion
  const endpoint = import.meta.env.VITE_API_URL + articlesPath + '/latest/10';
  // console.log('get3LastArticlesByEachSection pedido a: ', endpoint);
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

// 1,2,4
export const _getAllArticles = async () => { // ok
  // GET -> para traer todos los articulos de una seccion
  const endpoint = import.meta.env.VITE_API_URL + articlesPath;
  // console.log('getAll pedido a: ', endpoint);
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getUserToken()}`,
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();
  return data
}

// 1,2,4
export const _get3LastArticlesByEachSection = async () => { // ok
  // GET -> para traer todos los articulos de una seccion
  const endpoint = import.meta.env.VITE_API_URL + articlesPath + '/section/latest/' + '3';
  // console.log('getLastArticlesOfAll pedido a: ', endpoint);
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getUserToken()}`,
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();
  return data
}

// 1,2,4
export const _getArticlesBySection = async (id) => { // ok
  // GET -> para traer todos los articulos de una seccion
  const endpoint = import.meta.env.VITE_API_URL + articlesPath + '/section/' + id;
  // console.log('getAll pedido a: ', endpoint);
  const response = await fetch(endpoint, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${getUserToken()}`,
      'Content-Type': 'application/json'
    },
  });
  const data = await response.json();
  return data
}

// 1,2
export const _createArticle = async (data) => { // ok
  // POST -> crear articulo
  const endpoint = import.meta.env.VITE_API_URL + CONFIG.articles;
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
  // console.log('result en create article', result);
  return result;

}

// 1,2
export const _editArticle = async (id, data) => { // ok
  // POST o PUT para editar articulo
  const endpoint = import.meta.env.VITE_API_URL + CONFIG.articles + '/' + id;
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

// 1,2
export const _deleteArticle = async (id) => { // ok
  // DELETE -->
  const endpoint = import.meta.env.VITE_API_URL + CONFIG.articles + '/' + id;
  const response = await fetch(endpoint, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${getUserToken()}`,
      'Content-Type': 'application/json'
    },
  });
  const result = await response.json();
  return result;
}
