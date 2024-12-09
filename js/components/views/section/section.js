import { CONFIG } from "../../../../config/config.js";
import { _getAllSections, _getArticlesBySection } from "../../../services/article/article-service.js";
// DESDE VISTA HOME
// DESDE VISTA SECCIONES

// 🚨 EN ESTA VISTA SE VEN TODOS LOS ARTICULOS DE UNA SOLA SECCION 🚨

async function getArticlesBySectionId() {
  try {
    let data = [];
    const response = await _getArticlesBySection(localStorage.getItem('section-id'))
    if (response) {
      data = response.data;
      return data
    }
  } catch (error) {
    console.log('error en getArticlesBySectionId: ', error);
  }
}

async function getSections() {
  try {
    let data = [];
    const response = await _getAllSections()
    if (response) {
      data = response.data;
      return data
    }
  } catch (error) {
    console.log('error en getSections: ', error);
  }
}

async function buildView() {

  const sections = await getSections();
  // console.log('sections', sections);

  const seccion = sections.filter(section => section.id == localStorage.getItem('section-id'));
  // console.log('seccion', seccion);
  if (seccion.length == 1) {

    const tituloSeccion = document.getElementById('title-section-one');
    tituloSeccion.innerHTML = seccion[0].name

    const descripcionSeccion = document.getElementById('section-description-one');
    descripcionSeccion.innerHTML = seccion[0].description

    const articulosContainer = document.getElementById('articles-by-section');

    const articlesBySection = await getArticlesBySectionId();
    // console.log('articlesBySection', articlesBySection);

    if (articlesBySection.length > 0) {
      articlesBySection.sort((a, b) => a.updateDate == null ? new Date(b.createdDate) - new Date(a.createdDate) : new Date(b.updateDate) - new Date(a.updateDate))

      articlesBySection.forEach(articulo => {
        const eachArticle = document.createElement('div');
        eachArticle.classList = ['section_each-news'];

        const title = document.createElement('h4')
        title.classList = ['section_each-news--title']
        title.innerHTML = articulo.title
        eachArticle.appendChild(title)

        const img = document.createElement('img')
        img.classList = ['section_each-news--img']
        img.src = articulo.img
        eachArticle.appendChild(img)

        const p = document.createElement('p')
        p.classList = ['section_each-news--text']
        p.innerHTML = articulo.summary
        eachArticle.appendChild(p)

        const link = document.createElement('div')
        link.classList = ['section_each-news--link']

        const anchor = document.createElement('a');
        anchor.addEventListener('click', function () {
          localStorage.setItem('article-id', articulo.id)
          // console.log('shortArticle', shortArticle);
        })
        anchor.innerHTML = 'Ir a noticia';
        anchor.href = 'article.html';

        link.appendChild(anchor)
        eachArticle.appendChild(link)

        articulosContainer.appendChild(eachArticle);
      });
    } else {
      const message = document.createElement('h3')
      message.innerHTML = 'No hay artículos disponibles en esta sección.'
      message.style.color='#ff007e'
      articulosContainer.appendChild(message);
    }
  } else {
    window.location.href = "index.html"
  }
}

function setStatus() {
  const section2 = document.getElementById('articles-by-section');
  const h3 = document.createElement('p');
  h3.style.fontWeight = 'bold'
  h3.innerHTML = '🔒 app inactiva 🔒';
  section2.appendChild(h3)
}

if (CONFIG.active) {
  buildView();
} else {
  setStatus();
}
