import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WAValidator from 'multicoin-address-validator';
import styles from './index.scss';

import bitcoinImg from '$images/bitcoin-icon.png';
import { buildRequest } from '$api/requestFactory';
import {
  checkStatus,
  logError,
  parseJSON,
} from '$api/fetchUtils';

import ModalTitle from '$components/typography/ModalTitle';
import Alert from '$components/typography/Alert';
import Input from '$components/forms/Input';
import ModalCta from '$components/buttons/ModalCta';

const err = 'This is not a valid ETH address. Please try again.';

const EarningsModal = (props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const {
    id,
    onBack,
  } = props;

  // --------------------- ===
  //  STATE
  // ---------------------
  const [value, setValue] = useState('');
  const [alert, setAlert] = useState(null);

  // --------------------- ===
  //  HANDLERS
  // ---------------------
  const setErr = () => {
    setAlert({
      type: 'error',
      message: err,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault(); // stop enter from reloading page
    const isValid = WAValidator.validate(value, 'eth');
    if (isValid) {
      const request = buildRequest('submitClaim', {
        claimId: id,
        address: value,
      });
      fetch(request)
        .then(checkStatus)
        .then(parseJSON)
        .then(() => onBack(true))
        .catch((e) => {
          logError(e);
          setErr();
        });
    } else {
      setErr();
    }
  };

  // --------------------- ===
  //  EFFECTS
  // ---------------------
  useEffect(() => {
    // rest form when id changes
    if (id > 0) {
      setValue('');
      setAlert(null);
    }
  }, [id]);

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
        {
          alert && (
            <Alert
              type={alert.type}
              message={alert.message}
            />
          )
        }
        <form
          onSubmit={handleSubmit}
        >
          <Input
            label="Transfer To"
            name="transferTo"
            type="text"
            value={value}
            onChange={(evt) => setValue(evt.target.value)}
            status={alert ? alert.type : 'normal'}
            isRequired
          />
        </form>
      </div>
      <div>
        <ModalCta
          type="primary"
          label="Claim"
          onClick={handleSubmit}
        />
        <ModalCta
          type="secondary"
          label="Back"
          onClick={() => onBack(false)}
        />
      </div>
    </div>
  );
};

EarningsModal.defaultProps = {
  id: null,
};

EarningsModal.propTypes = {
  id: PropTypes.number,
  onBack: PropTypes.func.isRequired,
};

export default EarningsModal;
