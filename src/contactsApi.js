// https://6267012078638336421a5fe0.mockapi.io/:endpoint

import axios from 'axios';

axios.defaults.baseURL = 'https://6267012078638336421a5fe0.mockapi.io';

const getContacts = async (page, limit) => {
  const { data } = await axios.get(`/contacts?page=${page}&limit=${limit}`);
  return data;
};

export default getContacts;
