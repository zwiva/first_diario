export function navbarComponent() {

  const navbar = document.createElement('nav');

  navbar.className = "navbar";
  navbar.innerHTML = `
    <div class="navbar-body">
      <a class="nav-item" href="index.html">Portada</a>
      <a class="nav-item" href="about.html">El diario</a>
      <a class="nav-item" href="sections.html">Secciones</a>
      <a class="nav-item" href="login.html">Login</a>
      <a class="nav-item closeSession">Cerrar sesion</a>
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


