import React from 'react';

interface BurgerInfoProps {
  name: string;
  calories: number;
}

const BurgerInfo = ({
  name,
  calories,
}: BurgerInfoProps): React.ReactElement => {
  return (
    <div>
      {name} - {calories}
    </div>
  );
};

export default BurgerInfo;
