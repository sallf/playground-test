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
    isFirst,
    isLast,
  } = props;

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div
      className={`
        ${styles.cell}
        ${isHeader ? styles.cell__header : ''}
        ${isFirst ? styles.cell__first : ''}
      `}
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
      {
        !isLast && (
          <div className={styles.divider} />
        )
      }
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
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
};

export default Cell;
