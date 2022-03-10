import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const RowGroup = (props) => {
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
    <div className={styles.rowGroup} role="rowgroup">
      {children}
    </div>
  );
};

RowGroup.defaultProps = {

};

RowGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RowGroup;
