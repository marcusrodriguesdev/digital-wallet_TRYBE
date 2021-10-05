import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import Input from '../../components/InputsForm/Input';
import WalletContext from '../../context/WalletContext';
import GlobalStyle from '../../styles/GlobalStyle';
import {
  Container, Form, ContainerButton, Footer,
} from './styles';

export default function Login({ history }) {
  const { email, setEmail } = useContext(WalletContext);
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  function checkPassword() {
    if (password.length >= 6) {
      setValidated(true);
    }
  }

  function checkEmail() {
    const regexEmail = /\S+@\S+\.\S+/;
    const check = regexEmail.test(email);
    return check;
  }

  function submitLogin() {
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('exchangeRates', JSON.stringify([]));
    history.push('/carteira');
  }

  return (
    <Container>
      <GlobalStyle />
      <Form>
        <div className="container-title">
          <h2>Digital Wallet</h2>
        </div>
        <Input
          className="Input"
          type="text"
          name="email"
          value={email}
          id="email"
          onChange={({ target }) => {
            setEmail(target.value);
            checkPassword();
          }}
          placeholder="Digite seu email"
        />
        <Input
          type="password"
          className="Input"
          name="password"
          placeholder="Digite sua senha"
          id="password"
          value={password}
          onChange={({ target: { value } }) => {
            setPassword(value);
            checkPassword();
          }}
        />
        <ContainerButton
          validated={validated}
        >
          <button
            type="button"
            disabled={!validated || !checkEmail()}
            onClick={() => submitLogin()}
          >
            Entrar
          </button>
        </ContainerButton>
      </Form>
      <Footer>
        <br />
        <a
          href="https://github.com/marcusrodriguesdev"
          target="_blank"
          rel="noreferrer"
        >
          Desenvolvido por Marcus Rodrigues
        </a>
      </Footer>
    </Container>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
