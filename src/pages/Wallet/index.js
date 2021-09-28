import React from 'react';
import ExpenseForm from '../../components/ExpenseForm';
import Header from '../../components/Header';
import GlobalStyle from '../../styles/GlobalStyle';

// import { Container } from './styles';

function Wallet() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <ExpenseForm />
    </div>
  );
}

export default Wallet;
