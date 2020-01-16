import nutritionAPI from './api-resourses/nutrition';
import { AxiosResponse } from 'axios';

const fetchInitialItems = (): Promise<AxiosResponse<any>> => {
  return nutritionAPI.get('search/burger', {
    params: { results: '0:20', fields: 'item_id' },
  });
};

export { fetchInitialItems };
