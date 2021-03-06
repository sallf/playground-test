import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

import Row from '$components/tables/Row';
import RowGroup from '$components/tables/RowGroup';
import Cell from '$components/tables/Cell';

const TableWrapper = (props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const {
    hasCta,
    columnData,
    children,
  } = props;

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className={styles.wrapper}>
      <div className={styles.inset} role="table">
        <RowGroup>
          <Row isHeader hasCta={hasCta}>
            {
              columnData.map((cellData, i) => (
                <Cell
                  key={i} // eslint-disable-line react/no-array-index-key
                  content={cellData.label}
                  size={cellData.size}
                  isHeader
                  textAlign={cellData.textAlign}
                  isFirst={i === 0}
                  isLast={columnData.length - 1 === i}
                />
              ))
            }
          </Row>
        </RowGroup>
        <RowGroup>
          {children}
        </RowGroup>
      </div>
    </div>
  );
};

TableWrapper.defaultProps = {
  hasCta: false,
};

TableWrapper.propTypes = {
  hasCta: PropTypes.bool,
  columnData: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    size: PropTypes.number,
  })).isRequired,
  children: PropTypes.node.isRequired,
};

export default TableWrapper;
