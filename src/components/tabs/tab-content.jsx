import React from 'react';

const style = {
  margin: 5,
  padding: 5,
  height: '100%',
  borderTopRightRadius: 10,
  borderBottomLeftRadius: 10
};

const TabContent = ({
  children // eslint-disable-line
}) => {
  return (
        <div style={style}>
            { children }
        </div>
    );
};

export default TabContent;
