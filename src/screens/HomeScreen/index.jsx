import React, { useState } from 'react';
import styles from './index.scss';
import { tableHeaders } from './tableHeaders';

import { useMountEffect } from '$hooks/react';
import {
  checkStatus,
  logError,
  parseJSON,
} from '$api/fetchUtils';
import { buildRequest } from '$api/requestFactory';
import TableBuilder from '$components/tables/TableBuilder';

const HomeScreen = () => {
  // --------------------- ===
  //  STATE
  // ---------------------
  const [isModal, setIsModal] = useState(false);
  const [earningsData, setEarningsData] = useState([]);

  // --------------------- ===
  //  EFFECTS
  // ---------------------
  useMountEffect(() => {
    const request = buildRequest('claims');
    fetch(request)
      .then(checkStatus)
      .then(parseJSON)
      .then((res) => setEarningsData(res))
      .catch(logError);
  });

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className={styles.wrapper}>
      <TableBuilder
        headers={tableHeaders}
        body={earningsData}
      />
    </div>
  );
};

export default HomeScreen;
