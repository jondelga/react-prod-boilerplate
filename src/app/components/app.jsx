import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AjaxRequest from './ajax/ajax-request';
import CodeBlock from './common/code-block';
import Tabs from './tabs/tabs';
import Panel from './common/panel';

import styles from './app.scss';

const App = ({ children, state, location }) => {
  return (
    <section className={styles.container}>

      <Panel
        faIcon="download"
        className={styles.panel}
        title="Ajax Example"
      >
        <AjaxRequest />
      </Panel>

      <section className={styles.column}>

        <Panel
          faIcon="link"
          className={styles.panel}
          title="Router Example"
        >
          <Tabs activePath={location.pathname} >
            { children }
          </Tabs>
        </Panel>

        <Panel
          faIcon="tree"
          className={styles.panel}
          title="Redux State"
        >
          <CodeBlock code={state} />
        </Panel>

      </section>
    </section>
  );
};

App.propTypes = {
  children: PropTypes.object,
  state: PropTypes.object,
  location: PropTypes.object
};

export default connect(state => state)(App);
