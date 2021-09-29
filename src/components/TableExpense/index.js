import React from 'react';

import { Header } from './styles';

function TableExpense() {
  const fields = ['Valor', 'Descrição', 'Moeda', 'Método de pagamento',
    'Tag', 'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão',
    'Editar/Excluir',
  ];
  return (
    <table>
      <thead>
        <tr>
          { fields.map((items) => (
            <Header key={items}>
              { items }
            </Header>
          )) }
        </tr>
      </thead>
    </table>
  );
}

export default TableExpense;
