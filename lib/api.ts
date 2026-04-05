import axios from 'axios';
import { API_BASE_URL } from '../constants/Brand';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const endpoints = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    me: '/auth/me',
    register: '/auth/register',
  },
  vendors: {
    list: '/vendors',
    single: (slug: string) => `/vendors/${slug}`,
    categories: '/vendors/categories',
    featured: '/vendors/featured',
  },
  magazine: {
    articles: '/magazine/articles',
    article: (slug: string) => `/magazine/articles/${slug}`,
    featured: '/magazine/featured',
  },
  workbook: {
    get: '/workbook',
    update: '/workbook',
    budget: '/workbook/budget',
    guestList: '/workbook/guests',
    checklist: '/workbook/checklist',
  },
  gallery: {
    collections: '/gallery/collections',
    collection: (slug: string) => `/gallery/collections/${slug}`,
  },
  venues: {
    list: '/venues',
    single: (slug: string) => `/venues/${slug}`,
  },
};
