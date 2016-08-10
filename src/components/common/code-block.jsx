import React, { PropTypes } from 'react';

const getLine = (line, index) => {
  return (
    <div key={index} className="line">
      { line }
    </div>
  );
};

const CodeBlock = ({
  code,
  isString
}) => {

    // Check for empty prop
  if (!code) {
    return <p className="text-danger">Nothing to display</p>;
  }

  let json = code;
  if (!isString) {
    json = JSON.stringify(code, null, 2); // Get formatted JSON
  }

    // Split on new line
  const lines = json.split('\n');

  return (
    <div>
      <pre>
        { lines.map(getLine) }
      </pre>
    </div>
    );
};

CodeBlock.propTypes = {
  code: PropTypes.object,
  isString: PropTypes.object
};

export default CodeBlock;
