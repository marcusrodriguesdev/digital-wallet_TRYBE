import React, { useContext } from 'react';
import WalletContext from '../../context/WalletContext';

import Container from './styles';

function Header() {
  const { email } = JSON.parse(localStorage.getItem('user'));

  const { form: { expense } } = useContext(WalletContext);

  const total = () => {
    const reduceExpense = expense.reduce((acc, curr) => {
      const subTotal = curr.value * curr.infoCoin[curr.coin].ask;
      acc += subTotal;
      return acc;
    }, 0);
    return parseFloat(reduceExpense).toFixed(2);
  };

  return (
    <Container>
      <div>
        <span>{email}</span>
      </div>
      <div>
        <span>{ total() }</span>
      </div>
      <div>
        <span>BRL</span>
      </div>
    </Container>
  );
}

export default Header;
