import { _getAllSections, _get1LastArticleByEachSection } from "../../../services/article/article-service.js";
// 🚨 vista principal 🚨

async function getShortArticlesList() {
  let data = [
    {
      "id": 5,
      "title": "Terapias personalizadas con inteligencia artificial",
      "summary": "La IA permite crear tratamientos específicos para cada paciente, mejorando los resultados.",
      "img": "",
      "createdDate": "2024-11-23T03:21:23.000Z",
      "updateDate": null,
      "urlRecomend": "https://www.ejemplo.com/ia-terapias",
      "id_status": 1,
      "id_section": 1,
      "author": "Andrea Castro Castellón",
      "status": "Activo",
      "section": "Medicina",
      "content": [
        {
          "img": "",
          "position": 1,
          "paragraph": "La inteligencia artificial está revolucionando la medicina personalizada al analizar datos genéticos, clínicos y de estilo de vida para diseñar tratamientos específicos para cada paciente.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 2,
          "paragraph": "Por ejemplo, los algoritmos de IA pueden predecir cómo responderá un paciente a un medicamento, optimizando así la elección del tratamiento.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 3,
          "paragraph": "Además, estos sistemas están facilitando el desarrollo de nuevas terapias dirigidas, que tienen mayor efectividad y menos efectos secundarios.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        }
      ]
    },
    {
      "id": 10,
      "title": "IA generativa: herramientas para crear contenido único",
      "summary": "Explora herramientas que utilizan IA generativa para producir imágenes, textos y videos.",
      "img": "",
      "createdDate": "2024-11-23T03:21:23.000Z",
      "updateDate": null,
      "urlRecomend": "https://www.ejemplo.com/ia-generativa",
      "id_status": 1,
      "id_section": 2,
      "author": "Andrea Castro Castellón",
      "status": "Activo",
      "section": "Herramientas y tecnologías",
      "content": [
        {
          "img": "",
          "position": 1,
          "paragraph": "Las herramientas de IA generativa, como DALL·E y Stable Diffusion, están permitiendo la creación de imágenes únicas a partir de descripciones textuales.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 2,
          "paragraph": "GPT-4 de OpenAI es ampliamente utilizado para generar textos de alta calidad, desde artículos hasta guiones creativos.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 3,
          "paragraph": "Además, plataformas como Runway AI están explorando el potencial de la IA generativa en la producción de videos innovadores y personalizados.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        }
      ]
    },
    {
      "id": 15,
      "title": "El debate sobre la autonomía de los sistemas de IA",
      "summary": "¿Hasta qué punto debemos permitir que los sistemas de inteligencia artificial tomen decisiones críticas?",
      "img": "",
      "createdDate": "2024-11-23T03:21:23.000Z",
      "updateDate": null,
      "urlRecomend": "https://www.ejemplo.com/autonomia-ia",
      "id_status": 1,
      "id_section": 3,
      "author": "Andrea Castro Castellón",
      "status": "Activo",
      "section": "Ética y regulación",
      "content": [
        {
          "img": "",
          "position": 1,
          "paragraph": "Los sistemas de inteligencia artificial autónomos están ganando protagonismo, planteando preguntas sobre el nivel de control humano necesario.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 2,
          "paragraph": "Permitir que la IA tome decisiones críticas, como en el ámbito médico o militar, requiere garantizar altos estándares de seguridad y ética.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 3,
          "paragraph": "El debate sigue abierto, destacando la necesidad de un equilibrio entre innovación tecnológica y responsabilidad humana.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        }
      ]
    },
    {
      "id": 20,
      "title": "La IA en la detección de fraudes financieros",
      "summary": "Cómo las empresas están usando la IA para detectar actividades fraudulentas.",
      "img": "",
      "createdDate": "2024-11-23T03:21:23.000Z",
      "updateDate": null,
      "urlRecomend": "https://www.ejemplo.com/ia-deteccion-fraude",
      "id_status": 1,
      "id_section": 4,
      "author": "Andrea Castro Castellón",
      "status": "Activo",
      "section": "Seguridad",
      "content": [
        {
          "img": "",
          "position": 1,
          "paragraph": "Las empresas están utilizando inteligencia artificial para detectar patrones irregulares en transacciones financieras y prevenir fraudes.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 2,
          "paragraph": "Los algoritmos de aprendizaje automático analizan datos en tiempo real, identificando comportamientos sospechosos con gran precisión.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 3,
          "paragraph": "Además, la IA permite adaptar las estrategias de detección a nuevas tácticas de fraude, mejorando la respuesta ante amenazas emergentes.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        }
      ]
    },
    {
      "id": 25,
      "title": "Prototipos revolucionarios creados con IA",
      "summary": "Los inventos más impactantes creados gracias a la inteligencia artificial.",
      "img": "",
      "createdDate": "2024-11-23T03:21:23.000Z",
      "updateDate": null,
      "urlRecomend": "https://www.ejemplo.com/prototipos-ia",
      "id_status": 1,
      "id_section": 5,
      "author": "Andrea Castro Castellón",
      "status": "Activo",
      "section": "Privacidad",
      "content": [
        {
          "img": "",
          "position": 1,
          "paragraph": "La inteligencia artificial está permitiendo la creación de prototipos innovadores en áreas como la salud, la robótica y el transporte.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 2,
          "paragraph": "Ejemplos destacados incluyen prótesis inteligentes, vehículos autónomos y robots colaborativos.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 3,
          "paragraph": "Estos avances están redefiniendo lo que es posible en el diseño y desarrollo tecnológico.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        }
      ]
    },
    {
      "id": 30,
      "title": "Desafíos éticos de la IA en la educación",
      "summary": "Reflexiones sobre la privacidad de los estudiantes y el uso de sus datos en sistemas educativos.",
      "img": "",
      "createdDate": "2024-11-23T03:21:23.000Z",
      "updateDate": null,
      "urlRecomend": "https://www.ejemplo.com/ia-educacion-etica",
      "id_status": 1,
      "id_section": 6,
      "author": "Andrea Castro Castellón",
      "status": "Activo",
      "section": "Automotriz",
      "content": [
        {
          "img": "",
          "position": 1,
          "paragraph": "El uso de inteligencia artificial en la educación plantea importantes preguntas sobre la privacidad de los datos de los estudiantes.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 2,
          "paragraph": "Es fundamental garantizar que los sistemas educativos protegidos por IA cumplan con normas éticas y legales.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 3,
          "paragraph": "Los desarrolladores y educadores deben trabajar juntos para mitigar los riesgos y garantizar un uso responsable de la tecnología.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        }
      ]
    },
    {
      "id": 35,
      "title": "El futuro de la robótica en el hogar",
      "summary": "Dispositivos inteligentes que simplifican las tareas domésticas.",
      "img": "",
      "createdDate": "2024-11-23T03:21:23.000Z",
      "updateDate": null,
      "urlRecomend": "https://www.ejemplo.com/robotica-hogar",
      "id_status": 1,
      "id_section": 7,
      "author": "Andrea Castro Castellón",
      "status": "Activo",
      "section": "Innovación",
      "content": [
        {
          "img": "",
          "position": 1,
          "paragraph": "Los robots domésticos están evolucionando para realizar tareas como limpieza, cocina y vigilancia del hogar.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 2,
          "paragraph": "Estos dispositivos inteligentes pueden aprender hábitos de los usuarios y ofrecer soluciones personalizadas.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 3,
          "paragraph": "Con IA, los robots del hogar están cada vez más integrados en la vida cotidiana, facilitando un estilo de vida más cómodo y eficiente.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        }
      ]
    },
    {
      "id": 40,
      "title": "El impacto de la IA en la creatividad: una entrevista con artistas digitales",
      "summary": "Artistas exploran cómo las herramientas de IA están transformando su trabajo.",
      "img": "",
      "createdDate": "2024-11-23T03:21:23.000Z",
      "updateDate": null,
      "urlRecomend": "https://www.ejemplo.com/ia-creatividad",
      "id_status": 1,
      "id_section": 8,
      "author": "Andrea Castro Castellón",
      "status": "Activo",
      "section": "Educación",
      "content": [
        {
          "img": "",
          "position": 1,
          "paragraph": "Artistas digitales comparten su experiencia utilizando IA como herramienta creativa, discutiendo cómo estas tecnologías están ampliando las fronteras de la creatividad.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 2,
          "paragraph": "La IA ha permitido a los artistas crear obras de arte de manera colaborativa con las máquinas, generando nuevos estilos y formas de expresión.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 3,
          "paragraph": "Sin embargo, también surgen preocupaciones sobre la originalidad y el papel de la máquina en la creación artística, un debate que sigue vigente entre los creadores y los críticos del arte.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        }
      ]
    },
    {
      "id": 45,
      "title": "Cómo entrenar un modelo de machine learning en AWS",
      "summary": "Configura y entrena un modelo en Amazon Web Services con facilidad.",
      "img": "",
      "createdDate": "2024-11-23T03:21:23.000Z",
      "updateDate": null,
      "urlRecomend": "https://www.ejemplo.com/aws-machine-learning",
      "id_status": 1,
      "id_section": 9,
      "author": "Andrea Castro Castellón",
      "status": "Activo",
      "section": "Hogar",
      "content": [
        {
          "img": "",
          "position": 1,
          "paragraph": "En este artículo aprenderás a configurar y entrenar un modelo de machine learning en Amazon Web Services (AWS) utilizando su plataforma de entrenamiento en la nube.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 2,
          "paragraph": "Te enseñaremos cómo crear un entorno en AWS, cargar tus datos y utilizar herramientas como SageMaker para entrenar modelos con facilidad, sin necesidad de infraestructura propia.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 3,
          "paragraph": "Al final, sabrás cómo aprovechar la potencia de la nube para entrenar modelos de machine learning de manera más eficiente y escalable, optimizando el tiempo y los recursos de tu proyecto.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        }
      ]
    },
    {
      "id": 50,
      "title": "Cumbre global sobre inteligencia artificial",
      "summary": "Expertos de todo el mundo discuten el futuro de la IA en esta cumbre.",
      "img": "",
      "createdDate": "2024-11-23T03:21:23.000Z",
      "updateDate": null,
      "urlRecomend": "https://www.ejemplo.com/cumbre-global",
      "id_status": 1,
      "id_section": 10,
      "author": "Andrea Castro Castellón",
      "status": "Activo",
      "section": "Robótica",
      "content": [
        {
          "img": "",
          "position": 1,
          "paragraph": "La Cumbre Global sobre Inteligencia Artificial es uno de los eventos más esperados de 2024, donde los principales expertos de la IA discutirán el futuro de la tecnología y sus implicaciones en la sociedad.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 2,
          "paragraph": "Durante la cumbre, se tocarán temas como el impacto social de la IA, la automatización, las políticas públicas, la ética y la colaboración internacional en el avance de la inteligencia artificial.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        },
        {
          "img": "",
          "position": 3,
          "paragraph": "Será un espacio de debate crucial para comprender cómo los gobiernos, las empresas y la academia están trabajando juntos para dar forma a la evolución de la inteligencia artificial en las próximas décadas.",
          "updateDate": null,
          "createdDate": "2024-11-23 00:21:23.000000"
        }
      ]
    }
  ]
  
  try {
    const response = await _get1LastArticleByEachSection();

    if (response) {
      data = response.data;
      console.log('result getShortArticlesList: ', response.data);
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
      localStorage.setItem('short-article', JSON.stringify(shortArticle))
      // console.log('shortArticle', shortArticle);
    })
    link.classList = ['article_short--link']
    link.href = 'article.html';
    shortArticleElem.appendChild(link)

    shortArticlesList.appendChild(shortArticleElem)
  })



  // function goToArticle() {// guardar en LS el articulo escogido 
  //   // localStorage.setItem('article-id')
  //   // window.location.href = "./article.html"
  //    }


}

async function buildLatestOfAll() { // 10 o 3
  // CENTRO: MOSTRAR 1 ARTICULOS por seccion || max 3
  const recentArticlesMain = document.getElementById('');

  // function goToArticle() {// guardar en LS el articulo escogido 
  //   // localStorage.setItem('article-id')
  //   // window.location.href = "./article.html"
  //    }


}

//////


async function getAllSections() { // ok
  let data = []
  try {
    const response = await _getAllSections();
    if (response) {
      data = response.data;
      // console.log('result getAllSections: ', response.data);
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

buildView() // trigger