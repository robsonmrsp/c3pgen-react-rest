import axios from 'axios';

const BASE_URL = 'http://localhost:8080/';

export default class HttpRequest {
  constructor(url) {
    if (!url) {
      throw new Error('Deve ser definida uma url para o serviço!');
    }
    this.url = url;
  }

  createAuthHeaders = () => {
    const headers = {};
    headers['Authorization'] = `Basic ${btoa('jsetup:123456')}`;
    headers['Content-Type'] = 'application/json';
    return headers;
  }

  getPage = async (params) => {
    const response = await axios.get(BASE_URL + this.url, { headers: this.createAuthHeaders(), params });
    return response.data;
  }

  delete = () => {

  }
}
