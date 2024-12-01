// 🚨 EN ESTA VISTA SE CREA UN NUEVO ARTICULO 🚨

import { CONFIG } from "../../../../config/config";
import { _createArticle, _getAllSections } from "../../../services/article/article-service";

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

async function setSections() {
  const selectSections = document.getElementById("sections-create");
  const sections = await getSections();
  const select = document.createElement('select');
  select.classList = ['form-input']
  select.id = 'art-create-section'

  sections.forEach(section => {
    const option = document.createElement('option')
    option.value = section.id
    option.textContent = section.name
    // console.log('option', option);
    select.appendChild(option);
  })

  selectSections.appendChild(select)
}

function drawForm() {
  const section = document.getElementById("action-section");

  const btn = document.createElement('button')
  btn.classList = ['btn']
  btn.innerHTML = 'Guardar artículo'

  btn.addEventListener('click', async function () {

    const titulo = document.getElementById('art-create-title').value; //
    const urlMain = document.getElementById('art-create-img-main').value; //
    const resumen = document.getElementById('art-create-summary').value; //
    const par1 = document.getElementById('art-create-p1').value || '';
    const url1 = document.getElementById('art-create-img-1').value || '';
    const par2 = document.getElementById('art-create-p2').value || '';
    const url2 = document.getElementById('art-create-img-2').value || '';
    const par3 = document.getElementById('art-create-p3').value || '';
    const url3 = document.getElementById('art-create-img-3').value || '';
    const par4 = document.getElementById('art-create-p4').value || '';
    const url4 = document.getElementById('art-create-img-4').value || '';
    const par5 = document.getElementById('art-create-p5').value || '';
    const url5 = document.getElementById('art-create-img-5').value || '';
    const enlace = document.getElementById('art-create-link').value || ''; //
    const seccion = document.getElementById('art-create-section').value; //

    let dataArticle = {
      id_user: detectUserId(),
      title: titulo,
      img: urlMain,
      summary: resumen,
      urlRecomend: enlace,
      id_section: parseInt(seccion),
      content: [
        {
          position: 1,
          paragraph: par1,
          img: url1,
        },
        {
          position: 2,
          paragraph: par2,
          img: url2,
        },
        {
          position: 3,
          paragraph: par3,
          img: url3,
        },
        {
          position: 4,
          paragraph: par4,
          img: url4,
        },
        {
          position: 5,
          paragraph: par5,
          img: url5,
        }
      ]
    };

    // console.log('data article ', dataArticle);

    const result = await saveArticle(dataArticle);

    // console.log('result', result);

    if (result.isSuccess) {
      // console.log('limpiar formulario');
      dataArticle = {};
      document.getElementById('art-create-title').value = '';
      document.getElementById('art-create-img-main').value = '';
      document.getElementById('art-create-summary').value = '';
      document.getElementById('art-create-p1').value = '';
      document.getElementById('art-create-img-1').value = '';
      document.getElementById('art-create-p2').value = '';
      document.getElementById('art-create-img-2').value = '';
      document.getElementById('art-create-p3').value = '';
      document.getElementById('art-create-img-3').value = '';
      document.getElementById('art-create-p4').value = '';
      document.getElementById('art-create-img-4').value = '';
      document.getElementById('art-create-p5').value = '';
      document.getElementById('art-create-img-5').value = '';
      document.getElementById('art-create-link').value = '';
      window.location.href = "./article-all.html"
    }

  });

  section.appendChild(btn)
}

const saveArticle = async (data) => {
  try {
    const response = await _createArticle(data)
    return response;
  } catch (error) {
    console.log('error en saveArticle', error);
  }
}

function buildView() {
  // const idRole = detectRole();
  // if (idRole !== 3) {
  drawForm()
  setSections()
  // }
}

function showStatus() {
  const section = document.getElementById('action-section');
  const h3 = document.createElement('h3')
  h3.innerHTML = '🔒 app inactiva 🔒'
  section.appendChild(h3)
}

const idRole = detectRole()
console.log('idRole', idRole);

if (idRole == 3 || idRole == 4) {
  window.location.href = 'index.html'
} else {
  buildView();
}
