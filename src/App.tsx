import React from 'react';
import './App.css';
import { ProvideAuth } from './hooks/useAuth';
import NavBar from './components/NavBar/NavBar';

const App = (): React.ReactElement => {
  return (
    <div>
      <ProvideAuth>
        <>
          <NavBar />
        </>
      </ProvideAuth>
    </div>
  );
};

export default App;
