import axios from 'axios';

import {CONFIG} from 'src/config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({baseURL: CONFIG.site.serverUrl});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong!')
);

export default axiosInstance;

// ----------------------------------------------------------------------
//ALL API ENDPOINTS
export const endpoints = {
  auth: {
    signIn: '/session/login',
    signUp: '/users/create',
    csrfToken: '/session/csrf-token',
  },
  links: {
    createLink: (userId) => `/links/create/byUser/${userId}`,
    delete: '/links/delete',
    getLinks: (userId) => `/links/get/byUser/${userId}`,
  },
  users: {
    getUser: (username) => `/users/get/byEmail/${username}`,
    updateUser: '/users/update',
    getUserById: (userId) => `/users/get/byId/${userId}`,
    getAmountOfUsers: '/users/all',
  },
  products: {
    createProduct: (userId) => `/products/create/byUser/${userId}`,
    getProductsById: (userId) => `/products/get/byUser/${userId}`,
  }
};
