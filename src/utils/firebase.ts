import { AxiosResponse } from 'axios';
import burgerAPI from './api-resourses/firebase-burger';

const getBurgers = (): Promise<AxiosResponse> => {
  return burgerAPI.get('orders.json');
};

export { getBurgers };
