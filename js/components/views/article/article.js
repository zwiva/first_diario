import { _getAllSections, _get1LastArticleByEachSection } from "../../../services/article/article-service.js";

// DESDE VISTA HOME
// DESDE VISTA SECCION
// DESDE VISTA SECCIONES

// 🚨 EN ESTA VISTA SE VE ARTICULO COMPLETO 🚨

async function getShortArticlesList() {
  let data = []
  try {
    const response = await _get1LastArticleByEachSection();
    if (response) {
      data = response.data;
      data.sort((a, b) => b.id - a.id)
      // console.log('result getShortArticlesList: ', response.data);
      return data
    }
  } catch (error) {
    console.log('error en getAllSections: ', error);
  }
}
async function buildShortArticlesList() {
  // IZQ: MOSTRAR 1 ARTICULOS por seccion  || max 3
  const shortArticlesList = document.getElementById('article-short-list');

  const shortArticlesAll = await getShortArticlesList();
  shortArticlesAll.forEach(shortArticle => {

    const shortArticleElem = document.createElement('div');
    shortArticleElem.classList = ['article_short']

    // console.log('section', shortArticle.section);
    const section = document.createElement('h4');
    section.innerHTML = shortArticle.section;
    section.classList = ['section-title']
    shortArticleElem.appendChild(section)

    // console.log('title', shortArticle.title);
    const title = document.createElement('h4');
    title.innerHTML = shortArticle.title;
    title.classList = ['article_short--title']
    shortArticleElem.appendChild(title)

    // console.log('summary', shortArticle.summary);
    const summary = document.createElement('p');
    summary.innerHTML = shortArticle.summary;
    summary.classList = ['article_short--text'];
    shortArticleElem.appendChild(summary)

    const link = document.createElement('a');
    link.innerHTML = 'ir a articulo';
    link.addEventListener('click', function () {
      localStorage.setItem('short-article', JSON.stringify(shortArticle))
      // console.log('shortArticle', shortArticle);
    })
    link.classList = ['article_short--link']
    link.href = 'article.html';
    shortArticleElem.appendChild(link)

    shortArticlesList.appendChild(shortArticleElem)
  })

}


async function getArticleById() {

  // obtener data articulo desde LS
  // localStorage.getItem('article-id')
  // traer de db 📌

  try {
    const result = ''
  } catch (error) {
    console.log('error: ', error);
  }

}

async function buildView() {
  await buildShortArticlesList()
}

buildView();