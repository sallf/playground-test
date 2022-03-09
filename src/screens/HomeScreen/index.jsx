import React, { useState } from 'react';
import styles from './index.scss';

const HomeScreen = () => {
  // --------------------- ===
  //  STATE
  // ---------------------
  const [isModal, setIsModal] = useState(false);

  return (
    <div className={styles.wrapper}>
      <p>Home Screen</p>
    </div>
  );
};

export default HomeScreen;
