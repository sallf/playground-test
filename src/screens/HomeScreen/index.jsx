import React, { useState } from 'react';
import styles from './index.scss';
import { columnData } from './columnData';

import { useMountEffect } from '$hooks/react';
import {
  checkStatus,
  logError,
  parseJSON,
} from '$api/fetchUtils';
import { buildRequest } from '$api/requestFactory';

import { numberToUSD } from '$common/numbers';

import TableWrapper from '$components/tables/TableWrapper';
import Row from '$components/tables/Row';
import Cell from '$components/tables/Cell';

const adjustEarningsData = (data) => (
  data.map((claim, i) => ({
    id: claim.claimId,
    orderedCells: [
      i % 2 === 1
        ? 'Some Activity'
        : 'Some really really really long Activity',
      claim.rewardToken,
      claim.unclaimedAmount,
      claim.totalClaimed,
      claim.rewardTokenEarned,
      numberToUSD(claim.usdTotal),
      claim.weeklyRank,
    ],
  }))
);

const HomeScreen = () => {
  // --------------------- ===
  //  STATE
  // ---------------------
  const [currentId, setCurrentId] = useState(null);
  const [earningsData, setEarningsData] = useState([]);

  // --------------------- ===
  //  EFFECTS
  // ---------------------
  useMountEffect(() => {
    const request = buildRequest('claims');
    fetch(request)
      .then(checkStatus)
      .then(parseJSON)
      .then((res) => setEarningsData(
        adjustEarningsData(res),
      ))
      .catch(logError);
  });

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className={styles.wrapper}>
      <TableWrapper
        hasCta
        columnData={columnData}
      >
        {
          earningsData.map((claim) => (
            <Row
              hasCta
              onClick={() => setCurrentId(claim.id)}
              key={claim.id}
            >
              {
                claim.orderedCells.map((cell, i) => (
                  <Cell
                    key={i} // eslint-disable-line react/no-array-index-key
                    content={cell}
                    size={columnData[i].size}
                  />
                ))
              }
            </Row>
          ))
        }
      </TableWrapper>
    </div>
  );
};

export default HomeScreen;
