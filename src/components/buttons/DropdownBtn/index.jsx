import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

// I really like https://www.npmjs.com/package/react-inlinesvg for this usually

const DropdownBtn = (props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const {
    isDown,
    onClick,
  } = props;

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <button
      className={`${styles.btn} ${isDown ? styles.btn__isDown : ''}`}
      type="button"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.94 21.94">
        <path d="M21.94,11A11,11,0,1,1,11,0h0a11,11,0,0,1,11,11ZM11.72,16l6-6a1,1,0,0,0,0-1.49h0L17,7.76a1,1,0,0,0-1.49,0h0L11,12.26,6.48,7.76a1.07,1.07,0,0,0-1.5,0H5l-.76.75a1.07,1.07,0,0,0,0,1.5h0l6,6a1.07,1.07,0,0,0,1.5,0Z" />
      </svg>
      <span className={styles.sr}>
        {`Click to ${isDown ? 'compress' : 'expand'}`}
      </span>
    </button>
  );
};

DropdownBtn.defaultProps = {

};

DropdownBtn.propTypes = {
  isDown: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DropdownBtn;
