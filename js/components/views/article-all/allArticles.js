import { CONFIG } from "../../../../config/config.js";
import { _deleteArticle, _getAllArticles } from "../../../services/article/article-service.js";

// 🚨 EN ESTA VISTA SE MUESTRA UNA TABLA CON TODOS LOS ARTICULOS CREADOS 🚨

function detectRole() {
  let idRole = 3;

  if (localStorage.getItem('navigation')) {
    let data = JSON.parse(localStorage.getItem('navigation'))
    idRole = data.navigation.id_role;
  }

  return idRole;
}

async function getArticles() {
  try {
    const result = await _getAllArticles()
    result.data.sort((a, b) => (a.updateDate != null) ? b.updateDate - a.updateDate : b.createdDate - a.createdDate );
    result.data.sort((a, b) => a.id_section - b.id_section) // ordenado por id
    return result.data
  } catch (error) {
    console.log('error: ', error);
  }
}

async function buildView() {

  let articles = await getArticles();

  const articulosContainer = document.getElementById('articulos-container');
  articles.forEach(articulo => {
    // console.log('articulo', articulo);

    const articuloTr = document.createElement('tr');

    const id = document.createElement('td');
    id.innerHTML = articulo.id
    articuloTr.appendChild(id)

    const titulo = document.createElement('td');
    titulo.innerHTML = articulo.title
    articuloTr.appendChild(titulo)

    const seccion = document.createElement('td');
    seccion.innerHTML = articulo.section
    articuloTr.appendChild(seccion)

    const idseccion = document.createElement('td');
    idseccion.innerHTML = articulo.id_section
    articuloTr.appendChild(idseccion)

    const autor = document.createElement('td');
    autor.innerHTML = articulo.id_user
    autor.style.textAlign = 'center';
    articuloTr.appendChild(autor)

    // const estadoPublicacion = document.createElement('td');
    // estadoPublicacion.innerHTML = articulo.status
    // estadoPublicacion.style.textAlign = 'center';
    // articuloTr.appendChild(estadoPublicacion)

    const fechaPublicacion = document.createElement('td');
    fechaPublicacion.innerHTML = articulo.createdDate.split('T')[0]
    fechaPublicacion.style.textAlign = 'center';
    articuloTr.appendChild(fechaPublicacion)

    const fechaEdicion = document.createElement('td');
    fechaEdicion.innerHTML = articulo.updateDate?.split('T')[0] || '-';
    fechaEdicion.style.textAlign = 'center';
    articuloTr.appendChild(fechaEdicion)

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
      // console.log('editar articulo', articulo.id);
      localStorage.setItem('article-id-edit', articulo.id)
      window.location.href = "./article-edit.html"
    })

    const btnDelete = document.getElementById(`eliminar-articulo-${articulo.id}`)
    btnDelete.addEventListener('click', function () {
      eliminarArticulo(articulo.id)
    })
  });
}

async function eliminarArticulo(id) {
  if (confirm(`Estas seguro de eliminar el idArtículo: ${id}`)) {
    try {
      const result = await _deleteArticle(id);
      console.log('res', result);
      if (result.isSuccess) {
        window.location.href = './article-all.html'
      } else {
        alert(`🚫 Error al eliminar 🚫: ${result.message}`)
      }
    } catch (error) {
      console.log('error el eliminarArticulo: ', error);
    }
  }
}

const idRole = detectRole();
if (idRole == 3 || idRole == 4) {
  window.location.href = 'index.html'
} else {
  buildView();
}
