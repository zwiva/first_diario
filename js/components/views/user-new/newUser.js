import { _createUser } from "./../../../services/user/user-service.js";
// 🚨 EN ESTA SECCION SE CREA UN NUEVO USUARIO: via admin o registro 🚨

let idRole = 3;
let token = '';

function detectUser() {
  if (localStorage.getItem('navigation')) {
    let role = JSON.parse(localStorage.getItem('navigation'))
    let token = JSON.parse(localStorage.getItem('authToken'))
    idRole = role.navigation.id_role;
    return [idRole, token.authToken]
  }
  // console.log('token---->', token.authToken);
  return [idRole]
}

const selectOptions = document.getElementById("select-options");
function setOptions() { // roles o medios de pago, depende de usuario
  let options = []

  idRole = detectUser()[0]

  // console.log('role en setOptions', idRole);

  if (idRole === 3) {
    options = [
      {
        name: 'Transferencia',
        id: 1
      },
      {
        name: 'Débito',
        id: 2
      },
      {
        name: 'Crédito',
        id: 3
      }
    ]
  } else if (idRole === 1) {
    token = detectUser()[1];
    options = [
      {
        name: 'Administrador',
        id: 1
      },
      {
        name: 'Reportero',
        id: 2
      },
      {
        name: 'Lector pago',
        id: 4
      }
    ]
  } else {
    options = []
  }

  const select = document.createElement('select');
  select.classList = ['form-input']
  select.id = 'usr-create-section'

  options.forEach(opt => {
    const option = document.createElement('option')
    option.value = opt.id
    option.textContent = opt.name
    select.appendChild(option);
  })
  selectOptions.appendChild(select)

}

const loginAndRedirect = () => {
  console.log('debe redireccionar a index y loguearlo');

  // window.location.href = 'index.html'
}

// boton ejecuta envio
const btn = document.getElementById("create-new-user");
btn.addEventListener('click', async function () {

  console.log('idRole actual: ', idRole);
  
  const nombre = document.getElementById('usr-create-name').value;
  const apellido = document.getElementById('usr-create-lastname').value;
  const apellido2 = document.getElementById('usr-create-surname').value;
  const rut = document.getElementById('usr-create-rut').value;
  const correo = document.getElementById('usr-create-email').value;
  const contrasena = document.getElementById('usr-create-pass').value;
  let tipoUsuario = idRole == 1 ? document.getElementById('usr-create-section').value : 4;

  let dataUser = {
    name: nombre,
    lastname: apellido,
    surname: apellido2,
    rut: rut,
    email: correo,
    pass: contrasena,
    id_role: tipoUsuario
  };

  try {

    const result = await createUser(dataUser, token); // true o false

    if (!result.isSuccess) {
      console.log('result ohno!: ', result);
      
    } else {
      console.log('result ok:', result);

      console.log('limpiar formulario');
      dataUser = {};
      document.getElementById('usr-create-name').value = '';
      document.getElementById('usr-create-lastname').value = '';
      document.getElementById('usr-create-surname').value = '';
      document.getElementById('usr-create-rut').value = '';
      document.getElementById('usr-create-email').value = '';
      document.getElementById('usr-create-pass').value = '';
      if (idRole === 3) {
        
        loginAndRedirect()
      } else {
        window.location.href = 'user-all.html'
      }
    }

  } catch (error) {
    console.log('error: ', error);
  }


});

setOptions() // trigger