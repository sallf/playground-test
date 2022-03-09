import React, { useState } from 'react';
import styles from './index.scss';

import TableBuilder from '$components/tables/TableBuilder';

const HomeScreen = () => {
  // --------------------- ===
  //  STATE
  // ---------------------
  const [isModal, setIsModal] = useState(false);

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className={styles.wrapper}>
      <TableBuilder />
    </div>
  );
};

export default HomeScreen;
