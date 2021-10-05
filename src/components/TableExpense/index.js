import React, { useContext } from 'react';
import WalletContext from '../../context/WalletContext';

import {
  BodyTable, TableHeader, Container,
} from './styles';

function TableExpense() {
  const { form: { expense } } = useContext(WalletContext);

  const fields = ['Valor', 'Descrição', 'Moeda', 'Método de pagamento',
    'Tag', 'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão',
  ];

  return (
    <Container>
      <TableHeader>
        <tr>
          { fields.map((items) => (
            <div>
              <span key={items}>
                { items }
              </span>
            </div>
          )) }
          <div>
            <span>Editar/Excluir</span>
          </div>
        </tr>
      </TableHeader>
      <BodyTable>
        { expense.map(({
          id, coin, description, method, tag, value, infoCoin,
        }) => (
          <tr key={id}>
            <td>{value}</td>
            <td>{description}</td>
            <td>{infoCoin[coin].name.split('/', 1)}</td>
            <td className="method">{method}</td>
            <td>{tag}</td>
            <td>{parseFloat(infoCoin[coin].ask).toFixed(2)}</td>
            <td>{(infoCoin[coin].ask * value).toFixed(2)}</td>
            <td>Real</td>
          </tr>
        )) }
      </BodyTable>
    </Container>
  );
}

export default TableExpense;
