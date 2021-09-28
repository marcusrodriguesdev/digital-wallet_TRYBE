import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import WalletProvider from './context/WalletProvider';

function App() {
  return (
    <BrowserRouter>
      <WalletProvider>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </WalletProvider>
    </BrowserRouter>
  );
}

export default App;
