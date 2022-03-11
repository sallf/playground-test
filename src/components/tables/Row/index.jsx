import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

import PrimaryCta from '$components/buttons/PrimaryCta';
import DropdownBtn from '$components/buttons/DropdownBtn';

const Row = (props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const {
    isHeader,
    hasCta,
    onClick,
    children,
  } = props;

  // --------------------- ===
  //  STATE
  // ---------------------
  const [isDown, setIsDown] = useState(false);

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div
      className={`
        ${styles.row}
        ${isHeader ? styles.row__header : ''}
        ${hasCta ? styles.row__cta : ''}
      `}
      role="row"
    >
      {
        hasCta && !isHeader && (
          <div className={styles.ctaWrapper}>
            <PrimaryCta
              label="Claim"
              onClick={onClick}
            />
          </div>
        )
      }
      <div className={styles.dropdownWrapper}>
        <DropdownBtn
          isDown={isDown}
          onClick={() => setIsDown((prev) => !prev)}
        />
      </div>
      <div
        className={`
          ${styles.innerCrop}
          ${isDown ? styles.innerCrop__isDown : ''}
        `}
      >
        {children}
      </div>
    </div>
  );
};

Row.defaultProps = {
  isHeader: false,
  onClick: () => {},
};

Row.propTypes = {
  isHeader: PropTypes.bool,
  hasCta: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Row;
