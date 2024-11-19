console.log('andando el editArticle.js');

// 🚨 EN ESTA VISTA SE EDITA UN ARTICULO 🚨

function getArticleContent(id) {
  // pedir a db el contenido del articulo

  try {
    const result = ''
    // return body
  } catch (error) {
    console.log('error: ', error);
  }
}

function getArticleData() {

  // const content = getArticleContent(id)  // pedir el contenido de un articulo (pedir con id)

  // juntar con data del encabezado guardado en allArticles
  // localStorage.getItem('article-edit')

  // se dibuja el formulario HTML desde aca
  // se dibuja el boton de editar y se agrega metodo editArticle();

  const button = document.getElementById('edit-article');
  button.addEventListener('click', postArticle)

}

function postArticle() {
  console.log('guardando nueva version ');
  // insertar en db nueva version articulo 
  let body = {}
  try {
    const result = ''
    window.location.href = "./article-all"
  } catch (error) {
    console.log('error: ', error);
  }

}

getArticleData() // trigger