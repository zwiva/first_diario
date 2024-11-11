import { getAuthToken } from './auth';

export async function fetchProtectedData() {
    const token = getAuthToken();
    try {
        const response = await fetch('http://localhost:3000/api/protegido', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error('Error en la ruta protegida');
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en la ruta protegida:', error);
    }
}