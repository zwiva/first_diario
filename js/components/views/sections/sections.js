// 🚨 EN ESTA VISTA SE VEN TODAS LAS SECCIONES, DE CADA SECCION SE VEN 3 ARTICULOS siempre 🚨

import { CONFIG } from "../../../../config/config.js";
import { _get3LastArticlesByEachSection } from "../../../services/article/article-service.js";

function detectRole() {
  let idRole = 3;

  if (localStorage.getItem('navigation')) {
    let data = JSON.parse(localStorage.getItem('navigation'))
    idRole = data.navigation.id_role;
  }

  return idRole;
}

async function getAllLatestOfAll() {
  let data = []
  try {
    const response = await _get3LastArticlesByEachSection();
    if (response) {
      data = response.data;
      const dataOrganized = await organizeBySections(data)
      return dataOrganized
    }
  } catch (error) {
    console.log('error en getAllLatestOfAll: ', error);
  }
}

async function organizeBySections(data) {
  const group = []
  const groupedBySection = data.reduce((acc, item) => { // organizar por key-secciones
    const key = item.section;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});

  for (const key in groupedBySection) { // crear arreglo
    if (groupedBySection.hasOwnProperty(key)) {
      let each = {
        name: key,
        articles: groupedBySection[key]
      }
      // console.log('each', each);
      group.push(each)
    }
  }
  return group;
}

async function buildLatestOfAll() { // 10 o 3
  // CENTRO: MOSTRAR 1 ARTICULOS por seccion || max 3

  const role = detectRole(); // para activar btn

  const sections = await getAllLatestOfAll()
  // console.log('data in ', data);

  const sectionsList = document.getElementById('sections-list');

  sections.forEach(section => {
    // console.log('s', section);
    const sectionEach = document.createElement('div');
    sectionEach.classList = ['section_each']

    const sectionTitle = document.createElement('h3')
    sectionTitle.innerHTML = section.name;
    sectionEach.appendChild(sectionTitle)

    const sectionEachGroup = document.createElement('div')
    sectionEachGroup.classList = ['section_each--group']

    // section.articles.sort((a,b) => b.createdDate - a.createdDate);
    section.articles.sort((a,b) => a.updateDate =! null ? b.updateDate - a.updateDate :  b.createdDate - a.createdDate )

    section.articles.forEach(article => {
      // console.log('a', article);
      const eachArticle = document.createElement('div')
      eachArticle.classList = ['section_each-news']

      const articleTitle = document.createElement('h4')
      articleTitle.classList = ['section_each-news--title']
      articleTitle.innerHTML = article.title;
      eachArticle.appendChild(articleTitle)

      const articleImg = document.createElement('img')
      articleImg.classList = ['section_each-news--img']
      articleImg.src = article.img;
      eachArticle.appendChild(articleImg)

      const articleSumm = document.createElement('p')
      articleSumm.classList = ['section_each-news--text']
      articleSumm.innerHTML = article.summary;
      eachArticle.appendChild(articleSumm)

      const articleLink = document.createElement('div')
      articleLink.classList = ['section_each-news--link']

      const anchor = document.createElement('a');
      anchor.addEventListener('click', function () {
        localStorage.setItem('article-id', article.id)
        // console.log('shortArticle', shortArticle);
      })
      anchor.innerHTML = 'Ir a noticia';
      anchor.href = 'article.html';

      articleLink.appendChild(anchor)
      eachArticle.appendChild(articleLink)

      sectionEachGroup.appendChild(eachArticle)

    });
    console.log('en secciones: ', section.articles);
    

    sectionEach.appendChild(sectionEachGroup)

    const sectionEachBtn = document.createElement('div')
    sectionEachBtn.classList = ['section_each--btn']

    const btnGoSection = document.createElement('button')
    btnGoSection.classList = role === 3 ? ['btn btn-inactive btn-go--section'] : ['btn btn-go--section'];
    btnGoSection.innerHTML = 'Ver todos los artículos'

    btnGoSection.addEventListener('click', function () {
      localStorage.setItem('section-id', section?.articles[0]?.id_section)
      // console.log('artic', section?.articles[0]?.id_section);
      window.location.href = 'seccion.html'
    })
    sectionEachBtn.appendChild(btnGoSection)
    if (role === 3) {
      const msg = document.createElement('p')
      msg.innerHTML = '⛔ Debe estar registrado ⛔';
      msg.style.display = 'flex'
      msg.style.justifyContent = 'flex-end'
      msg.style.fontSize = '0.8em'
      msg.style.color = 'gray'
      msg.style.margin = '0.5em'
      sectionEachBtn.appendChild(msg)
    }
    sectionEach.appendChild(sectionEachBtn)
    sectionsList.appendChild(sectionEach)
  });

}

function buildView() {
  buildLatestOfAll()
}

function showStatus() {
  const section = document.getElementById('sections-list');
  const h3 = document.createElement('h3')
  h3.innerHTML = '🔒 app inactiva 🔒'
  section.appendChild(h3)
}

if (CONFIG.active) {
  buildView();
} else {
  showStatus();
}