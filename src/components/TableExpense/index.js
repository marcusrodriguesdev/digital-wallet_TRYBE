import React, { useContext } from 'react';
import WalletContext from '../../context/WalletContext';

import {
  Container, Button,
} from './styles';

function TableExpense() {
  const { form: { expense } } = useContext(WalletContext);

  const fields = ['Descrição', 'Método de pagamento', 'Valor', 'Moeda',
    'Tag', 'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão',
  ];

  return (
    <Container className="expense-table">
      <tr>
        { fields.map((items) => (
          <th key={items}>
            { items }
          </th>
        )) }
        <th>Editar/Excluir</th>
      </tr>
      <tbody>
        { expense.map(({
          id, coin, description, method, tag, value, infoCoin,
        }) => (
          <tr key={id}>

            <td className="descricao">{description}</td>
            <td className="valor">{value}</td>
            <td>{infoCoin[coin].name.split('/', 1)}</td>
            <td className="method">{method}</td>
            <td>{tag}</td>
            <td>{parseFloat(infoCoin[coin].ask).toFixed(2)}</td>
            <td>{(infoCoin[coin].ask * value).toFixed(2)}</td>
            <td>Real</td>
            <td>
              <Button
                type="button"
              >
                Deletar
              </Button>
            </td>
          </tr>
        )) }
      </tbody>
    </Container>
  );
}

export default TableExpense;
