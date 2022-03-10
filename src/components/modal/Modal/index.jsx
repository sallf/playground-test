import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import styles from './index.scss';

import { useMountEffect } from '$hooks/react';

const duration = 0.3;

const Modal = (props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const {
    isVisible,
    children,
  } = props;

  // --------------------- ===
  //  REFS
  // ---------------------
  const tl = useRef(null);
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);

  // --------------------- ===
  //  ANIMATION
  // ---------------------
  const buildAnimation = (isVis) => {
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .add('start')
      .to(modalRef.current, {
        duration,
        backgroundColor: 'rgba(0, 0, 0, 0)', // convert to scssVar
        display: 'none',
      })
      .to(modalContentRef.current, {
        duration,
        y: '30px',
        opacity: 0,
      }, 'start');

    // Set init position
    if (isVis) {
      tl.current.seek(0);
    } else {
      tl.current.seek(duration);
    }
  };

  // --------------------- ===
  //  EFFECTS
  // ---------------------
  useMountEffect(() => {
    buildAnimation(isVisible);
  });

  useEffect(() => {
    if (isVisible) {
      tl.current.reverse();
    } else {
      tl.current.play();
    }
  }, [isVisible]);

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className={styles.modal} ref={modalRef}>
      <div className={styles.outerSpacer}>
        <div className={styles.wrapper} ref={modalContentRef}>
          <div className={styles.inset}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.defaultProps = {
  children: null,
};

Modal.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool.isRequired,
};

export default Modal;
