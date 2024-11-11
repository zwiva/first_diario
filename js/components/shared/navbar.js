const appRoutes = [
  {
    "home": "index.html",
    "routeType": "shared",
  },
  {
    "about": "nosotros.html",
    "routeType": "general",
  },
  {
    "sections": "secciones.html",
    "routeType": "shared",
  },
  {
    "register": "registro.html",
    "routeType": "general",
  },
  {
    "login": "login.html",
    "routeType": "shared",
  },
  {
    "dashboard": "dashboard.html",
    "routeType": "shared",
  },
  // {
  //   "article": "article.html",
  //   "routeType": "shared",
  // },
  {
    "articles": "article-all.html",
    "routeType": "internal",
  },
  {
    "articlenew": "article-new.html",
    "routeType": "internal",
  },
  {
    "articledit": "article-edit.html",
    "routeType": "internal",
  },
  {
    "users": "user-all.html",
    "routeType": "internal",
  },
  {
    "usernew": "user-create.html",
    "routeType": "internal",
  },
  {
    "useredit": "user-edit.html",
    "routeType": "internal",
  },
]



export function navbarComponent() {

  // condicionar de acuerdo al tipo de usuario --> sacar de localStorage

  const navbar = document.createElement('nav');

  navbar.className = "navbar";
  navbar.innerHTML = `
    <div class="navbar-body">
      
      <a class="nav-item general-item" href="index.html">Noticias</a>
      <a class="nav-item general-item" href="nosotros.html">El faro</a>
      <a class="nav-item general-item" href="secciones.html">Secciones</a>
      <a class="nav-item general-item" href="registro.html">Registro</a>
      <a class="nav-item general-item" href="login.html">Login</a>
      <a class="nav-item general-item" href="dashboard.html">Cuenta</a>
      
      <a class="nav-item internal-item" href="article-all.html">Articulos</a>
      <a class="nav-item internal-item" href="article-new.html">Nuevo articulo</a>
      <a class="nav-item internal-item" href="article-edit.html">Editar articulo (no final)</a>
      <a class="nav-item internal-item" href="user-all.html">Usuarios</a>
      <a class="nav-item internal-item" href="user-create.html">Crear usuario</a>
      <a class="nav-item internal-item" href="user-edit.html">Editar usuario (no final)</a>

    
      <a class="nav-item general-item closeSession">Cerrar sesion</a>
    
      </div>
  `;

  navbar.querySelector('.closeSession').addEventListener('click', () => {
    alert(`quiero cerrar`);
  });

  return navbar;
}


export function renderNavbar(containerId) {
  const container = document.getElementById(containerId);
  container.append(navbarComponent());
  // container.innerHTML = navbarComponent();
}


