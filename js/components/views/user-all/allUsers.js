import { _getAllUsers } from "../../../services/user/user-service.js";

// 🚨 EN ESTA VISTA SE MUESTRA TABLA CON TODOS LOS USUARIOS 🚨

const getData = async () => {
  try {
    const response = await _getAllUsers();

    if (!response?.isSuccess) {
      console.log('Error', error.message);
      return;
    } else {
      return response
    }

  } catch (error) {
    console.log('error', error);
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
    idUser.innerHTML = user.id_user
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
    <button id="editar-usuario-${user.id_user}">Editar</button>
    <button id="eliminar-usuario-${user.id_user}">Eliminar</button>`
    userTr.appendChild(acciones)

    usuariosContainer.appendChild(userTr);

    const btnEdit = document.getElementById(`editar-usuario-${user.id_user}`)
    btnEdit.addEventListener('click', function () {
      console.log('editar usuario', user.id_user);
      const usuarioString = JSON.stringify(user)
      localStorage.setItem('user-edit', usuarioString)
      window.location.href = "./user-edit.html"
    })

    const btnDelete = document.getElementById(`eliminar-usuario-${user.id_user}`)
    btnDelete.addEventListener('click', function () {
      eliminarUsuario(user.id_user)
    })
  });

}

function eliminarUsuario(id) {
  console.log('eliminar usuario', id);
  // comunicar con db para eliminar 📌 (invocar servicio)
  try {
    const result = ''
  } catch (error) {
    console.log('error: ', error);
  }
}

buildView() // trigger