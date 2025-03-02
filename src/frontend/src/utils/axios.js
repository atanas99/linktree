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

export const fetcher = async (args) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get(url, {...config});

    return res.data;
  } catch (error) {
    console.error('Failed to fetch:', error);
    throw error;
  }
};

// ----------------------------------------------------------------------

export const endpoints = {
  auth: {
    signIn: '/session/login',
    signUp: '/users/create',
    csrfToken: '/session/csrf-token',
  },
  links: {
    createLink: '/links/create',
    updateLink: '/links/update/',
    allLinks: '/links/all',
    delete: '/links/delete',
  },
  users: {
    getUserByLinkId: (linkId) => `/users/link${linkId}`,
    getUser: (username) => `/users/get/${username}`,
    updateUser: '/users/update',
  }
};
