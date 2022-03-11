import React from 'react';
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
          isDown={false}
          onClick={() => {}}
        />
      </div>
      <div className={styles.innerCrop}>
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
