import React from 'react';
import TabMenu from './tab-menu';
import TabContent from './tab-content';

const Tabs = ({
  activePath, // eslint-disable-line
  children // eslint-disable-line
}) => {
  return (
    <section>

      { /* Render the link menu */ }
      <TabMenu
        activePath={activePath}
        items={{
          increment: '/sample/',
          decrement: '/sample/decrement',
          reset: '/sample/reset'
        }}
      />

      { /* Render the active route */ }
      <TabContent>
        { children }
      </TabContent>

    </section>
  );
};

export default Tabs;
