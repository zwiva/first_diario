import { getAllUsers } from "./../../../services/user/user-service.js";

const usuarios = await getAllUsers();
console.log('--- viendo todos los usuarios ---', usuarios);