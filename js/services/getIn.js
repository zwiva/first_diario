// import { encrypt } from './../utils/encrypt.js';



export async function generateKey() {
  return await window.crypto.subtle.generateKey(
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"]
  );
}

async function getIn() {
  console.log('xxxxx ejecuta getIn xxxxxxxx');

  const ball = localStorage.getItem('fi4RQ0x');
  console.log('*** ball getIn ****', ball);

  const data = localStorage.getItem('data') // txt
  localStorage.removeItem('data');
  const raw = JSON.parse(data) // json

  // try {

  // llamar api de usuario con raw    // retornar datos usuarios
  console.log('raw', raw);

  const result = {
    nombreUsuario: 'Andrea',
    role: raw.usr // solo para codear
  }
  const rol = {
    rol: result.role
  }

  
  // const key = await generateKey();
  // console.log('-------> key SIN', key);
  // console.log('-------> key CON', JSON.stringify(key));
  
  // localStorage.setItem('fi4RQ0x', JSON.stringify(key));

  // const jsonDataUsuario = JSON.stringify(result);
  // console.log('jsonDataUsuario', jsonDataUsuario);
  
  // const jsonRolUsuario = JSON.stringify(rol);
  // console.log('jsonRolUsuario', jsonRolUsuario);
  

  // // Encriptar el JSON
  // const encryptedDataUsuario = await encrypt(jsonDataUsuario, key);
  // console.log("JSON Encriptado:", encryptedDataUsuario);
  // localStorage.setItem('fi4RQ0Z', encryptedDataUsuario)


  // const encryptedRolUsuario = await encrypt(jsonRolUsuario, key)
  // console.log('rolUsuarioEn: ', encryptedRolUsuario);
  // localStorage.setItem('fi4RQ0Y', encryptedRolUsuario)

  // } catch (error) {
  //   console.log('error', error)
  // }

  window.location.href = "./index.html" // a todo evento redirige


  // localStorage.clear(); // todas
  // localStorage.removeItem('key') // una;

}

getIn();

