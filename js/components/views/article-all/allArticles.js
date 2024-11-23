console.log('andando allArticles.js');

// 🚨 EN ESTA VISTA SE MUESTRA UNA TABLA CON TODOS LOS ARTICULOS CREADOS 🚨

let articles = []

function getArticles() {
  // traer articulos de db 📌
  try {
    const result = ''
    return result
  } catch (error) {
    console.log('error: ', error);
  }
}

function buildView() {

  articles = getArticles();

  const articulosContainer = document.getElementById('articulos-container');
  articles.forEach(articulo => {
    const articuloTr = document.createElement('tr');
    // console.log('articulo', articulo);

    const titulo = document.createElement('td');
    titulo.innerHTML = articulo.title
    articuloTr.appendChild(titulo)

    const seccion = document.createElement('td');
    seccion.innerHTML = articulo.secciones
    articuloTr.appendChild(seccion)

    const autor = document.createElement('td');
    autor.innerHTML = articulo.idAutor
    autor.style.textAlign = 'center';
    articuloTr.appendChild(autor)

    const fechaPublicacion = document.createElement('td');
    fechaPublicacion.innerHTML = articulo.fechaPublicacion
    fechaPublicacion.style.textAlign = 'center';
    articuloTr.appendChild(fechaPublicacion)

    const estadoPublicacion = document.createElement('td');
    estadoPublicacion.innerHTML = articulo.estadoPublicacion
    estadoPublicacion.style.textAlign = 'center';
    articuloTr.appendChild(estadoPublicacion)

    const acciones = document.createElement('td');
    acciones.style.display = "flex"
    acciones.style.justifyContent = "space-around"

    acciones.innerHTML = `
    <button id="editar-articulo-${articulo.id}">Editar</button>
    <button id="eliminar-articulo-${articulo.id}">Eliminar</button>`
    articuloTr.appendChild(acciones)

    articulosContainer.appendChild(articuloTr);

    const btnEdit = document.getElementById(`editar-articulo-${articulo.id}`)
    btnEdit.addEventListener('click', function () {
      console.log('editar articulo', articulo.id);
      const articuloString = JSON.stringify(articulo)
      localStorage.setItem('article-edit', articuloString)
      window.location.href = "./article-edit.html"
    })

    const btnDelete = document.getElementById(`eliminar-articulo-${articulo.id}`)
    btnDelete.addEventListener('click', function () {
      eliminarArticulo(articulo.id)
    })
  });
}

function eliminarArticulo(id) {
  console.log('eliminar articulo', id);

  // comunicar con db para eliminar 📌
  try {
    const result = ''
  } catch (error) {
    console.log('error: ', error);
  }

}

buildView() // trigger