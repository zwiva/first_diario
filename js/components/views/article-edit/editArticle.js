// 🚨 EN ESTA VISTA SE EDITA UN ARTICULO 🚨

import { CONFIG } from "../../../../config/config";
import { _editArticle, _getAllSections, _getArticle } from "../../../services/article/article-service";

function detectRole() {
  let idRole = 3;

  if (localStorage.getItem('navigation')) {
    let data = JSON.parse(localStorage.getItem('navigation'))
    idRole = data.navigation.id_role;
  }

  return idRole;
}

function detectUserId() {
  let userId = '';
  if (localStorage.getItem('navigation')) {
    let user = JSON.parse(localStorage.getItem('navigation'))
    userId = user.navigation.id_user;
  }
  // console.log('token---->', token.authToken);
  return userId
}

function getArticleId() {
  if (localStorage.getItem('article-id-edit')) {
    let articleId = JSON.parse(localStorage.getItem('article-id-edit'))
    // console.log('storage', articleId);
    return articleId
  }
}

async function getArticleContent() {
  try {
    const response = await _getArticle(getArticleId())
    return response.data;
  } catch (error) {
    console.log('error en getArticleContent: ', error);
  }
}

async function getSections() {
  let data = [];
  try {
    const result = await _getAllSections();
    // console.log('result', result);
    data = result.data;
  } catch (error) {
    console.log('error en getSections: ', error);
  }
  return data;
}

async function setArticleDataInView() {

  const result = await getArticleContent()
  // console.log('result', result);
  const articleData = await result[0]
  // console.log('articleData', articleData);

  const section = document.getElementById('actions-section')
  const btn = document.createElement('button')
  btn.classList = ['btn']
  btn.innerHTML = 'Editar artículo'
  btn.addEventListener('click', editArticle)
  section.appendChild(btn)

  document.getElementById('art-edit-title').value = articleData.title;
  document.getElementById('art-edit-img-main').value = articleData.img;
  document.getElementById('art-edit-summary').value = articleData.summary;
  document.getElementById('art-edit-p1').value = articleData.content[0]?.paragraph || '';
  document.getElementById('art-edit-img-1').value = articleData.content[0]?.img || '';
  document.getElementById('art-edit-p2').value = articleData.content[1]?.paragraph || '';
  document.getElementById('art-edit-img-2').value = articleData.content[1]?.img || '';
  document.getElementById('art-edit-p3').value = articleData.content[2]?.paragraph || '';
  document.getElementById('art-edit-img-3').value = articleData.content[2]?.img || '';
  document.getElementById('art-edit-p4').value = articleData.content[3]?.paragraph || '';
  document.getElementById('art-edit-img-4').value = articleData.content[3]?.img || '';
  document.getElementById('art-edit-p5').value = articleData.content[4]?.paragraph || '';
  document.getElementById('art-edit-img-5').value = articleData.content[4]?.img || '';
  document.getElementById('art-edit-link').value = articleData.urlRecomend;
  
  
  // construir selector
  const select = document.createElement('select');
  select.classList = ['form-input'];
  select.id = 'art-edit-section';
  
  // cargar selector
  let sections = [];
  sections = await getSections();
  // console.log('sectionsss', sections);

  sections.forEach(section => {
    const option = document.createElement('option')
    option.value = section.id
    option.textContent = section.name

    if(articleData.id_section === section.id){
      option.selected = true;
      option.value = articleData.id_section;
      option.textContent = articleData.section;
    }

    select.appendChild(option);
  })

  const selectSections = document.getElementById("sections-edit");
  selectSections.appendChild(select)

}

async function editArticle() {

  let contentEdit = []
  for (let index = 1; index < 6; index++) {
    if (document.getElementById(`art-edit-p${index}`).value) {
      contentEdit.push(
        {
          position: `${index}`,
          paragraph: document.getElementById(`art-edit-p${index}`).value || '',
          img: document.getElementById(`art-edit-img-${index}`).value || '',
        }
      )
    }
  }

  const sectionSelected = document.getElementById('art-edit-section');
  sectionSelected.selected

  let dataArticle = {
    id_user: detectUserId(),
    title: document.getElementById('art-edit-title').value,
    img: document.getElementById('art-edit-img-main').value,
    summary: document.getElementById('art-edit-summary').value,
    urlRecomend: document.getElementById('art-edit-link').value,
    id_section: sectionSelected.value,
    content: contentEdit
  };

  // console.log('dataArticle', dataArticle);

  try {
    const result = await _editArticle(getArticleId(), dataArticle)
    // console.log('res', result);
    if (result.isSuccess) {
      clearForm();
      window.location.href = "./article-all";
    } else {
      alert(`🚫 Error al editar 🚫: ${result.message}`)
    }
  } catch (error) {
    console.log('error en _editArticle: ', error);
  }
}

function clearForm() {
  document.getElementById('art-edit-title').value = ''
  document.getElementById('art-edit-img-main').value = ''
  document.getElementById('art-edit-summary').value = ''
  document.getElementById('art-edit-p1').value = '';
  document.getElementById('art-edit-img-1').value = '';
  document.getElementById('art-edit-p2').value = '';
  document.getElementById('art-edit-img-2').value = '';
  document.getElementById('art-edit-p3').value = '';
  document.getElementById('art-edit-img-3').value = '';
  document.getElementById('art-edit-p4').value = '';
  document.getElementById('art-edit-img-4').value = '';
  document.getElementById('art-edit-p5').value = '';
  document.getElementById('art-edit-img-5').value = '';
  document.getElementById('art-edit-link').value = '';
}

async function buildView() {
  await setArticleDataInView()
}

// function showStatus() {
//   const section = document.getElementById('actions-section');
//   const h3 = document.createElement('h3')
//   h3.innerHTML = '🔒 app inactiva 🔒'
//   section.appendChild(h3)
// }

const idRole = detectRole()
if (idRole == 3 || idRole == 4) {
  window.location.href = 'index.html'
} else {
  buildView();
}
