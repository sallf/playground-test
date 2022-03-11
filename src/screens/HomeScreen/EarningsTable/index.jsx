import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';
import { columnData } from './columnData';

import TableWrapper from '$components/tables/TableWrapper';
import Row from '$components/tables/Row';
import Cell from '$components/tables/Cell';

const EarningsTable = (props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const {
    earningsData,
    onClick,
  } = props;

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <TableWrapper
      hasCta
      columnData={columnData}
    >
      <div className={styles.body}>
        {
          earningsData.map((claim) => (
            <Row
              hasCta
              onClick={() => onClick(claim.id)}
              key={claim.id}
            >
              {
                claim.orderedCells.map((cell, i) => (
                  <Cell
                    key={i} // eslint-disable-line react/no-array-index-key
                    content={cell}
                    size={columnData[i].size}
                    textAlign={columnData[i].textAlign}
                    isFirst={i === 0} // mvp. probably want config over convention here
                    isLast={claim.orderedCells.length - 1 === i}
                  />
                ))
              }
            </Row>
          ))
        }
      </div>
    </TableWrapper>
  );
};

EarningsTable.defaultProps = {
  earningsData: [],
};

EarningsTable.propTypes = {
  earningsData: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.object,
  ])),
  onClick: PropTypes.func.isRequired,
};

export default EarningsTable;
