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
    textAlign,
  } = props;

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div
      className={`${styles.cell} ${isHeader ? styles.cell__header : ''}`}
      style={{
        flexGrow: size,
        textAlign,
        justifyContent: textAlign === 'left' ? 'flex-start' : 'flex-end', // this could be better
      }}
      role={isHeader ? 'columnheader' : 'cell'}
      title={content} // easy tooltip for overflowing text
    >
      <span className={styles.span}>
        {content}
      </span>
    </div>
  );
};

Cell.defaultProps = {
  content: '',
  size: 1,
  isHeader: false,
  textAlign: 'right',
};

Cell.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  size: PropTypes.number,
  isHeader: PropTypes.bool,
  textAlign: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),
};

export default Cell;
