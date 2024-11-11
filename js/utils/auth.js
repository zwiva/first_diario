export async function login(username, password) {
  try {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) throw new Error('Credenciales inválidas');

    const data = await response.json();
    localStorage.setItem('jwtToken', data.token); // Almacenar el token en localStorage
    return true;
  } catch (error) {
    console.error('Error de autenticación:', error);
    return false;
  }
}

export function getAuthToken() {
  return localStorage.getItem('jwtToken');
}

export function logout() {
  localStorage.removeItem('jwtToken'); // Borra el token en el logout
}