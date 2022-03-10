import React, { useState, useEffect } from 'react';
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
import Alert from '$components/typography/Alert';

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

const success = 'Claim successfully submitted!';

const HomeScreen = () => {
  // --------------------- ===
  //  STATE
  // ---------------------
  const [currentId, setCurrentId] = useState(null);
  const [earningsData, setEarningsData] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

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

  useEffect(() => {
    let timer;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showSuccess]);

  // --------------------- ===
  //  HANDLERS
  // ---------------------
  const handleSuccess = () => {
    setShowSuccess(true);
  };

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className={styles.wrapper}>
      {
        showSuccess && (
          <div className={styles.alertWrapper}>
            <Alert
              type="success"
              message={success}
            />
          </div>
        )
      }
      <EarningsTable
        earningsData={earningsData}
        onClick={setCurrentId}
      />
      <Modal
        isVisible={!!currentId}
      >
        <EarningsModal
          onBack={(wasSuccess = false) => {
            setCurrentId(null);
            if (wasSuccess) {
              handleSuccess();
            }
          }}
          id={currentId}
        />
      </Modal>
    </div>
  );
};

export default HomeScreen;
