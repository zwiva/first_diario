import { CONFIG } from "../../../../config/config.js";
import { _deleteUser, _getAllUsers } from "../../../services/user/user-service.js";

// 🚨 EN ESTA VISTA SE MUESTRA TABLA CON TODOS LOS USUARIOS 🚨


function detectRole() {
  let idRole = 3;

  if (localStorage.getItem('navigation')) {
    let data = JSON.parse(localStorage.getItem('navigation'))
    idRole = data.navigation.id_role;
  }
  // console.log('idRole', idRole);
  // idRole = 2
  return idRole;
}

const getData = async () => {
  try {
    const response = await _getAllUsers();
    if (!response?.isSuccess) {
      console.log('Error en getData: ', error.message);
      return;
    } else {
      return response
    }
  } catch (error) {
    console.log('error getData', error);
  }
}

const buildView = async () => {

  let users = []

  const result = await getData();
  users = result.data;
  // console.log('users --> ', users);
  const usuariosContainer = document.getElementById('users-container');

  users.forEach(user => {
    // console.log('user', user);
    const userTr = document.createElement('tr');

    const idUser = document.createElement('td');
    idUser.innerHTML = user.id
    userTr.appendChild(idUser)

    const rol = document.createElement('td');
    rol.innerHTML = user.id_role
    userTr.appendChild(rol)

    const rut = document.createElement('td');
    rut.innerHTML = user.rut
    rut.style.textAlign = 'center';
    userTr.appendChild(rut)

    const nombre = document.createElement('td');
    nombre.innerHTML = user.name
    userTr.appendChild(nombre)

    const apellido = document.createElement('td');
    apellido.innerHTML = user.lastname
    userTr.appendChild(apellido)

    const apellido2 = document.createElement('td');
    apellido2.innerHTML = user.surname
    userTr.appendChild(apellido2)

    const correo = document.createElement('td');
    correo.innerHTML = user.email
    userTr.appendChild(correo)

    const acciones = document.createElement('td');
    acciones.style.display = "flex"
    acciones.style.justifyContent = "space-around"

    acciones.innerHTML = `
    <button id="editar-usuario-${user.id}">Editar</button>
    <button id="eliminar-usuario-${user.id}">Eliminar</button>`
    userTr.appendChild(acciones)

    usuariosContainer.appendChild(userTr);

    const btnEdit = document.getElementById(`editar-usuario-${user.id}`)
    btnEdit.addEventListener('click', function () {
      // console.log('editar usuario', user.id);
      const usuarioString = JSON.stringify(user)
      localStorage.setItem('user-edit', usuarioString)
      window.location.href = "./user-edit.html"
    })

    const btnDelete = document.getElementById(`eliminar-usuario-${user.id}`)
    btnDelete.addEventListener('click', function () {
      eliminarUsuario(user.id)
    })
  });
}

async function eliminarUsuario(id) {
  if (confirm(`Estas seguro de eliminar a idUsuario: ${id}`)) {
    try {
      const result = await _deleteUser(id);
      console.log('res', result);
      if (result.isSuccess) {
        window.location.href = './user-all.html'
      } else {
        alert(`🚫 Error al eliminar 🚫: ${result.message}`)
      }
    } catch (error) {
      console.log('error en eliminarUsuario: ', error);
    }
  }
}

// if (CONFIG.active) {
  const idRole = detectRole()
  if (idRole !== 1) {
    window.location.href = 'index.html'
  } else {
    buildView();
  }
// }
