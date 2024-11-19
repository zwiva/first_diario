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

// DESDE VISTA HOME
// DESDE VISTA SECCIONES

// 🚨 EN ESTA VISTA SE VEN TODOS LOS ARTICULOS DE UNA SOLA SECCION 🚨

const sections = [
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
  },
  {
    "idSeccion": 11,
    "nombre": "Investigación y Desarrollo",
    "descripcion": "Un vistazo a los avances más recientes en investigación y desarrollo en el campo de la inteligencia artificial."
  },
  {
    "idSeccion": 12,
    "nombre": "Entrevistas y Opinión",
    "descripcion": "Lee entrevistas con expertos y opiniones sobre las tendencias, desafíos y el futuro de la inteligencia artificial."
  },
  {
    "idSeccion": 13,
    "nombre": "Proyectos y Tutoriales",
    "descripcion": "Encuentra proyectos prácticos y tutoriales para aprender a implementar inteligencia artificial en diversos campos."
  },
  {
    "idSeccion": 14,
    "nombre": "Eventos y Conferencias",
    "descripcion": "Mantente informado sobre los próximos eventos y conferencias en inteligencia artificial alrededor del mundo."
  }
]

let articlesBySection = []

function getArticlesBySection() {
  // localStorage.getItem('section-id') 📌

  articlesBySection = [
    {
      "id": 2,
      "title": "IA en la Educación: Personalización del Aprendizaje",
      "urlImgPpal": "https://example.com/images/ia-educacion.jpg",
      "resumen": "Descubre cómo la IA está permitiendo personalizar el aprendizaje para mejorar la experiencia educativa de cada estudiante.",
      "parrafo1": "Las plataformas de aprendizaje impulsadas por IA pueden adaptar el contenido al ritmo y estilo de cada estudiante.",
      "urlImg1": "https://example.com/images/personalizacion.jpg",
      "parrafo2": "Los algoritmos pueden analizar el rendimiento de los estudiantes y ofrecer recomendaciones para mejorar su comprensión.",
      "urlImg2": "https://example.com/images/analisis.jpg",
      "parrafo3": "Esta personalización mejora la motivación y permite una experiencia de aprendizaje más efectiva.",
      "urlImg3": "https://example.com/images/motivacion.jpg",
      "parrafo4": "Sin embargo, existen desafíos relacionados con el acceso equitativo y la dependencia de la tecnología en el aula.",
      "urlImg4": "https://example.com/images/equidad.jpg",
      "parrafo5": "A medida que la tecnología avance, es probable que veamos aún más aplicaciones de IA en el ámbito educativo.",
      "urlImg5": "https://example.com/images/futuro-educacion.jpg",
      "enlaceRelacionado": "https://example.com/articulos/ia-educacion-personalizacion",
      "fechaPublicacion": "2024-11-02",
      "estadoPublicacion": "publicado",
      "idAutor": 102,
      "seccion": "Educación"
    },
    {
      "id": 3,
      "title": "Evaluación Automática con IA: Un Cambio en la Educación",
      "urlImgPpal": "https://example.com/images/evaluacion.jpg",
      "resumen": "Analizamos cómo la IA permite realizar evaluaciones automáticas y personalizadas en el sector educativo.",
      "parrafo1": "La IA puede facilitar la corrección automática de exámenes y tareas, ahorrando tiempo a los profesores.",
      "urlImg1": "https://example.com/images/correccion.jpg",
      "parrafo2": "Los sistemas de evaluación inteligente pueden analizar patrones de errores comunes y ayudar a los estudiantes a mejorar.",
      "urlImg2": "https://example.com/images/patrones.jpg",
      "parrafo3": "Esto permite un enfoque más detallado y personalizado en el aprendizaje.",
      "urlImg3": "https://example.com/images/aprendizaje.jpg",
      "parrafo4": "No obstante, la precisión de estos sistemas puede plantear dudas y requiere un monitoreo constante.",
      "urlImg4": "https://example.com/images/precision.jpg",
      "parrafo5": "Con un uso responsable, la IA tiene el potencial de transformar la forma en que evaluamos el aprendizaje.",
      "urlImg5": "https://example.com/images/futuro-evaluacion.jpg",
      "enlaceRelacionado": "https://example.com/articulos/ia-evaluacion-automatica",
      "fechaPublicacion": "2024-11-03",
      "estadoPublicacion": "publicado",
      "idAutor": 103,
      "seccion": "Educación"
    },
    {
      "id": 4,
      "title": "Tutores Virtuales: IA al Servicio de los Estudiantes",
      "urlImgPpal": "https://example.com/images/tutor-virtual.jpg",
      "resumen": "Exploramos cómo los tutores virtuales de IA pueden ayudar a los estudiantes en sus estudios y resolver dudas en tiempo real.",
      "parrafo1": "Los tutores virtuales permiten a los estudiantes obtener asistencia personalizada en cualquier momento.",
      "urlImg1": "https://example.com/images/ayuda.jpg",
      "parrafo2": "Mediante el uso de IA, los tutores virtuales pueden responder preguntas complejas y ofrecer explicaciones detalladas.",
      "urlImg2": "https://example.com/images/respuestas.jpg",
      "parrafo3": "Esto facilita el aprendizaje autónomo y complementa el trabajo de los profesores.",
      "urlImg3": "https://example.com/images/autonomia.jpg",
      "parrafo4": "Sin embargo, la precisión de sus respuestas sigue siendo un reto importante.",
      "urlImg4": "https://example.com/images/reto.jpg",
      "parrafo5": "El futuro de los tutores virtuales apunta a ser una herramienta complementaria en la educación.",
      "urlImg5": "https://example.com/images/futuro-tutor.jpg",
      "enlaceRelacionado": "https://example.com/articulos/ia-tutor-virtual",
      "fechaPublicacion": "2024-11-04",
      "estadoPublicacion": "publicado",
      "idAutor": 104,
      "seccion": "Educación"
    },
    {
      "id": 5,
      "title": "IA y la Enseñanza de Idiomas: Una Nueva Era",
      "urlImgPpal": "https://example.com/images/ia-idiomas.jpg",
      "resumen": "La inteligencia artificial está revolucionando el aprendizaje de idiomas con aplicaciones interactivas y personalizadas.",
      "parrafo1": "Las aplicaciones de IA ofrecen un aprendizaje de idiomas personalizado y adaptativo.",
      "urlImg1": "https://example.com/images/aprendizaje-idiomas.jpg",
      "parrafo2": "Utilizan procesamiento de lenguaje natural para ofrecer conversaciones realistas y útiles.",
      "urlImg2": "https://example.com/images/conversaciones.jpg",
      "parrafo3": "Los estudiantes pueden practicar la pronunciación y recibir retroalimentación en tiempo real.",
      "urlImg3": "https://example.com/images/pronunciacion.jpg",
      "parrafo4": "Existen debates sobre el papel de la IA frente a los profesores humanos en la enseñanza de idiomas.",
      "urlImg4": "https://example.com/images/debate.jpg",
      "parrafo5": "La IA tiene el potencial de complementar y mejorar la enseñanza de idiomas en todo el mundo.",
      "urlImg5": "https://example.com/images/futuro-idiomas.jpg",
      "enlaceRelacionado": "https://example.com/articulos/ia-ensenanza-idiomas",
      "fechaPublicacion": "2024-11-05",
      "estadoPublicacion": "publicado",
      "idAutor": 105,
      "seccion": "Educación"
    },
    {
      "id": 6,
      "title": "Inteligencia Artificial en la Educación Infantil",
      "urlImgPpal": "https://example.com/images/ia-infantil.jpg",
      "resumen": "Conoce cómo la IA está comenzando a integrarse en la educación infantil y sus posibles beneficios y desafíos.",
      "parrafo1": "Las herramientas de IA para niños pueden hacer que el aprendizaje sea más atractivo y accesible.",
      "urlImg1": "https://example.com/images/ninos.jpg",
      "parrafo2": "Las aplicaciones interactivas permiten que los niños exploren y aprendan de manera autónoma.",
      "urlImg2": "https://example.com/images/interactivo.jpg",
      "parrafo3": "La IA puede ayudar a identificar áreas donde los niños necesitan más apoyo educativo.",
      "urlImg3": "https://example.com/images/apoyo.jpg",
      "parrafo4": "Los padres y educadores deben estar atentos a los riesgos de la exposición temprana a la tecnología.",
      "urlImg4": "https://example.com/images/riesgos.jpg",
      "parrafo5": "La IA podría marcar una diferencia significativa en el desarrollo educativo infantil en los próximos años.",
      "urlImg5": "https://example.com/images/futuro-infantil.jpg",
      "enlaceRelacionado": "https://example.com/articulos/ia-educacion-infantil",
      "fechaPublicacion": "2024-11-06",
      "estadoPublicacion": "publicado",
      "idAutor": 106,
      "seccion": "Educación"
    },
    {
      "id": 7,
      "title": "La IA en la Educación Inclusiva",
      "urlImgPpal": "https://example.com/images/ia-inclusiva.jpg",
      "resumen": "Explora cómo la IA puede ayudar a crear un entorno de aprendizaje más inclusivo para estudiantes con necesidades especiales.",
      "parrafo1": "La inteligencia artificial facilita herramientas de aprendizaje para estudiantes con discapacidades.",
      "urlImg1": "https://example.com/images/discapacidades.jpg",
      "parrafo2": "Las tecnologías de reconocimiento de voz y texto pueden ser de gran ayuda para estudiantes con discapacidades visuales o auditivas.",
      "urlImg2": "https://example.com/images/tecnologia-inclusiva.jpg",
      "parrafo3": "Las herramientas de IA también pueden crear experiencias personalizadas para mejorar la accesibilidad.",
      "urlImg3": "https://example.com/images/accesibilidad.jpg",
      "parrafo4": "Aun así, la educación inclusiva basada en IA presenta desafíos de implementación y adaptación.",
      "urlImg4": "https://example.com/images/desafios.jpg",
      "parrafo5": "La IA tiene el potencial de hacer la educación más inclusiva y accesible para todos.",
      "urlImg5": "https://example.com/images/futuro-inclusiva.jpg",
      "enlaceRelacionado": "https://example.com/articulos/ia-educacion-inclusiva",
      "fechaPublicacion": "2024-11-07",
      "estadoPublicacion": "publicado",
      "idAutor": 107,
      "seccion": "Educación"
    }
  ]
  // traer de db articulos de una seccion especifica 📌
  try {
    const result = ''
  } catch (error) {
    console.log('error: ', error);
  }
}

function goToArticle() {// guardar en LS el articulo escogido
  // localStorage.setItem('article-id')
  // window.location.href = "./article.html"
}

const seccion = sections.filter(section => section.nombre === 'Educación'); // DINAMIZAR
console.log('seccion', seccion);

const tituloSeccion = document.getElementById('title-section-one');
tituloSeccion.innerHTML = seccion[0].nombre

const descripcionSeccion = document.getElementById('section-description-one');
descripcionSeccion.innerHTML = seccion[0].descripcion

const articulosContainer = document.getElementById('articles-by-section');

articlesBySection.forEach(articulo => {

  const eachArticle = document.createElement('div');
  eachArticle.classList = ['section_each-news'];

  const articleDetail = `
  <h4 class="section_each-news--title">${articulo.titulo}</h4>

  <img class="section_each-news--img" src="${'https://mediatek-marketing.transforms.svdcdn.com/production/posts/MediaTek-IA-2023.jpg?w=2048&h=1075&q=80&auto=format&fit=crop&dm=1688130337&s=3b56535c28f441a34db9455d64444cb7'}" alt="">

  <p class="section_each-news--text">${articulo.resumen}</p>
  <div class="section_each-news--link">
  <a href="${articulo.enlaceRelacionado}">Ir a noticia</a>
  </div>
  `

  eachArticle.innerHTML = articleDetail;
  // console.log('each article', eachArticle);

  articulosContainer.appendChild(eachArticle);
});

let ex = `
<div class="section_each-news">

<h4 class="section_each-news--title">titulo</h4>
<img class="section_each-news--img"
  src="https://mediatek-marketing.transforms.svdcdn.com/production/posts/MediaTek-IA-2023.jpg?w=2048&h=1075&q=80&auto=format&fit=crop&dm=1688130337&s=3b56535c28f441a34db9455d64444cb7"
  alt="">
<p class="section_each-news--text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsa
  placeat pariatur porro quis amet a
  vitae consequatur id aut ex sequi iste culpa eaque perspiciatis. Magni quia ex illo.</p>
<div class="section_each-news--link">
  <a href="">Ir a noticia</a>
</div>
</div>
`