import nutritionAPI from './api-resourses/nutrition';
import { AxiosResponse } from 'axios';

const getIngredientById = (id: string): Promise<AxiosResponse<any>> => {
  return nutritionAPI.get('item', {
    params: { id },
  });
};

export { getIngredientById };
