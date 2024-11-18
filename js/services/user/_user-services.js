
import { CONFIG } from './../../config/config.js';

export const getAllUsers = async () => {
  
  const endpoint = import.meta.env.VITE_API_URL + CONFIG.allUsers;
  console.log('ejecuta getAllUsers', process);

  try {
    let response = await fetch(endpoint);

    console.log('response', response);

    const data = await response.json();
    
    console.log(data);


  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}





// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST', // HTTP method
//   headers: {
//       'Content-Type': 'application/json' // Content type for JSON data
//   },
//   body: JSON.stringify({
//       title: 'New Post',
//       body: 'This is the content of the new post.',
//       userId: 1
//   })
// })
//   .then(response => {
//       if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//   })
//   .then(data => {
//       console.log('Created post:', data);
//   })
//   .catch(error => {
//       console.error('There was a problem with the fetch operation:', error);
//   });