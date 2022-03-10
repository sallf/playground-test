import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

import bitcoinImg from '$images/bitcoin-icon.png';

import ModalTitle from '$components/typography/ModalTitle';
import Input from '$components/forms/Input';

const EarningsModal = () => {
  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div>
      <div className={styles.section}>
        <ModalTitle>Claim</ModalTitle>
      </div>
      <div className={styles.section}>
        <img src={bitcoinImg} className={styles.img} alt="" />
      </div>
      <div className={styles.section}>
        <Input
          label="Transfer To"
          name="transferTo"
          type="text"
          isRequired
        />
      </div>
      <div className={styles.section}>
      </div>
    </div>
  );
};

EarningsModal.defaultProps = {

};

EarningsModal.propTypes = {

};

export default EarningsModal;
