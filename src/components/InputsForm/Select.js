import PropTypes from 'prop-types';
import React from 'react';

export default function Select({
  name, id, option, onChange, text, className,
}) {
  function globalOption() {
    if (option) {
      const options = option.map((info) => (
        <option value={info}>
          {info}
        </option>
      ));
      return options;
    }
    return '';
  }

  return (
    <label htmlFor={name}>
      {text}
      <select
        name={name}
        id={id}
        onChange={onChange}
        className={className}
      >
        { globalOption() }
      </select>
    </label>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  option: PropTypes.arrayOf.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
