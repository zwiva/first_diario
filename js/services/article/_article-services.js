
export const editArticle = async (data) => {

  const response = await fetch('/api/users/edit', { // Asegúrate de que esta ruta coincida con tu backend
    method: 'POST', // O 'PUT' dependiendo de tu implementación
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