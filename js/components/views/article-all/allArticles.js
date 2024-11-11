console.log('andando allArticles.js');

const articles = [
  {
    "idArticulo": 1,
    "titulo": "El Impacto de la IA en la Medicina Moderna",
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
    "secciones": ["Medicina", "Tecnología", "Ética"]
  },
  {
    "idArticulo": 2,
    "titulo": "Machine Learning y el Reconocimiento Facial",
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
    "secciones": ["Seguridad", "Tecnología", "Privacidad"]
  },
  {
    "idArticulo": 3,
    "titulo": "La IA en la Industria Automotriz",
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
    "secciones": ["Automotriz", "Innovación", "Seguridad"]
  },
  {
    "idArticulo": 4,
    "titulo": "Inteligencia Artificial en la Educación",
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
    "secciones": ["Educación", "Tecnología", "Innovación"]
  },
  {
    "idArticulo": 5,
    "titulo": "Robots Sociales y la IA en el Hogar",
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
    "secciones": ["Hogar", "Robótica", "Ética"]
  }
]

for (let index = 0; index < articles.length; index++) {
  const element = articles[index];
  console.log('articulo', element);
}

let html = `
<table style="width: 80%;">
    
<thead>
  <th>Titulo</th>
  <th>Secciones</th>
  <th>Fecha creación</th>
  <th>Acciones</th>
</thead>

<tbody>

  <tr>
    <td>titulo 1</td>
    <td>seccion 1</td>
    <td>01/01/1990</td>
    <td class="table_actions" style="text-align: center;"><button>editar</button><button>Eliminar</button></td>
  </tr>
  <tr>
    <td>titulo 2</td>
    <td>seccion 1, seccion 3</td>
    <td>01/01/1990</td>
    <td class="table_actions" style="text-align: center;"><button>editar</button><button>Eliminar</button></td>
  </tr>
  <tr>
    <td>titulo 3</td>
    <td>seccion 2</td>
    <td>01/01/1990</td>
    <td class="table_actions" style="text-align: center;"><button>editar</button><button>Eliminar</button></td>
  </tr>
  <tr>
    <td>titulo 4</td>
    <td>seccion 1, seccion 4</td>
    <td>01/01/1990</td>
    <td class="table_actions" style="text-align: center;"><button>editar</button><button>Eliminar</button></td>
  </tr>

</tbody>

</table>
`
{/* <tr>
<td>titulo 1</td>
<td>seccion 1</td>
<td>01/01/1990</td>
<td class="table_actions" style="text-align: center;"><button>editar</button><button>Eliminar</button></td>
</tr> */}

const articulosContainer = document.getElementById('articulos-container');

// Itera sobre el arreglo de artículos
articles.forEach(articulo => {
  // Crea un elemento div para cada artículo
  const articuloTr = document.createElement('tr');

  const titulo = document.createElement('td');
  titulo.innerHTML = articulo.titulo
  articuloTr.appendChild(titulo)

  const seccion = document.createElement('td');
  seccion.innerHTML = articulo.secciones
  articuloTr.appendChild(seccion)

  const autor = document.createElement('td');
  autor.innerHTML = articulo.idAutor
  autor.style.textAlign = 'center';
  articuloTr.appendChild(autor)

  const fechaPublicacion = document.createElement('td');
  fechaPublicacion.innerHTML = articulo.fechaPublicacion
  fechaPublicacion.style.textAlign = 'center';
  articuloTr.appendChild(fechaPublicacion)

  const estadoPublicacion = document.createElement('td');
  estadoPublicacion.innerHTML = articulo.estadoPublicacion
  estadoPublicacion.style.textAlign = 'center';
  articuloTr.appendChild(estadoPublicacion)

  const acciones = document.createElement('td');
  acciones.innerHTML = `<button onclick=editarArticulo(${articulo.idArticulo})>editar</button><button onclick=eliminarArticulo(${articulo.idArticulo})>Eliminar</button>`
  articuloTr.appendChild(acciones)
  
  // Agrega el artículo al contenedor principal
  articulosContainer.appendChild(articuloTr);
});

function editarArticulo(id){
  console.log('editar articulo', id);
}

function eliminarArticulo(id){
  console.log('eliminar articulo', id);
}