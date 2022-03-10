import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const ModalTitle = (props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const {
    children,
  } = props;

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <p className={styles.title}>
      {children}
    </p>
  );
};

ModalTitle.defaultProps = {

};

ModalTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalTitle;
