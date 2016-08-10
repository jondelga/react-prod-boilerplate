import React from 'react';

import RouterService from '../../../services/common/router-service';

import styles from './footer.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <h6>
        <span className={ styles.sample } onClick={ RouterService.goToPath('/sample')}>
          Sample Page
        </span>
      </h6>
    </div>
  );
};

export default Footer;
