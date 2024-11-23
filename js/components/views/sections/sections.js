// 🚨 EN ESTA VISTA SE VEN TODAS LAS SECCIONES, DE CADA SECCION SE VEN 3 ARTICULOS siempre 🚨

import { _get3LastArticlesByEachSection } from "../../../services/article/article-service.js";

// DESDE EL NAVBAR

function detectRole() { // detectar el tipo de rol
  let idRole = 3;

  if (localStorage.getItem('navigation')) {
    let data = JSON.parse(localStorage.getItem('navigation'))
    idRole = data.navigation.id_role;
  }
  console.log('idRole', idRole);
  // idRole = 2
  return idRole;
}

let data = []
function getSectionsWith3Articles() {

  try {
    const result = ''
    data = result;
  } catch (error) {
    console.log('error: ', error);
  }

}

function showAllSections() {
  // traer de db
  getSectionsWith3Articles()
  const role = detectRole();

  // con el rol de usuario se piden las secciones y cada una trae 3 articulos en esta vista
  // construir elementos que se ven en una seccion
  // en los elementos dependiendo del rol se muestra activo/inactivo boton para ver mas articulos de una seccion

  // link noticia -> function goToArticle() {// guardar en LS el articulo escogido
  //   // localStorage.setItem('full-article')
  //   // window.location.href = "./article.html"
  // }
}


showAllSections() // trigger



async function getAllLatestOfAll() {
  let data = []

  try {
    const response = await _get3LastArticlesByEachSection();

    if (response) {
      data = response.data;
      console.log('result getLast: ', response.data);
      return data
    }
  } catch (error) {
    console.log('error en getAllSections: ', error);
  }
}

async function buildLatestOfAll() { // 10 o 3
  // CENTRO: MOSTRAR 1 ARTICULOS por seccion || max 3
  const recentArticlesMain = document.getElementById('');

  const all = await getAllLatestOfAll();
  // function goToArticle() {// guardar en LS el articulo escogido 
  //   // localStorage.setItem('full-article', 'djdjd')
  //   // window.location.href = "./article.html"
  //    }


}