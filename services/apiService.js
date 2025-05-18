import axios from 'axios';

/**
 * Servicio genérico para hacer peticiones GET
 * @param {string} baseUrl - URL base de la API (por ejemplo, http://localhost:5000/api)
 * @param {string} endpoint - Ruta del endpoint (por ejemplo, /movies/popular)
 * @param {object|null} params - Objeto de parámetros opcionales (por ejemplo, { page: 1 })
 * @returns {Promise<{ isSuccess: boolean, data: any, code: number, message: string }>}
 */
export const apiGet = async (baseUrl, endpoint, params = null) => {
  try {
    const url = `${baseUrl}${endpoint}`;
    const response = await axios.get(url, { params });


    if (response?.data?.hasOwnProperty('isSuccess')) {
      return {
        isSuccess: response.data.isSuccess,
        data: response.data.data,
        code: response.data.code,
        message: response.data.message || '',
      };
    }

   
    return {
      isSuccess: false,
      data: null,
      code: 500,
      message: 'Respuesta inesperada del servidor',
    };
  } catch (error) {
    
    return {
      isSuccess: false,
      data: null,
      code: error?.response?.status || 500,
      message:
        error?.response?.data?.message ||
        error?.message ||
        'Error desconocido al conectar con el servidor',
    };
  }
};
