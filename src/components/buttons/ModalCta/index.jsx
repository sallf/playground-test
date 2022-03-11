import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const ModalCta = (props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const {
    type,
    label,
    onClick,
  } = props;

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <button
      type="button"
      className={`
        ${styles.btn}
        ${type === 'secondary' ? styles.btn__secondary : ''}
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

ModalCta.defaultProps = {
  type: 'primary',
  label: 'Claim',
};

ModalCta.propTypes = {
  type: PropTypes.oneOf([
    'primary',
    'secondary',
  ]),
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ModalCta;
