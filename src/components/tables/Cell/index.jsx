import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

const Cell = (props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const {
    content,
    size,
    isHeader,
  } = props;

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <span
      className={`${styles.cell} ${isHeader ? styles.header : ''}`}
      role={isHeader ? 'columnheader' : 'cell'}
    >
      {content}
    </span>
  );
};

Cell.defaultProps = {

};

Cell.propTypes = {

};

export default Cell;
