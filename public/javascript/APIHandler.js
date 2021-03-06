class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`);

  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`);
  }

  createOneRegister (parameters) {
    return axios.post(`${this.BASE_URL}/characters`, parameters);
  }

  updateOneRegister (id, parameters) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, parameters)
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`);

  }
}

