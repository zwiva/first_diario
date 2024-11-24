import { _getArticle, _getAllSections, _get1LastArticleByEachSection } from "../../../services/article/article-service.js";
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
      localStorage.setItem('article-id', shortArticle.id)
      // console.log('shortArticle', shortArticle);
    })
    link.classList = ['article_short--link']
    link.href = 'article.html';
    shortArticleElem.appendChild(link)

    shortArticlesList.appendChild(shortArticleElem)
  })

}

async function getArticleById() {
  try {
    let data = [];
    const response = await _getArticle(localStorage.getItem('article-id'))
    if (response) {
      data = response.data[0];
      return data
    }
  } catch (error) {
    console.log('error: ', error);
  }
}

async function buildArticle() {
  const article = await getArticleById();
  // console.log('recent xxxxxx', article);

  const currentArticle = document.getElementById('current-article');

  const articleTop = document.createElement('div') // CONTENEDOR
  articleTop.classList = ['article_top'];

  const articleTopTitle = document.createElement('div') // CONTENEDOR
  articleTopTitle.classList = ['article_top--title']

  const articleTopTitleText = document.createElement('h2')
  articleTopTitleText.innerHTML = article.title;
  articleTopTitleText.classList = ['article_top--title-text']
  articleTopTitle.appendChild(articleTopTitleText)

  const articleTopTitleTag = document.createElement('div')
  articleTopTitleTag.innerHTML = article.section
  articleTopTitleTag.classList = ['article_top--title-tag']
  articleTopTitle.appendChild(articleTopTitleTag)

  const articleTopTitleDate = document.createElement('div')
  articleTopTitleDate.innerHTML = article.createdDate // acortar
  articleTopTitleDate.classList = ['article_top--title-date']
  articleTopTitle.appendChild(articleTopTitleDate)

  articleTop.appendChild(articleTopTitle)

  const imgCont = document.createElement('div')
  imgCont.classList = ['article_top--img']

  const img = document.createElement('img')
  img.src = 'https://controlpublicidad.com/wp-content/uploads/2024/05/inteligencia-artificial-e-imaginacion-102327.jpg'
  img.classList = ['article_top--img-main']
  imgCont.appendChild(img)
  articleTop.appendChild(imgCont)

  const summary = document.createElement('div')
  summary.classList = ['article_top--summ']
  const summP = document.createElement('p')
  summP.innerHTML = article.summary;
  summary.appendChild(summP)
  articleTop.appendChild(summary)
  currentArticle.appendChild(articleTop);

  const hr = document.createElement('hr') // DIVISOR
  hr.classList = ['article_hr']
  currentArticle.appendChild(hr)

  const articleContent = document.createElement('div') // CONTENEDOR
  articleContent.classList = ['article_content']
  article.content.forEach(content => {

    // console.log('parag', content);
    const articleContentEach = document.createElement('div');
    articleContentEach.classList = ['article-content--each'];

    const articleContentText = document.createElement('p');
    articleContentText.classList = ['article-content--text'];
    articleContentText.innerHTML = content.paragraph;

    articleContentEach.appendChild(articleContentText)

    const articleContentImg = document.createElement('img');
    articleContentImg.classList = ['article-content--img']
    articleContentImg.src = 'https://controlpublicidad.com/wp-content/uploads/2024/05/inteligencia-artificial-e-imaginacion-102327.jpg'

    articleContentEach.appendChild(articleContentImg)
    articleContent.appendChild(articleContentEach)

  })

  currentArticle.appendChild(articleContent)

}

async function buildView() {
  await buildShortArticlesList();
  await buildArticle();
}

buildView();