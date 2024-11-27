// 🚨 EN ESTA VISTA SE EDITA UN ARTICULO 🚨

import { _editArticle, _getAllSections, _getArticle } from "../../../services/article/article-service";

let sections = [];
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
    console.log('error: ', error);
  }
}

async function getSections() {
  let data = [];
  try {
    const result = await _getAllSections();
    // console.log('result', result);
    data = result.data;
  } catch (error) {
    console.log('error: ', error);
  }
  return data;
}

async function setSections() {
  const selectSections = document.getElementById("sections-edit");
  sections = await getSections();
  // console.log('sectionsss', sections);

  const select = document.createElement('select');
  select.classList = ['form-input']
  select.id = 'art-edit-section'

  sections.forEach(section => {
    const option = document.createElement('option')
    option.value = section.id
    option.textContent = section.name
    select.appendChild(option);
  })
  selectSections.appendChild(select)
}

async function setArticleDataInView() {

  const result = await getArticleContent()
  // console.log('result', result);
  const articleData = result[0]
  // console.log('articleData', articleData.id_section);

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
  document.getElementById('art-edit-section').value = articleData.id_section;
  const button = document.getElementById('edit-article');
  button.addEventListener('click', editArticle)
}

async function editArticle() {

  let contentEdit = []
  for (let index = 1; index < 6; index++) {
    if (document.getElementById(`art-edit-p${index}`).value ) {
      contentEdit.push(
        {
          position: `${index}`,
          paragraph: document.getElementById(`art-edit-p${index}`).value || '',
          img: document.getElementById(`art-edit-img-${index}`).value || '',
        }
      )
    }
  }

  let dataArticle = {
    id_user: detectUserId(),
    title: document.getElementById('art-edit-title').value,
    img: document.getElementById('art-edit-img-main').value,
    summary: document.getElementById('art-edit-summary').value,
    urlRecomend: document.getElementById('art-edit-link').value,
    id_section: parseInt(document.getElementById('art-edit-section').value),
    content: contentEdit
  };

  // console.log('dataArticle', dataArticle);

  try {
    const result = await _editArticle(getArticleId(), dataArticle)
    console.log('res', result);
    if (result.isSuccess) {
      clearForm();
      window.location.href = "./article-all";
    }
  } catch (error) {
    console.log('error: ', error);
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
  // document.getElementById('art-edit-section').value = arti;
}

function buildView() {
  setSections()
  setArticleDataInView()
}

buildView()