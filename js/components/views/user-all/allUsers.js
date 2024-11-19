import { getAllUsers } from "../../../services/user/user-service.js";

// 🚨 EN ESTA VISTA SE MUESTRA TABLA CON TODOS LOS USUARIOS 🚨

const users = []

try {

  const result = await getAllUsers();
  console.log('--- viendo todos los usuarios ---', result);
  users = result;

} catch (error) {

  console.log('error: ', error);
 
}