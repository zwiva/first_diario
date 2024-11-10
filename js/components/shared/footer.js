export function footerComponent() {
  return `
    <div class="footer">
      
      <div class="footer-body">
      
        <div style="display: flex; text-align: center;">
          <img src="" style="background-color: white;height: 80px; width: 80px; margin:0.5em;">
          <h3>El faro de la IA</h3>
        </div>
      
        <div style="margin: 1em;">
          <a class="footer-item" href="index.html">Home</a>
          <a class="footer-item" href="registro.html">Registrarse</a>
          <a class="footer-item" href="login.html">Iniciar sesión</a>
        </div>
    
      </div>
    
    </div>
  `;
}

export function renderFooter(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = footerComponent();
}