import { AxiosResponse } from 'axios';
import burgerAPI from './api-resourses/firebase-burger';
import { BurgerProps } from '../screens/Catalog/Catalog';

const getBurgers = (): Promise<AxiosResponse> => burgerAPI.get('orders.json');

const saveBurger = (burger: BurgerProps): Promise<AxiosResponse> =>
  burgerAPI.post('/orders.json', burger);

const editBurger = (
  id: string | undefined,
  burger: BurgerProps,
): Promise<AxiosResponse> => burgerAPI.put(`/orders/${id}.json/`, burger);

const deleteBurger = (id: string | undefined): Promise<AxiosResponse> =>
  burgerAPI.delete(`orders/${id}.json`);

export { getBurgers, saveBurger, editBurger, deleteBurger };
