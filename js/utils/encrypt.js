// export function encrypt(text, shift) {
//   console.log('enc text', text);
//   console.log('enc Shift', shift);

//   let encripted = text.split("").map(char => {
//     const code = char.charCodeAt(0);
//     return String.fromCharCode(code + shift);
//   }).join('');
//   console.log('---encripted----:', encripted);

//   return encripted
// }

// export function encrypt(text, shift) {
//   return text.split('').map(char => {
//     const code = char.charCodeAt(0);
//     return String.fromCharCode(code + shift);
//   }).join('');
// }

// // Encriptar el texto
// const textoEncriptado = encrypt(textoOriginal, shift);
// console.log("Texto Encriptado:", textoEncriptado);

// // Desencriptar el texto
// const textoDesencriptado = decrypt(textoEncriptado, shift);
// console.log("Texto Desencriptado:", textoDesencriptado);


// export async function encrypt(jsonObject, key) {
//   const iv = crypto.getRandomValues(new Uint8Array(12)); // Generar IV único para cada encriptación
//   const encoded = new TextEncoder().encode(JSON.stringify(jsonObject)); // Codificar JSON a texto

//   const ciphertext = await crypto.subtle.encrypt(
//       { name: "AES-GCM", iv },
//       key,
//       encoded
//   );

//   // Devolver el IV junto con el texto encriptado, ambos en formato base64
//   return {
//       iv: arrayBufferToBase64(iv),
//       data: arrayBufferToBase64(ciphertext)
//   };
// }

// // Función para convertir un ArrayBuffer a base64
// function arrayBufferToBase64(buffer) {
//   const bytes = new Uint8Array(buffer);
//   return btoa(String.fromCharCode(...bytes));
// }