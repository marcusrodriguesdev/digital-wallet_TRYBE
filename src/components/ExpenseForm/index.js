import React, { useContext, useState } from 'react';
import WalletContext from '../../context/WalletContext';
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
  const [coin, setCoin] = useState('');

  const { apiCoins } = useContext(WalletContext);

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
        option={apiCoins}
        value={coin}
        onChange={({ target }) => setCoin(target.value)}
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
      <button
        type="button"
      >
        Adicionar Despesa
      </button>
    </div>
  );
}

export default ExpenseForm;
