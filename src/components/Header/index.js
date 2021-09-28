import React from 'react';

import Container from './styles';

function Header() {
  const { email } = JSON.parse(localStorage.getItem('user'));
  return (
    <Container>
      <div>
        <span>{email}</span>
      </div>
      <div>
        <span>0</span>
      </div>
      <div>
        <span>BRL</span>
      </div>
    </Container>
  );
}

export default Header;
