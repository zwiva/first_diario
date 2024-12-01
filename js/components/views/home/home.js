import { CONFIG } from "../../../../config/config.js";
import { _getAllSections, _get1LastArticleByEachSection, _getAllLastsArticles } from "../../../services/article/article-service.js";
// 🚨 vista principal 🚨

async function getShortArticlesList() {
  let data = []
  try {
    const response = await _get1LastArticleByEachSection();
    if (response) {
      data = response.data;
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

async function getAllLatestOfAll() {
  let data = []

  try {
    const response = await _getAllLastsArticles();
    if (response) {
      data = response.data;
      data.sort((a, b) => b.id - a.id)
      // console.log('result getLast----> ', response.data);
      return data
    }
  } catch (error) {
    console.log('error en getAllLatestOfAll: ', error);
  }
}

async function buildLatestOfAll() { // 10 o 3
  // CENTRO: MOSTRAR 1 ARTICULOS por seccion || max 3
  const recentArticlesList = document.getElementById('recent-article-list');
  const recentArticles = await getAllLatestOfAll();

  recentArticles.forEach(article => {
    const recentArticle = document.createElement('div');
    recentArticle.classList = ['article-body']

    const title = document.createElement('h3');
    title.innerHTML = article.title;
    recentArticle.appendChild(title)

    const img = document.createElement('img');
    img.src = article.img;
    img.classList = ['article-img']
    recentArticle.appendChild(img)

    const summary = document.createElement('h4');
    summary.innerHTML = article.summary;
    recentArticle.appendChild(summary)

    const paragraph = document.createElement('p')
    paragraph.innerHTML = article.content[0].paragraph;
    paragraph.classList = ['article-content--text'];
    recentArticle.appendChild(paragraph);

    const options = document.createElement('div');
    options.classList = ['article_summ-options']

    const section = document.createElement('div');
    section.innerHTML = article.section;
    section.classList = ['section-title']
    options.appendChild(section)

    const link = document.createElement('a');
    link.innerHTML = 'ir a articulo';
    link.addEventListener('click', function () {
      localStorage.setItem('article-id', article.id)
    })
    link.classList = ['article-link']
    link.href = 'article.html';
    options.appendChild(link)

    recentArticle.appendChild(options);

    recentArticlesList.appendChild(recentArticle)
  })

}

async function getAllSections() { // ok
  let data = []
  try {
    const response = await _getAllSections();
    if (response) {
      data = response.data;
      return data
    }
  } catch (error) {
    console.log('error en getAllSections: ', error);
  }
}

async function buildSections() { // ok
  // DER: MOSTRAR SECCIONES, DEBEN LLEGAR TODAS
  const allSections = document.getElementById('index-sections');
  let sections = await getAllSections();
  sections.forEach(section => {
    const link = document.createElement('div')
    link.classList = ['section-title']
    link.style.cursor = 'pointer'
    const titulo = document.createElement('p')
    titulo.innerHTML = section.name
    link.addEventListener('click', function () {
      localStorage.setItem('section-id', section.id)
      window.location.href = 'seccion.html';
    })
    link.appendChild(titulo)
    allSections.appendChild(link);
  });
}

async function buildView() {
  await buildSections(); // ok
  await buildLatestOfAll();
  await buildShortArticlesList()
}

function showStatus() {
  const section = document.getElementById('recent-article-list');
  const h3 = document.createElement('h3')
  h3.innerHTML = '🔒 app inactiva 🔒'
  section.appendChild(h3)
}

if (CONFIG.active) {
  buildView();
} else {
  showStatus();
}
