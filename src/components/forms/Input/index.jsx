import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

const Input = (props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const {
    label,
    name,
    type,
    value,
    onChange,
    isRequired,
  } = props;

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className={styles.group}>
      <label
        htmlFor={name}
        className={styles.label}
      >
        <span
          className={styles.labelText}
        >
          {label}
          {isRequired ? '*' : ''}
        </span>
        <input
          className={styles.input}
          type={type}
          name={name}
          required={isRequired}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

Input.defaultProps = {

  isRequired: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
};

export default Input;
