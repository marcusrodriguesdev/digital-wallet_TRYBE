import React, { useContext, useState } from 'react';
import WalletContext from '../../context/WalletContext';
import Input from '../InputsForm/Input';
import Select from '../InputsForm/Select';
import { Container, Button } from './styles';

function ExpenseForm() {
  const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
  const tags = ['Lazer', 'Trabalho', 'Transporte', 'Saúde'];

  const [value, setValue] = useState(0);
  const [id, setId] = useState(0);
  const [description, setDescription] = useState('');
  const [method, setMethod] = useState('Dinheiro');
  const [tag, setTag] = useState('Lazer');
  const [coin, setCoin] = useState('USD');
  const [checkValue, setCheckValue] = useState(true);

  const {
    apiCoins, getExpenseForm, form: { expense },
  } = useContext(WalletContext);

  function validateButton() {
    if (value !== 0) {
      setCheckValue(false);
    } else { setCheckValue(true); }
  }

  function checkButton() {
    getExpenseForm(id, value, description, coin, method, tag);
    localStorage.setItem('exchangeRates', JSON.stringify((expense)));
  }

  return (
    <Container>
      <Input
        text="Valor"
        type="number"
        className="Input"
        id="valor"
        name="name"
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
          validateButton();
        }}
      />
      <Input
        className="Input Description"
        type="text"
        text="Descrição"
        value={description}
        id="description"
        name="description"
        onChange={({ target }) => {
          setDescription(target.value);
          // validateButton();
        }}
      />
      <Select
        className="Select"
        text="Moeda"
        name="coin"
        option={apiCoins}
        value={coin}
        onChange={({ target }) => setCoin(target.value)}
      />
      <Select
        className="Select"
        text="Método de pagamento"
        name="method"
        option={methods}
        value={method}
        onChange={({ target }) => setMethod(target.value)}
      />
      <Select
        className="Select"
        text="Tag"
        name="tag"
        value={tag}
        option={tags}
        onChange={({ target }) => setTag(target.value)}
      />
      <Button checkValue={checkValue}>
        <button
          type="button"
          onClick={() => {
            checkButton();
            setId(id + 1);
          }}
          disabled={checkValue}
        >
          Adicionar Despesa
        </button>
      </Button>
    </Container>
  );
}

export default ExpenseForm;
