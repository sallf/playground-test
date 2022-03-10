import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

const Modal = (props) => {
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
    <div className={styles.modal}>
      <div className={styles.outerSpacer}>
        <div className={styles.wrapper}>
          <div className={styles.inset}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  children: null,
};

Modal.propTypes = {
  children: PropTypes.node,
};

export default Modal;
