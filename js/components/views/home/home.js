
// 🚨 EN ESTA VISTA OCURRE LO SIGUIENTE: 🚨

// Método para desencriptar el jwt
// function init() {
//   const token = getAuthToken();
//   console.log('token --->', token);
// }

// init();

// IZQ: MOSTRAR 3 ARTICULOS MAS RECIENTES ( top 3 ) || 

// CENTRO: MOSTRAR 3 ARTICULOS MAS RECIENTES ( top 3 ) ||

// DER: MOSTRAR SECCIONES, DEBEN LLEGAR TODAS

const articles = [
  {
    "id": 1,
    "title": "El Impacto de la IA en la Medicina Moderna",
    "urlImgPpal": "https://example.com/images/ia-medicina.jpg",
    "resumen": "Exploramos cómo la inteligencia artificial está revolucionando la medicina, desde diagnósticos precisos hasta tratamientos personalizados.",
    "parrafo1": "La inteligencia artificial ha comenzado a transformar el campo médico con aplicaciones que ayudan a los médicos a diagnosticar enfermedades más rápido y con mayor precisión.",
    "urlImg1": "https://example.com/images/diagnostico.jpg",
    "parrafo2": "Además, los algoritmos de aprendizaje profundo están permitiendo identificar patrones complejos en datos médicos que antes eran imposibles de detectar.",
    "urlImg2": "https://example.com/images/algoritmo.jpg",
    "parrafo3": "Estos avances no solo ahorran tiempo, sino que también mejoran los resultados de los pacientes mediante la personalización de los tratamientos.",
    "urlImg3": "https://example.com/images/tratamientos.jpg",
    "parrafo4": "Sin embargo, la implementación de IA en la medicina plantea desafíos éticos, especialmente en la privacidad y la toma de decisiones clínicas.",
    "urlImg4": "https://example.com/images/etica.jpg",
    "parrafo5": "A pesar de estos desafíos, se espera que la IA continúe desempeñando un papel clave en el futuro de la medicina.",
    "urlImg5": "https://example.com/images/futuro.jpg",
    "enlaceRelacionado": "https://example.com/articulos/ia-medicina-avances",
    "fechaPublicacion": "2024-11-01",
    "estadoPublicacion": "publicado",
    "idAutor": 101,
    "secciones": "Medicina"
  },
  {
    "id": 2,
    "title": "Machine Learning y el Reconocimiento Facial",
    "urlImgPpal": "https://example.com/images/reconocimiento-facial.jpg",
    "resumen": "Analizamos cómo el machine learning impulsa el desarrollo de tecnologías de reconocimiento facial y las controversias que las rodean.",
    "parrafo1": "El reconocimiento facial se ha convertido en una herramienta poderosa, impulsada principalmente por los algoritmos de machine learning.",
    "urlImg1": "https://example.com/images/facial.jpg",
    "parrafo2": "Estos sistemas identifican rostros humanos con una precisión cada vez mayor, empleando redes neuronales convolucionales.",
    "urlImg2": "https://example.com/images/redes.jpg",
    "parrafo3": "Sin embargo, el uso de esta tecnología plantea problemas de privacidad y discriminación algorítmica.",
    "urlImg3": "https://example.com/images/privacidad.jpg",
    "parrafo4": "La regulación del reconocimiento facial es un tema caliente, con legisladores y defensores de los derechos civiles demandando un uso más controlado.",
    "urlImg4": "https://example.com/images/regulacion.jpg",
    "parrafo5": "A pesar de las controversias, muchas industrias siguen invirtiendo en su desarrollo debido a sus aplicaciones prácticas en seguridad y marketing.",
    "urlImg5": "https://example.com/images/industrias.jpg",
    "enlaceRelacionado": "https://example.com/articulos/reconocimiento-facial-etica",
    "fechaPublicacion": "2024-10-20",
    "estadoPublicacion": "publicado",
    "idAutor": 102,
    "secciones": "Privacidad"
  },
  {
    "id": 3,
    "title": "La IA en la Industria Automotriz",
    "urlImgPpal": "https://example.com/images/ia-automotriz.jpg",
    "resumen": "La inteligencia artificial está rediseñando la industria automotriz con avances en vehículos autónomos y mantenimiento predictivo.",
    "parrafo1": "Los vehículos autónomos son quizás el ejemplo más claro del impacto de la IA en la industria automotriz.",
    "urlImg1": "https://example.com/images/autonomos.jpg",
    "parrafo2": "Gracias a la IA, los autos pueden ahora identificar obstáculos, planificar rutas y mejorar la seguridad vial.",
    "urlImg2": "https://example.com/images/seguridad.jpg",
    "parrafo3": "El mantenimiento predictivo es otra área donde la IA ayuda a evitar problemas antes de que ocurran, ahorrando costos.",
    "urlImg3": "https://example.com/images/mantenimiento.jpg",
    "parrafo4": "Las grandes compañías automotrices están integrando IA para ofrecer experiencias de conducción más seguras y cómodas.",
    "urlImg4": "https://example.com/images/conduccion.jpg",
    "parrafo5": "A pesar de los avances, la implementación de IA en vehículos autónomos enfrenta desafíos regulatorios y éticos.",
    "urlImg5": "https://example.com/images/desafios.jpg",
    "enlaceRelacionado": "https://example.com/articulos/ia-autos-autonomos",
    "fechaPublicacion": "2024-09-15",
    "estadoPublicacion": "publicado",
    "idAutor": 103,
    "secciones": "Automotriz"
  },
  {
    "id": 4,
    "title": "Inteligencia Artificial en la Educación",
    "urlImgPpal": "https://example.com/images/ia-educacion.jpg",
    "resumen": "La IA transforma la educación al personalizar el aprendizaje y asistir a los educadores en la gestión de clases y estudiantes.",
    "parrafo1": "Con la ayuda de la IA, los sistemas educativos ahora pueden ofrecer experiencias de aprendizaje personalizadas.",
    "urlImg1": "https://example.com/images/aprendizaje.jpg",
    "parrafo2": "Los algoritmos de IA permiten ajustar el contenido educativo a las necesidades y capacidades de cada estudiante.",
    "urlImg2": "https://example.com/images/contenido.jpg",
    "parrafo3": "Las plataformas de tutoría virtual impulsadas por IA están cada vez más presentes, mejorando el acceso a la educación.",
    "urlImg3": "https://example.com/images/tutoria.jpg",
    "parrafo4": "Sin embargo, el uso de IA en educación plantea preguntas sobre la privacidad y el papel del docente en la era digital.",
    "urlImg4": "https://example.com/images/docente.jpg",
    "parrafo5": "La IA en educación sigue evolucionando, con más herramientas que apoyan tanto a alumnos como a profesores.",
    "urlImg5": "https://example.com/images/herramientas.jpg",
    "enlaceRelacionado": "https://example.com/articulos/ia-educacion",
    "fechaPublicacion": "2024-08-05",
    "estadoPublicacion": "publicado",
    "idAutor": 104,
    "secciones": "Educación"
  },
  {
    "id": 5,
    "title": "Robots Sociales y la IA en el Hogar",
    "urlImgPpal": "https://example.com/images/robots-sociales.jpg",
    "resumen": "Los robots sociales impulsados por IA están comenzando a formar parte del hogar, asistiendo en tareas domésticas y ofreciendo compañía.",
    "parrafo1": "Los robots sociales, como asistentes de voz y robots para el hogar, son cada vez más comunes en el mercado.",
    "urlImg1": "https://example.com/images/asistentes.jpg",
    "parrafo2": "Estos robots utilizan IA para entender y responder a comandos de voz, ayudar en tareas y brindar entretenimiento.",
    "urlImg2": "https://example.com/images/voz.jpg",
    "parrafo3": "Además, los robots sociales son diseñados para interactuar de forma amigable y respetuosa con los humanos.",
    "urlImg3": "https://example.com/images/amistad.jpg",
    "parrafo4": "La adopción de robots en el hogar plantea preguntas éticas sobre la privacidad y la dependencia de la tecnología.",
    "urlImg4": "https://example.com/images/dependencia.jpg",
    "parrafo5": "A medida que los robots sociales avanzan, la IA sigue mejorando su capacidad de respuesta y personalización en el hogar.",
    "urlImg5": "https://example.com/images/personalizacion.jpg",
    "enlaceRelacionado": "https://example.com/articulos/robots-sociales",
    "fechaPublicacion": "2024-07-15",
    "estadoPublicacion": "publicado",
    "idAutor": 105,
    "secciones": "Hogar"
  },
  {
    "id": 6,
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
    "id": 7,
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
    "id": 8,
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
    "id": 9,
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
    "id": 10,
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
    "id": 11,
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
    window.location.href = 'secciones.html';
  })

  link.appendChild(titulo)
  // console.log('link', link);

  allSections.appendChild(link);

});
