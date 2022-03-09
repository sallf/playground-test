import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const TableWrapper = () => {
  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className={styles.wrapper}>
      <div className={styles.inset}>
        hello world
      </div>
    </div>
  );
};

TableWrapper.defaultProps = {

};

TableWrapper.propTypes = {

};

export default TableWrapper;
