import axios from 'axios';

const burgerAPI = axios.create({
  baseURL: 'https://burger-app-eaa1f.firebaseio.com/',
});

export default burgerAPI;
