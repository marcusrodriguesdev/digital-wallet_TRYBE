import React, { useContext, useState } from 'react';
import WalletContext from '../../context/WalletContext';
import Input from '../InputsForm/Input';
import Select from '../InputsForm/Select';

function ExpenseForm() {
  const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const tags = ['Lazer', 'Trabalho', 'Transporte', 'Saúde'];

  const [value, setValue] = useState(0);
  const [id, setId] = useState(0);
  const [description, setDescription] = useState('');
  const [method, setMethod] = useState('Dinheiro');
  const [tag, setTag] = useState('Lazer');
  const [coin, setCoin] = useState('USD');

  const {
    apiCoins, getExpenseForm, form: { expense },
  } = useContext(WalletContext);

  function checkButton() {
    getExpenseForm(id, value, description, coin, method, tag);
    localStorage.setItem('exchangeRates', JSON.stringify((expense)));
  }

  return (
    <div>
      <Input
        text="Valor"
        type="number"
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
        onClick={() => {
          checkButton();
          setId(id + 1);
        }}
      >
        Adicionar Despesa
      </button>
    </div>
  );
}

export default ExpenseForm;
