import React from 'react';
import Tab from './tab';
import map from 'lodash/map';

const style = {
  tabs: {
    display: 'flex',
    backgroundColor: '#DCEDC8',
    listStyleType: 'none',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    margin: 0,
    padding: 0
  }
};

const _renderTab = activePath => {
  return function (itemPath, label) {
    return (
      <Tab
        active={activePath === itemPath}
        key={label}
        path={itemPath}
        label={label}
      />
    );
  };
};

const TabMenu = ({
  items, // eslint-disable-line
  activePath // eslint-disable-line
}) => {
  return (
    <ul style={style.tabs}>
      { map(items, _renderTab(activePath)) }
    </ul>
  );
};

export default TabMenu;
