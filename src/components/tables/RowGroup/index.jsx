import React from 'react';
import PropTypes from 'prop-types';

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
    <div role="rowgroup">
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
