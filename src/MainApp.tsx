import React, { FC } from 'react';
import {  HashRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Catalog from './screens/Catalog/Catalog';
import { useNetwork } from './hooks';
import styled from 'styled-components';
import OnBoarding from './screens/OnBoarding/OnBoarding';

const MainApp: FC = () => {
  const { isOnline } = useNetwork();

  return (
    <>
      <HashRouter>
        <div>
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/">
            <OnBoarding />
          </Route>
          <Route path="/catalog">
            <Catalog />
          </Route>
        </Switch>
      </HashRouter>
      {!isOnline && <OfflineHeader>you are offline</OfflineHeader>}
    </>
  );
};

const OfflineHeader = styled.div`
  width: 100%;
  background-color: yellow;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0%;
  z-index: 1;
`;

export default MainApp;
