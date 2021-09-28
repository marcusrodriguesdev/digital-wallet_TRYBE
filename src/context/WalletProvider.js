import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import WalletContext from './WalletContext';
import getCoins from '../services/index';

export default function WalletProvider({ children }) {
  const [email, setEmail] = useState('');
  const [apiCoins, setApiCoins] = useState([]);

  useEffect(() => {
    async function requestApi() {
      const getApi = await getCoins();
      const filterCoins = await Object.keys(getApi)
        .filter((money) => money !== 'USDT');
      setApiCoins(filterCoins);
    }
    requestApi();
  }, []);

  const context = {
    email,
    setEmail,
    apiCoins,
  };

  return (
    <WalletContext.Provider value={context}>
      { children }
    </WalletContext.Provider>
  );
}

WalletProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
