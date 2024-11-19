function detectRole() {
  let idRole = 3;

  if (localStorage.getItem('navigation')) {
    let data = JSON.parse(localStorage.getItem('navigation'))
    idRole = data.navigation.id_role;
  }
  // idRole = 2
  return idRole;
}

const appRoutes = [ // editar elementos
  {
    "name": "Noticias",
    "href": "index.html",
    "type": "global",
    "status": "unregistered",
    "color": "white"
  },
  {
    "name": "Secciones",
    "href": "secciones.html",
    "type": "global",
    "status": "unregistered",
    "color": "white"
  },
  {
    "name": "Registro",
    "href": "registro.html",
    "type": "unregistered",
    "status": "unregistered",
    "color": "white"
  },
  {
    "name": "Login",
    "href": "login.html",
    "type": "unregistered",
    "status": "unregistered",
    "color": "var(--nav-item--accent)"
  },
  {
    "name": "+Nuevo artículo",
    "href": "article-new.html",
    "type": "internal",
    "status": "registered",
    "color": "white"
  },
  {
    "name": "Artículos",
    "href": "article-all.html",
    "type": "internal",
    "status": "registered",
    "color": "white"
  },
  {
    "name": "+Nuevo Usuario",
    "href": "user-new.html",
    "type": "superadmin",
    "status": "registered",
    "color": "white"
  },
  {
    "name": "Usuarios",
    "href": "user-all.html",
    "type": "superadmin",
    "status": "registered",
    "color": "white"
  },
  {
    "name": "Cuenta",
    "href": "dashboard.html",
    "type": "premium",
    "status": "registered",
    "color": "white"
  }
]

export function navbarComponent() {
  const idRole = detectRole();
  let navByRole;
  let navString = '';
  const topNav = ` 
    <a class="nav-item" href="${appRoutes[0].href}">${appRoutes[0].name}</a>
    <a class="nav-item" href="${appRoutes[1].href}">${appRoutes[1].name}</a>
  `;

  appRoutes.forEach(route => {

    if (idRole === 1 && route.type == 'superadmin' || idRole === 1 && route.status == 'registered') {
      const a = document.createElement('a');
      a.classList = ['nav-item'];
      a.innerHTML = route.name;
      a.href = route.href;
      navString += a.outerHTML;
      navByRole = navString;
    } else if (idRole === 2 && route.type == 'internal') {
      const a = document.createElement('a');
      a.classList = ['nav-item'];
      a.innerHTML = route.name;
      a.href = route.href;
      navString += a.outerHTML;
      navByRole = navString;
    } else if (idRole == 3 && route.type == 'unregistered') {
      const a = document.createElement('a');
      a.classList = ['nav-item'];
      a.style.color = route.color;
      a.innerHTML = route.name;
      a.href = route.href;
      navString += a.outerHTML;
      navByRole = navString;
    } else if (idRole === 4 && route.type == 'premium') {
      const a = document.createElement('a');
      a.classList = ['nav-item'];
      a.innerHTML = route.name;
      a.href = route.href;
      navString += a.outerHTML;
      navByRole = navString;
    }

  });

  const navbar = document.createElement('nav');
  navbar.className = "navbar";
  if (idRole == 3) {
    navbar.innerHTML = `
      <div class="navbar-body" id="navbar-body">
        ${topNav}
        ${navByRole}
      </div>
    `;
  } else {
    navbar.innerHTML = `
      <div class="navbar-body" id="navbar-body">
        ${topNav}
        ${navByRole}
        <a class="nav-item closeSession" style="color: var(--nav-item--accent);">Cerrar sesion</a></div>
      </div>
    `;
    navbar.querySelector('.closeSession').addEventListener('click', () => {
      localStorage.removeItem('auth-token');
      localStorage.removeItem('navigation');
      window.location.href = "./index.html"
    });
  }
  return navbar;
}

export function renderNavbar(containerId) {
  const container = document.getElementById(containerId);
  container.append(navbarComponent());
}

// disponible
// function init() {
//   const token = getAuthToken();
//   console.log('token --->', token);
// }

// init();