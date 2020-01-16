import React from 'react';
import './App.css';
import { ProvideAuth } from './hooks/useAuth';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Catalog from './screens/Catalog/Catalog';
const App = (): React.ReactElement => {
  return (
    <div>
      <ProvideAuth>
        <>
          <BrowserRouter>
            <NavBar />
            <Switch>
              <Route exact path="/">
                <div>unauthenticated</div>
              </Route>
              <Route path="/catalog">
                <Catalog />
              </Route>
            </Switch>
          </BrowserRouter>
        </>
      </ProvideAuth>
    </div>
  );
};

export default App;
