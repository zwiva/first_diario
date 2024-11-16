import { endpointsLocal } from "./../../../environments/local.js";
import { endpointsProd } from "./../../../environments/prod.js";

export const getAllUsers = async () => {

  console.log('ejecuta getAllUsers', endpointsLocal.allUsers);

  try {
    let response = await fetch(endpointsLocal.allUsers);

    console.log('response', response);

    // if (!response.ok) {
    //   throw new Error(`HTTP error! status: ${response.status}`);
    // }
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