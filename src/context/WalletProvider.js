import PropTypes from 'prop-types';
import React, { useState } from 'react';
import WalletContext from './WalletContext';

export default function WalletProvider({ children }) {
  const [email, setEmail] = useState('');

  const context = {
    email,
    setEmail,
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
