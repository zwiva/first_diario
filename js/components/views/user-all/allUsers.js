import { getAllUsers } from "./../../../services/user/user-service.js";

// 🚨 EN ESTA VISTA SE MUESTRA TABLA CON TODOS LOS USUARIOS 🚨

const usuarios = await getAllUsers();
console.log('--- viendo todos los usuarios ---', usuarios);