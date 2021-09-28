import React from 'react';
import Input from '../InputsForm/Input';
import Select from '../InputsForm/Select';

// import { Container } from './styles';

function ExpenseForm() {
  const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const tags = ['Lazer', 'Trabalho', 'Transporte', 'Saúde'];

  return (
    <div>
      <Input
        text="Valor"
        type="text"
        id="valor"
        name="name"
      />
      <Input
        type="text"
        text="Descrição"
        id="description"
        name="description"
      />
      <Select
        text="Moeda"
        name="coin"
      />
      <Select
        text="Método de pagamento"
        name="method"
        option={methods}
      />
      <Select
        text="Tag"
        name="tag"
        option={tags}
      />
    </div>
  );
}

export default ExpenseForm;
