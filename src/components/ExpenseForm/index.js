import React, { useState } from 'react';
import Input from '../InputsForm/Input';
import Select from '../InputsForm/Select';

// import { Container } from './styles';

function ExpenseForm() {
  const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const tags = ['Lazer', 'Trabalho', 'Transporte', 'Saúde'];

  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [method, setMethod] = useState('');
  const [tag, setTag] = useState('');

  return (
    <div>
      <Input
        text="Valor"
        type="text"
        id="valor"
        name="name"
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
      <Input
        type="text"
        text="Descrição"
        value={description}
        id="description"
        name="description"
        onChange={({ target }) => setDescription(target.value)}
      />
      <Select
        text="Moeda"
        name="coin"
      />
      <Select
        text="Método de pagamento"
        name="method"
        option={methods}
        value={method}
        onChange={({ target }) => setMethod(target.value)}
      />
      <Select
        text="Tag"
        name="tag"
        value={tag}
        option={tags}
        onChange={({ target }) => setTag(target.value)}
      />
    </div>
  );
}

export default ExpenseForm;
