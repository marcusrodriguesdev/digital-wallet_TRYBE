import React, { useContext } from 'react';
import { GiWallet } from 'react-icons/gi';
import WalletContext from '../../context/WalletContext';

import Container from './styles';

function Header() {
  const { email } = JSON.parse(localStorage.getItem('user'));

  const { form: { expense } } = useContext(WalletContext);

  const total = () => {
    const reduceExpense = expense.reduce((previousValue, currentValue) => {
      const subTotal = currentValue.value * currentValue.infoCoin[currentValue.coin].ask;
      previousValue += subTotal;
      return previousValue;
    }, 0);
    return parseFloat(reduceExpense).toFixed(2);
  };

  return (
    <Container>
      <div>
        <span>Digital Wallet</span>
        <GiWallet size={20} color="#6ede8a" className="icon" />
      </div>
      <div>
        <span>{ `Email: ${email}` }</span>
      </div>
      <div>
        <span>{ `Despesa Total: R$ ${total()} BRL` }</span>
      </div>
    </Container>
  );
}

export default Header;
