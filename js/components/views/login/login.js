import { login, logout } from './../../../utils/auth';

document.getElementById('btnlogin').addEventListener('click', async () => {

  const username = document.getElementById('user').value;
  const password = document.getElementById('pass').value;

  try {
    const result = await login(username, password);
    console.log('result --->', result);
    if (!result?.isSuccess) {
      alert('Credenciales incorrectas');
      return;
    }

    window.location.href = "./index.html" // a todo evento redirige

  } catch (error) {
    alert(`Error: ${error}`);
    console.log('error en login: ', error);
  }
});