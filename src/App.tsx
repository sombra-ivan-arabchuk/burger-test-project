import React from 'react';
import './App.css';
import { ProvideAuth } from './hooks/useAuth';
import { ProvideIngredients } from './hooks/useIngredients';
import { ProvideNetwork } from './hooks/useNetwork';
import MainApp from './MainApp';
const App = (): React.ReactElement => {
  return (
    <div>
      <ProvideNetwork>
        <ProvideAuth>
          <ProvideIngredients>
            <MainApp />
          </ProvideIngredients>
        </ProvideAuth>
      </ProvideNetwork>
    </div>
  );
};

export default App;
