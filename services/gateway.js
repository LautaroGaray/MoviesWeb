import configs from '../config'; // 

import { apiGet } from './apiService';

/**
 * Gateway para acceder a distintos backends a través de nombre + endpoint
 * @param {string} apiName - nombre del backend en configs (ej: "moviesBackend")
 * @param {string} endpointName - nombre del endpoint configurado (ej: "getPopular")
 * @param {object} options - objeto con { method, params, body } opcionales
 * @returns {Promise<{ isSuccess: boolean, data: any, code: number, message: string }>}
 */
export const gateway = async (apiName, endpointName, options = {}) => {
  const { method = 'GET', params = null, body = null } = options;

  const apiConfig = configs[apiName];
  if (!apiConfig) {
    return {
      isSuccess: false,
      data: null,
      code: 400,
      message: `API '${apiName}' no está configurada`
    };
  }

  const endpointConfig = apiConfig.endpoints.find(e => e.name === endpointName);
  if (!endpointConfig) {
    return {
      isSuccess: false,
      data: null,
      code: 404,
      message: `Endpoint '${endpointName}' no encontrado en API '${apiName}'`
    };
  }

  const fullEndpoint = `/${endpointConfig.endpoint}`;

  switch (method.toUpperCase()) {
    case 'GET':
      return await apiGet(apiConfig.root, fullEndpoint, params);

    default:
      return {
        isSuccess: false,
        data: null,
        code: 405,
        message: `Método HTTP '${method}' no soportado aún`
      };
  }
};
