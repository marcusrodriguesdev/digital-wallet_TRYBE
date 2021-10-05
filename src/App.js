import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import WalletProvider from './context/WalletProvider';
import Wallet from './pages/Wallet';

function App() {
  return (
    <BrowserRouter>
      <WalletProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/carteira" component={Wallet} />
        </Switch>
      </WalletProvider>
    </BrowserRouter>
  );
}

export default App;
