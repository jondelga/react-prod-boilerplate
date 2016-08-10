import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const GenericCounterAction = ({
  label,
  path,
  action,
  counter
}) => {
  return (
    <section>
      <div>
        Counter:&nbsp;
        <code>{ counter }</code>
      </div>
      <div>
        You are at the <em>{label}</em> component:&nbsp;
        <code>('{path}')</code>
      </div>
      <button
        className="button-primary"
        onClick={action}
      >
        {label}
      </button>
    </section>
  );
};

GenericCounterAction.propTypes = {
  label: PropTypes.object,
  path: PropTypes.object,
  action: PropTypes.object,
  counter: PropTypes.object
};

export default connect(
  (state, ownProps) => ({
    counter: state.counter,
    path: ownProps.path,
    label: ownProps.label
  }),
  null
)(GenericCounterAction);
