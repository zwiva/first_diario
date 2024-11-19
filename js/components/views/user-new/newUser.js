// 🚨 EN ESTA SECCION SE CREA UN NUEVO USUARIO: via admin o registro 🚨

let idRole = 3;

function detectRole() {
  if (localStorage.getItem('navigation')) {
    let data = JSON.parse(localStorage.getItem('navigation'))
    idRole = data.navigation.id_role;
  }
}
detectRole()

function detectUserId() { // VERIFICAR SI ES NECESARIO 📌
  const user_id = 1;

  // codigo para detectar el usuario 📌
  
  return user_id
}
detectUserId()

const selectOptions = document.getElementById("select-options");
function setOptions() { // roles o medios de pago, depende de usuario
  let options = []

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
setOptions()

// boton ejecuta envio
const btn = document.getElementById("create-new-user");
btn.addEventListener('click', async function () {

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
    idRole: tipoUsuario
  };

  const result = await createUser(dataUser);

  if (result) {
    console.log('limpiar formulario');
    dataUser = {};
    document.getElementById('usr-create-name').value = '';
    document.getElementById('usr-create-lastname').value = '';
    document.getElementById('usr-create-surname').value = '';
    document.getElementById('usr-create-rut').value = '';
    document.getElementById('usr-create-email').value = '';
    document.getElementById('usr-create-pass').value = '';
  }

});

const createUser = async (data) => {
  console.log('data nuevo usuario', data)

  // guardado en db 📌

  return true
}
