export function footerComponent() {
  return `
    <div class="footer">
      
      <div class="footer-body">
      
        <div style="display: flex; justify-content: center; text-align: center; flex-wrap: wrap;">
          <img src="../../../assets/images/image-13.png" style="height: 80px; width: auto; margin:0.5em;">
          <h3 style="align-self: flex-end;">El faro de la IA</h3>
        </div>
      
        <div style="margin: 1em; display:flex; justify-content: center; flex-wrap: wrap;">
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