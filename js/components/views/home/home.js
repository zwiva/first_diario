
// 🚨 vista principal 🚨

function detectRole() {
  let idRole = 3;

  if (localStorage.getItem('navigation')) {
    let data = JSON.parse(localStorage.getItem('navigation'))
    idRole = data.navigation.id_role;
  }
  console.log('idRole', idRole);
  // idRole = 2
  return idRole;
}

const articles = []
function getArticlesByRole() {
  const idRole = detectRole()
  // desde db 📌
  try {
    const result = ''
  } catch (error) {
    console.log('error: ', error);
  }
}

let sections = []
function getAllSections() {

  // desde db 📌
  try {
    const result = ''
  } catch (error) {
    console.log('error: ', error);
  }

}

sections = [ // version antigua
  {
    "idSeccion": 1,
    "nombre": "Medicina",
    "descripcion": "Explora cómo la inteligencia artificial está transformando la medicina, desde diagnósticos precisos hasta el desarrollo de tratamientos innovadores."
  },
  {
    "idSeccion": 2,
    "nombre": "Herramientas y tecnologías",
    "descripcion": "Conoce las herramientas y tecnologías más recientes que impulsan el desarrollo y la implementación de IA en diversos campos."
  },
  {
    "idSeccion": 3,
    "nombre": "Ética y regulación",
    "descripcion": "Discute los aspectos éticos y las regulaciones necesarias para el desarrollo y uso responsable de la inteligencia artificial en la sociedad."
  },
  {
    "idSeccion": 4,
    "nombre": "Seguridad",
    "descripcion": "Analiza las amenazas y las soluciones de seguridad en el ámbito de la inteligencia artificial, con un enfoque en la protección de datos y sistemas."
  },
  {
    "idSeccion": 5,
    "nombre": "Privacidad",
    "descripcion": "Examina los desafíos y las estrategias para proteger la privacidad de los usuarios en aplicaciones impulsadas por IA."
  },
  {
    "idSeccion": 6,
    "nombre": "Automotriz",
    "descripcion": "Explora los avances en inteligencia artificial aplicados a la industria automotriz, como los vehículos autónomos y la optimización del transporte."
  },
  {
    "idSeccion": 7,
    "nombre": "Innovación",
    "descripcion": "Descubre las ideas y proyectos más innovadores en el ámbito de la inteligencia artificial que están cambiando el mundo."
  },
  {
    "idSeccion": 8,
    "nombre": "Educación",
    "descripcion": "Investiga cómo la inteligencia artificial está mejorando la educación mediante la personalización del aprendizaje y nuevas metodologías."
  },
  {
    "idSeccion": 9,
    "nombre": "Hogar",
    "descripcion": "Conoce las aplicaciones de la inteligencia artificial en el hogar, desde asistentes virtuales hasta electrodomésticos inteligentes."
  },
  {
    "idSeccion": 10,
    "nombre": "Robótica",
    "descripcion": "Explora el mundo de la robótica y su relación con la inteligencia artificial en la creación de sistemas autónomos y robots inteligentes."
  }
]


// COMO SE DIBUJAN POR JS HAY QUE AGREGAR EVENTLISTENER PARA LAS SIGUIENTES FUNCIONES:
function goToArticle() {// guardar en LS el articulo escogido 
  // localStorage.setItem('article-id')
  // window.location.href = "./article.html"
}
function goToSection() {
  // localStorage.setItem('section-id')
  // window.location.href = "./section.html"
}

// IZQ: MOSTRAR 1 ARTICULOS por seccion  || max 3
const shortArticlesMain = document.getElementById('');



// CENTRO: MOSTRAR 1 ARTICULOS por seccion || max 3
const recentArticlesMain = document.getElementById('');



// DER: MOSTRAR SECCIONES, DEBEN LLEGAR TODAS
const allSections = document.getElementById('index-sections');
sections.forEach(section => {
  // console.log('seccion', section);
  const link = document.createElement('div')
  link.classList = ['section-title']
  link.style.cursor = 'pointer'

  const titulo = document.createElement('p')
  titulo.innerHTML = section.nombre

  link.addEventListener('click', function () {
    // console.log('param', section.nombre);
    localStorage.setItem('section-id')
    window.location.href = 'seccion.html';
  })

  link.appendChild(titulo)
  // console.log('link', link);

  allSections.appendChild(link);

});


getArticlesByRole()