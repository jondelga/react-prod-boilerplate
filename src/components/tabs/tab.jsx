import React, { PropTypes } from 'react';
import RouterService from '../../services/common/router-service';

const style = {
  tab: {
    float: 'left',
    margin: 0,
    marginRight: 10,
    padding: '.30em',
    fontSize: '1.2em',
    fontWeight: 300,
    cursor: 'pointer',
    color: '#212121',
    backgroundColor: '#9CCC65',
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    border: '1px solid #8BC34A'
  },
  active: {
    color: '#FFFFFF',
    backgroundColor: '#689F38',
    border: '1px solid #558B2F'
  }
};

const Tab = ({ label, path, active }) => {
  return (
    <li
      style={{...style.tab, ...active ? style.active : '' }}
      onClick={RouterService.goToPath(path)}
    >
      { label }
    </li>
  );
};

Tab.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
  active: PropTypes.object
};

export default Tab;
