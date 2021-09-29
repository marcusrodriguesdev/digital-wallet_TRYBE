import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import Input from '../../components/InputsForm/Input';
import WalletContext from '../../context/WalletContext';

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
    history.push('/carteira');
    localStorage.setItem('exchangeRates', JSON.stringify([]));
  }

  return (
    <div>
      Login
      <div>
        <Input
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
          name="password"
          placeholder="Digite sua senha"
          id="password"
          value={password}
          onChange={({ target: { value } }) => {
            setPassword(value);
            checkPassword();
          }}
        />
        <button
          type="button"
          disabled={!validated || !checkEmail()}
          onClick={() => submitLogin()}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
