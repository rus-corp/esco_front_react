import axios from "axios";


const API_BASE_URL = 'http://127.0.0.1:8000/'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
  headers: {"Content-Type": 'applicateion/json'}
})


export const getCategories = () => api.get('items/categories/')

export const getProducts = () => api.get('items/products/')

export const getMainPageProducts = () => api.get('main_page_products/')