import React, { PropTypes } from 'react';

import RouterService from '../../../services/common/router-service';

import styles from './hero-heading.scss';

const HeroHeading = ({ title }) => {
  return (
    <div className={styles.header}>
      <h1 onClick={RouterService.goToPath('/')} className={styles.h1}>{title}&nbsp;</h1>
    </div>
  );
};

HeroHeading.propTypes = {
  title: PropTypes.string
};

export default HeroHeading;
