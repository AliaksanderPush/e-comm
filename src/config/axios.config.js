import axios from 'axios';

export const API_URL = 'https://blushedcosmetics.herokuapp.com';

export const api = axios.create({
  baseURL: API_URL,
});
