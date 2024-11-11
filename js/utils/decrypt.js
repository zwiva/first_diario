// export function decrypt(text, shift) {

//   console.log('dec text', text);
//   console.log('dec shift', shift);


//   let decripted = text.split("").map(char => {
//     const code = char.charCodeAt(0);
//     return String.fromCharCode(code - shift);
//   }).join('');

//   console.log('----dec----', decripted);

//   return decripted;
// }


// // Encriptar el texto
// const textoEncriptado = encrypt(textoOriginal, shift);
// console.log("Texto Encriptado:", textoEncriptado);

// // Desencriptar el texto
// const textoDesencriptado = decrypt(textoEncriptado, shift);
// console.log("Texto Desencriptado:", textoDesencriptado);

// decrypt.js
// export function decrypt(text, shift) {
//   return text.split('').map(char => {
//     const code = char.charCodeAt(0);
//     return String.fromCharCode(code - shift);
//   }).join('');
// }

// export async function decrypt(encryptedData, key) {
//   console.log('encryptedData', encryptedData);
//   console.log('key', key);
  
  
//   const iv = base64ToArrayBuffer(encryptedData.iv);
//   const ciphertext = base64ToArrayBuffer(encryptedData.data);

//   const decrypted = await crypto.subtle.decrypt(
//     { name: "AES-GCM", iv },
//     key,
//     ciphertext
//   );

//   const decoded = new TextDecoder().decode(decrypted);
//   return JSON.parse(decoded); // Convertir texto a JSON
// }

// // Función para convertir base64 a ArrayBuffer
// function base64ToArrayBuffer(base64) {
//   console.log('basd64', base64);
  
//   const binaryString = atob(base64);
//   const len = binaryString.length;
//   const bytes = new Uint8Array(len);
//   for (let i = 0; i < len; i++) {
//     bytes[i] = binaryString.charCodeAt(i);
//   }
//   return bytes.buffer;
// }

// import { generateKey, encrypt } from './encrypt.js';
// import { decrypt } from './decrypt.js';

// async function runEncryptionDemo() {
//     const key = await generateKey();
//     const jsonData = { mensaje: "Hola Mundo", fecha: new Date().toISOString() };

//     // Encriptar el JSON
//     const encryptedData = await encrypt(jsonData, key);
//     console.log("JSON Encriptado:", encryptedData);

//     // Desencriptar el JSON
//     const decryptedData = await decrypt(encryptedData, key);
//     console.log("JSON Desencriptado:", decryptedData);
// }

// runEncryptionDemo();