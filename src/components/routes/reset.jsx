import React, { PropTypes } from 'react';
import CounterAction from './generic-counter-action';
import { connect } from 'react-redux';
import { reset } from '../../redux/actions/action-creators';

const Reset = ({
  reset // eslint-disable-line
}) => {
  return (
    <CounterAction
      label="Reset"
      path="/reset"
      action={reset}
    />
  );
};

Reset.propTypes = {
  reset: PropTypes.object
};

export default connect(null, { reset })(Reset);
