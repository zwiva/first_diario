import { CONFIG } from "../../../../config/config.js";
import { _createUser } from "./../../../services/user/user-service.js";
// 🚨 EN ESTA SECCION SE CREA UN NUEVO USUARIO: via admin o registro 🚨

let idRole = 3;

function detectRole() {
  let idRole = 3;

  if (localStorage.getItem('navigation')) {
    let data = JSON.parse(localStorage.getItem('navigation'))
    idRole = data.navigation.id_role;
  }

  return idRole;
}

function setOptions() { // roles o medios de pago, depende de usuario
  const selectOptions = document.getElementById("select-options");
  let options = []

  idRole = detectRole();

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

function drawForm() {

  const typeSelector = document.getElementById('select-description')
  const p = document.createElement('p')
  p.classList = ['form-label']
  p.innerHTML = idRole === 3 ? 'Medio de pago' : 'Tipo usuario'

  typeSelector.appendChild(p)

  const section = document.getElementById('register-action')
  const btn = document.createElement('button')
  btn.innerHTML = 'Enviar'
  btn.classList = ['btn']

  section.appendChild(btn)

  btn.addEventListener('click', async function () {

    // console.log('idRole actual: ', idRole);

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
      id_role: Number(tipoUsuario)
    };

    // console.log('data user xxxx: ', dataUser );

    try {
      const result = await _createUser(idRole, dataUser); // true o false
      if (!result.isSuccess) {
        // console.log('result ohno!: ', result);
      } else {
        dataUser = {};
        document.getElementById('usr-create-name').value = '';
        document.getElementById('usr-create-lastname').value = '';
        document.getElementById('usr-create-surname').value = '';
        document.getElementById('usr-create-rut').value = '';
        document.getElementById('usr-create-email').value = '';
        document.getElementById('usr-create-pass').value = '';
        if (idRole === 3) {
          window.location.href = 'login.html'
        } else {
          window.location.href = 'user-all.html'
        }
      }
    } catch (error) {
      console.log('error usando _createUser: ', error);
    }

  });
}

function buildView() {
  setOptions() // trigger
  drawForm();
}

function setStatus() {
  const section2 = document.getElementById('register-action');
  const h3 = document.createElement('p');
  h3.style.fontWeight = 'bold'
  h3.innerHTML = '🔒 app inactiva 🔒';
  section2.appendChild(h3)
}

if (CONFIG.status) {
  buildView();
} else {
  setStatus();
}
