import React from 'react';
import Input from '../../components/Input';

export default function Login() {
  return (
    <div>
      Login
      <div>
        <Input
          type="text"
          name="email"
          id="email"
          placeholder="Digite seu email"
        />
      </div>
    </div>
  );
}
