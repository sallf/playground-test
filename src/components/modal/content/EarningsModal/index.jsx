import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

import bitcoinImg from '$images/bitcoin-icon.png';

import ModalTitle from '$components/typography/ModalTitle';
import Input from '$components/forms/Input';
import ModalCta from '$components/buttons/ModalCta';

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
      <div>
        <ModalCta
          type="primary"
          label="Claim"
          onClick={() => {}}
        />
        <ModalCta
          type="secondary"
          label="Back"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

EarningsModal.defaultProps = {

};

EarningsModal.propTypes = {

};

export default EarningsModal;
