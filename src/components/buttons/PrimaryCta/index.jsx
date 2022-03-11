import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const PrimaryCta = (props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const {
    label,
    onClick,
  } = props;

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <button
      type="button"
      className={styles.btn}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

PrimaryCta.defaultProps = {
  label: 'Claim',
};

PrimaryCta.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default PrimaryCta;
