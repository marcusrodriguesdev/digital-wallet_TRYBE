import React from 'react';
import PropTypes from 'prop-types';

export default function Input(
  {
    placeholder, value, onChange, name, id, type,
  },
) {
  return (
    <label htmlFor={id}>
      <input
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        id={id}
        type={type}
      />
    </label>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
