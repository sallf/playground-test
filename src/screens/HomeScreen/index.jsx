import React, { useState } from 'react';
import styles from './index.scss';

import { useMountEffect } from '$hooks/react';
import {
  checkStatus,
  logError,
  parseJSON,
} from '$api/fetchUtils';
import { buildRequest } from '$api/requestFactory';

import { numberToUSD } from '$common/numbers';

import EarningsTable from '$screens/HomeScreen/EarningsTable';
import Modal from '$components/modal/Modal';
import EarningsModal from '$components/modal/content/EarningsModal';

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
      <EarningsTable
        earningsData={earningsData}
        onClick={setCurrentId}
      />
      <Modal
        isVisible={!!currentId}
      >
        <EarningsModal />
      </Modal>
    </div>
  );
};

export default HomeScreen;
