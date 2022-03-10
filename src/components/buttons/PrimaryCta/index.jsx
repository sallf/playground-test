import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const PrimaryCta = (props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const {
    label,
  } = props;

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <button
      type="button"
      className={styles.btn}
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
};

export default PrimaryCta;
