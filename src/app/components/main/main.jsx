import React, { PropTypes } from 'react';
import HeroHeading from '../common/hero-heading/hero-heading';
import Footer from '../common/footer/footer';

import styles from '../app.scss';

const Main = ({ children }) => {
  return (
    <section className={styles.wrapper}>

      <div className={styles.main}>
        <HeroHeading title="React Prod" />
          { children }
      </div>
      <Footer />

    </section>
  );
};

Main.propTypes = {
  children: PropTypes.object
};

export default Main;
