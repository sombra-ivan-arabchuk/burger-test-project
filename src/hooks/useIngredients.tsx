import React, { createContext, useContext, useEffect, useState } from 'react';
import { getIngredientById } from '../utils/burger-api';
import { useNetwork } from './useNetwork';

export interface IngredientsProps {
  [key: string]: string;
}

export interface IngredientDetailsProps {
  [key: string]: number;
}

export interface IngredientProps {
  key: string;
  detailedInfo: IngredientDetailsProps;
}

export interface UseIngredientsProps {
  ingredients: Array<IngredientProps>;
}

const ingredientsIDs: IngredientsProps = {
  salad: '5da6c2339094e13219339f14',
  meat: '561e795169fc03824d08345e',
  cheese: '5976643fa690431a53463b05',
  bacon: '561e6c16c265794042cb5f20',
};

const ingredientsContext = createContext<UseIngredientsProps>({
  ingredients: [],
});

export function ProvideIngredients({
  children,
}: {
  children: React.ReactChild;
}): React.ReactElement {
  const auth = useProvideIngredients();
  return (
    <ingredientsContext.Provider value={auth}>
      {children}
    </ingredientsContext.Provider>
  );
}

export const useIngredients = (): UseIngredientsProps =>
  useContext(ingredientsContext);

function useProvideIngredients(): UseIngredientsProps {
  const [ingredients, setIngredients] = useState<Array<IngredientProps>>([]);
  const { isOnline } = useNetwork();

  const localIngredientsRefresh = (): void => {
    const storedIngredients = localStorage.getItem('ingredients');
    if (storedIngredients) {
      const parsedData = JSON.parse(storedIngredients);
      setIngredients(parsedData);
    } else {
      Promise.all(
        Object.keys(ingredientsIDs).map(async (key: string) => {
          const { data } = await getIngredientById(ingredientsIDs[key]);
          const {
            nf_calories: calories,
            nf_sodium: sodium,
            nf_vitamin_a_dv: vitaminA,
            nf_vitamin_c_dv: vitaminC,
          } = data;
          const detailedInfo = {
            calories,
            sodium,
            vitaminA,
            vitaminC,
          };

          return { key, detailedInfo };
        }),
      ).then(res => {
        localStorage.setItem('ingredients', JSON.stringify(res));
        setIngredients(res);
      });
    }
  };

  useEffect(() => {
    localIngredientsRefresh();
  }, [isOnline]);

  return {
    ingredients,
  };
}
