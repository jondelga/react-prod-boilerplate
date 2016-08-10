import React, { PropTypes } from 'react';
import CounterAction from './generic-counter-action';
import { connect } from 'react-redux';
import { increment } from '../../redux/actions/action-creators';

const Increment = ({
  increment // eslint-disable-line
}) => {
  return (
    <CounterAction
      label="Increment"
      path="/"
      action={increment}
    />
  );
};

Increment.propTypes = {
  increment: PropTypes.object
};

export default connect(
    null,
    { increment: () => increment(1)}
)(Increment);
