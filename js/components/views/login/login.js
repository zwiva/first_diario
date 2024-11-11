console.log('andando el login.js');

export function logIn() {
  const usrElement = document.getElementById('user');
  let usr = usrElement.value;

  const pswElement = document.getElementById('pass');
  let psw = pswElement.value;

  let data = {
    usr, psw
  }
  console.log('usr', usr)
  console.log('psw', psw)

  localStorage.setItem('data', JSON.stringify(data))

  // llamar api de usuario
  // retornar datos usuarios
  
  // let result = getIn(data) // setea el localStorage con data
  // console.log('acaaaa', result);

  window.location.href = "./extra.html" // a todo evento redirige
  // window.location.href = "./index.html" // a todo evento redirige
}

document.querySelector('#btnlogin').addEventListener('click', logIn)

