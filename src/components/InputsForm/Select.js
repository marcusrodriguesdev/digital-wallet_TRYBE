import PropTypes from 'prop-types';
import React from 'react';

// import { Container } from './styles';

function Select(
  {
    option, name, text,
  },
) {
  return (
    <label htmlFor={name}>
      {text}
      <select>
        {option.map((item) => (
          <option
            key={item}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  option: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  text: PropTypes.string.isRequired,
};

export default Select;
