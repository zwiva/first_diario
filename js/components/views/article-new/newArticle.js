// 🚨 EN ESTA VISTA SE CREA UN NUEVO ARTICULO 🚨

function detectUserId() {
  const user_id = 1;
  // codigo para detectar el usuario
  return user_id
}


const selectSections = document.getElementById("sections-create");
function getSections() {
  // crear selector con secciones desde db
  const sections = [ // CARGAR CON DB
    {
      name: 'primera',
      id: 1
    },
    {
      name: 'segunda',
      id: 2
    },
    {
      name: 'tercera',
      id: 3
    }
  ]

  const select = document.createElement('select');
  select.classList = ['form-input']
  select.id = 'art-create-section'

  sections.forEach(section => {
    const option = document.createElement('option')
    option.value = section.id
    option.textContent = section.name
    console.log('option', option);
    select.appendChild(option);
  })

  selectSections.appendChild(select)
}
getSections()

const btn = document.getElementById("save-new-article");
btn.addEventListener('click', async function () {

  const titulo = document.getElementById('art-create-title').value; //
  const urlMain = document.getElementById('art-create-img-main').value; //
  const resumen = document.getElementById('art-create-summary').value; //
  const par1 = document.getElementById('art-create-p1').value;
  const url1 = document.getElementById('art-create-img-1').value;
  const par2 = document.getElementById('art-create-p2').value;
  const url2 = document.getElementById('art-create-img-2').value;
  const par3 = document.getElementById('art-create-p3').value;
  const url3 = document.getElementById('art-create-img-3').value;
  const par4 = document.getElementById('art-create-p4').value;
  const url4 = document.getElementById('art-create-img-4').value;
  const par5 = document.getElementById('art-create-p5').value;
  const url5 = document.getElementById('art-create-img-5').value;
  const enlace = document.getElementById('art-create-link').value; //
  const seccion = document.getElementById('art-create-section').value; //

  let dataArticle = {
    id_user: detectUserId(),
    title: titulo,
    img: urlMain,
    summary: resumen,
    urlRecomend: enlace,
    id_section: parseInt(seccion),
    id_status: 1, // activo
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

  const result = await saveArticle(dataArticle);

  if (result) {
    console.log('limpiar formulario');
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
    document.getElementById('art-create-section').value = '';
  }

});

const saveArticle = async (data) => {
  console.log('guardar nuevo articulo', data)

  // guardado en db

  return true
}



// let dataArticle = {
//   id_user: detectUserId(),
//   title: "",
//   img: "",
//   summary: "",
//   urlRecomend: "",
//   id_section: "",
//   id_status: 1, // activo
//   content: [
//     {
//       position: 1,
//       paragraph: "",
//       img: "",
//     },
//     {
//       position: 2,
//       paragraph: "",
//       img: "",
//     },
//     {
//       position: 3,
//       paragraph: "",
//       img: "",
//     },
//     {
//       position: 4,
//       paragraph: "",
//       img: "",
//     },
//     {
//       position: 5,
//       paragraph: "",
//       img: "",
//     }
//   ]
// };