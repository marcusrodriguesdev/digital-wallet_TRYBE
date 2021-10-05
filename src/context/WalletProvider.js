import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import WalletContext from './WalletContext';
import getCoins from '../services/index';

export default function WalletProvider({ children }) {
  const [email, setEmail] = useState('');
  const [apiCoins, setApiCoins] = useState([]);
  const [infoCoin, setInfoCoin] = useState([]);
  const [form, setForm] = useState({
    expense: [],
  });

  useEffect(() => {
    async function requestApi() {
      const getApi = await getCoins();
      const filterCoins = await Object.keys(getApi)
        .filter((money) => money !== 'USDT');
      setApiCoins(filterCoins);
    }
    requestApi();
  }, []);

  useEffect(() => {
    async function requestApi() {
      const exchangeRates = await getCoins();
      setInfoCoin(exchangeRates);
    }
    requestApi();
  }, []);

  function getExpenseForm(
    id, value, description, coin, method, tag,
  ) {
    setForm({
      ...form,
      expense: [
        ...form.expense,
        {
          id,
          value,
          description,
          coin,
          method,
          tag,
          infoCoin,
        },
      ],
    });
  }

  const context = {
    email,
    setEmail,
    apiCoins,
    infoCoin,
    getExpenseForm,
    form,
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
