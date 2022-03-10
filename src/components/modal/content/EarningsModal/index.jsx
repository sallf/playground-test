import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

import bitcoinImg from '$images/bitcoin-icon.png';

import ModalTitle from '$components/typography/ModalTitle';

const EarningsModal = () => {
  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div>
      <ModalTitle>Claim</ModalTitle>
      <div className={styles.imgWrapper}>
        <img src={bitcoinImg} className={styles.img} alt="" />
      </div>
    </div>
  );
};

EarningsModal.defaultProps = {

};

EarningsModal.propTypes = {

};

export default EarningsModal;
