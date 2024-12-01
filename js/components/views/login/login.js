import { CONFIG } from '../../../../config/config';
import { login } from './../../../utils/auth';

document.getElementById('btnlogin').addEventListener('click', async () => {

  if (CONFIG.active) {
    const username = document.getElementById('user').value;
    const password = document.getElementById('pass').value;
  
    try {
      const result = await login(username, password);
      if (!result?.isSuccess) {
        alert('Credenciales incorrectas');
        return;
      }
      window.location.href = "./index.html"
    } catch (error) {
      console.log('error en login: ', error);
      alert(`Error: ${error}`);
    }
  } else {
    alert('🔒 app inactiva 🔒')
  }

});