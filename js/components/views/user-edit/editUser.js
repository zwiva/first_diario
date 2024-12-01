// 🚨 EN ESTA VISTA SE PUEDE EDITAR UN USUARIO 🚨

import { _editUser } from "../../../services/user/user-service";

function detectUserId() {
  let userId = '';
  if (localStorage.getItem('navigation')) {
    let user = JSON.parse(localStorage.getItem('navigation'))
    userId = user.navigation.id_user;
  }
  // console.log('token---->', token.authToken);
  return userId
}

function getUserData() {
  const data = localStorage.getItem('user-edit');
  const userData = JSON.parse(data);
  return userData;
}

async function setRolesSelect() {
  const selectRoles = document.getElementById("sections-edit");
  const roles = [
    {
      "id": 1,
      "name": "Admin",

    },
    {
      "id": 2,
      "name": "Periodista",

    },
    {
      "id": 3,
      "name": "Lector free",

    },
    {
      "id": 4,
      "name": "Lector pago",

    }
  ]

  const select = document.createElement('select');
  select.classList = ['form-input']
  select.id = 'usr-edit-section'

  roles.forEach(role => {
    const option = document.createElement('option')
    option.value = role.id
    option.textContent = role.name
    select.appendChild(option);
  })
  selectRoles.appendChild(select)
}

function setUserDataInView() {
  const userData = getUserData();
  document.getElementById('usr-edit-id').innerHTML = userData.id;
  document.getElementById('usr-edit-name').value = userData.name;
  document.getElementById('usr-edit-lastname').value = userData.lastname;
  document.getElementById('usr-edit-surname').value = userData.surname;
  document.getElementById('usr-edit-rut').value = userData.rut;
  document.getElementById('usr-edit-section').value = userData.id_role;

  const button = document.getElementById('edit-user');
  button.addEventListener('click', editUser)

}

async function editUser() {

  const userData = getUserData();
  console.log('userData editando: ', userData);

  const example = {
    // no cambian
    "id": 1,
    "role": "Administrador",
    "email": "andrea@mail.cl",
    "id_person": 1,

    // cambian
    "name": "Andrea",
    "lastname": "Castro",
    "surname": "Castellón",
    "rut": "123456789",
    "id_role": 1,
  }

  let body = {
    id: userData.id,
    name: document.getElementById('usr-edit-name').value,
    lastname: document.getElementById('usr-edit-lastname').value,
    surname: document.getElementById('usr-edit-surname').value,
    rut: document.getElementById('usr-edit-rut').value,
    id_role: parseInt(document.getElementById('usr-edit-section').value),
  };

  // console.log('body', body);

  try {
    const result = await _editUser(userData.id, body)
    console.log('res', result);
    if (result.isSuccess) {
      clearForm();
      window.location.href = "./user-all";
    }
  } catch (error) {
    console.log('error en editUser: ', error);
  }
}

function clearForm() {
  document.getElementById('usr-edit-name').value = ''
  document.getElementById('usr-edit-lastname').value = ''
  document.getElementById('usr-edit-surname').value = ''
  document.getElementById('usr-edit-rut').value = '';
}

function buildView() {
  setRolesSelect()
  setUserDataInView()
}

buildView()