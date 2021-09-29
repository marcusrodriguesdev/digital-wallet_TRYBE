import React, { useContext } from 'react';
import WalletContext from '../../context/WalletContext';

import { HeaderTable, BodyTable } from './styles';

function TableExpense() {
  const { form: { expense } } = useContext(WalletContext);

  const fields = ['Valor', 'Descrição', 'Moeda', 'Método de pagamento',
    'Tag', 'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão',
    'Editar/Excluir',
  ];

  return (
    <table>
      <thead>
        <tr>
          { fields.map((items) => (
            <HeaderTable key={items}>
              { items }
            </HeaderTable>
          )) }
        </tr>
      </thead>
      <tbody>
        { expense.map(({
          id, coin, description, method, tag, value, infoCoin,
        }) => (
          <BodyTable key={id}>
            <td>{value}</td>
            <td>{description}</td>
            <td>{infoCoin[coin].name.split('/', 1)}</td>
            <td className="method">{method}</td>
            <td>{tag}</td>
            <td>{parseFloat(infoCoin[coin].ask).toFixed(2)}</td>
            <td>{(infoCoin[coin].ask * value).toFixed(2)}</td>
            <td>Real</td>
          </BodyTable>
        )) }
      </tbody>
    </table>
  );
}

export default TableExpense;
