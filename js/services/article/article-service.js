// 1,2,3,4
export const getAllSections = async () => { 
  // GET -> para traer todas las secciones y escoger una 

  const endpoint = import.meta.env.VITE_API_URL + CONFIG.allUsers;
  console.log('apuntando a: ', endpoint);

  let response = await fetch(endpoint);
  console.log('response', response);

  const data = await response.json();
  console.log('data', data);

  console.error('There was a problem with the fetch operation:', error);

}

// 1,2,3,4
export const getArticle = async () => { 
  // GET -> para traer un articulo completo

  const endpoint = import.meta.env.VITE_API_URL + CONFIG.allUsers;
  console.log('apuntando a: ', endpoint);

  let response = await fetch(endpoint);
  console.log('response', response);

  const data = await response.json();
  console.log('data', data);

  console.error('There was a problem with the fetch operation:', error);

}

// 1,2,3,4
export const get1LastArticleByEachSection = async () => { 
  // GET -> traer cada section con un articulo publicado (ultimo) -> columna izq

  const endpoint = import.meta.env.VITE_API_URL + CONFIG.allUsers;
  console.log('apuntando a: ', endpoint);

  const response = await fetch(endpoint);
  console.log('response', response);

  const data = await response.json();
  console.log('data', data);

  console.error('There was a problem with the fetch operation:', error);

}

// 1,2,3,4
export const get3LastArticlesByEachSection = async () => { 
  // GET -> para traer todos los articulos de una seccion

  const endpoint = import.meta.env.VITE_API_URL + CONFIG.allUsers;
  console.log('apuntando a: ', endpoint);

  const response = await fetch(endpoint);
  console.log('response', response);

  const data = await response.json();
  console.log('data', data);

  console.error('There was a problem with the fetch operation:', error);

}

// 1,2,4
export const getAllArticlesByOneSection = async () => { 
  // GET -> para traer todos los articulos de una seccion

  const endpoint = import.meta.env.VITE_API_URL + CONFIG.allUsers;
  console.log('apuntando a: ', endpoint);

  const response = await fetch(endpoint);
  console.log('response', response);

  const data = await response.json();
  console.log('data', data);

  console.error('There was a problem with the fetch operation:', error);

}

// 1,2,4
export const get10LastArticlesOfAll = async () => { 
  // GET -> para traer todos los articulos de una seccion

  const endpoint = import.meta.env.VITE_API_URL + CONFIG.allUsers;
  console.log('apuntando a: ', endpoint);

  const response = await fetch(endpoint);
  console.log('response', response);

  const data = await response.json();
  console.log('data', data);

  console.error('There was a problem with the fetch operation:', error);

}

// 1,2
export const createArticle = async (data) => { 
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
export const editArticle = async (data) => { 
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
export const deleteArticle = async (data) => { 
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
export const get3LastArticlesOfAll = async () => { 
  // GET -> traer los ultimos 3 articulos de toda la plataforma (sin escoger seccion)

  const endpoint = import.meta.env.VITE_API_URL + CONFIG.allUsers;
  console.log('apuntando a: ', endpoint);

  const response = await fetch(endpoint);
  console.log('response', response);

  const data = await response.json();
  console.log('data', data);

  console.error('There was a problem with the fetch operation:', error);

}
