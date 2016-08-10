import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router
        routes={routes}
        history={browserHistory}
      />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object
};

export default Root;
