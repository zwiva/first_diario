export function footerComponent() {
  return `
    <div class="footer">
      <div class="footer-body">
        <a class="footer-item" href="index.html">Home</a>
        <a class="footer-item" href="articles.html">Registrarse</a>
        <a class="footer-item" href="login.html">Iniciar sesión</a>
      </div>
    </div>
  `;
}

export function renderFooter(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = footerComponent();
}