import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.10.2:2021',
  responseType: 'json',
});