import axios from 'axios';

export const useApi = async function (url, method = 'GET', payload = {}) {
  // Determinar automáticamente la URL base basada en el entorno actual
  let baseUrl;
  const host = window.location.hostname;
  if (host === 'localhost' || host.includes('carrera-atletica-backend.test')) {
    baseUrl = 'http://carrera-atletica-backend.test/api';
  } else {
    // Ajusta aquí tu URL de producción si cambia
    baseUrl = 'https://automatic-correction-backend-production.up.railway.app/api';
  }

  const fullUrl = `${baseUrl}/${url}`;
  console.log('URL utilizada:', fullUrl);

  try {
    const token = localStorage.getItem('access_token');
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    };

    const response = await axios({
      method,
      url: fullUrl,
      data: payload,
      headers,
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      if (status === 401 || (status === 500 && data.message === 'Token has expired')) {
        localStorage.removeItem('access_token');
        throw { status, data, redirect: true };
      } else {
        throw data;
      }
    } else {
      console.error('Error en la API:', error);
      throw new Error('Error en la conexión con el servidor.');
    }
  }
};
