import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

import PrimaryCta from '$components/buttons/PrimaryCta';

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
      className={`${styles.row} ${isHeader ? styles.row__header : ''}`}
      role="row"
    >
      {
        hasCta && !isHeader && (
          <PrimaryCta
            onClick={onClick}
          />
        )
      }
      {children}
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
