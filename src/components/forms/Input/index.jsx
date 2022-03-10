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
    status,
    isRequired,
  } = props;

  console.log('statt', status);

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
          className={`${styles.input} ${styles[status]}`}
          type={type}
          name={name}
          required={isRequired}
          value={value}
          onChange={onChange}
          disabled={status === 'success'}
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
  status: PropTypes.oneOf([
    'normal',
    'error',
    'success',
  ]).isRequired,
  isRequired: PropTypes.bool,
};

export default Input;
