import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Alert = (props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const {
    type,
    message,
  } = props;

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className={`${styles.wrapper} ${styles[type]}`}>
      {message}
    </div>
  );
};

Alert.defaultProps = {

};

Alert.propTypes = {
  type: PropTypes.oneOf([
    'success',
    'error',
  ]).isRequired,
  message: PropTypes.string.isRequired,
};

export default Alert;
