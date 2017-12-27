/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. Masthead)
 */

import React from 'react';
import Helmet from 'react-helmet';
import {
  Masthead,
  LeftStrip,
  SingleSelectGroup,
  MultiSelectGroup,
} from 'ui-core';
import './styles.scss';

export const App = (props) => (
  <div>
    <Helmet
      titleTemplate="%s - React.js Boilerplate"
      defaultTitle="React.js Boilerplate"
      meta={[
        { name: 'description', content: 'A React.js Boilerplate application' },
      ]}
    />

    <Masthead
      {...props.mastheadConfig}
      {...props.mastheadActions}
      onNavMenuSelect={(event, state) => {
        const item = props.mastheadConfig.navMenuItems[state.activeSectionIndex][state.activeMenuItemIndex];
        props.mastheadActions.onNavMenuSelect(event, item);
      }}
    />

    <LeftStrip title="Task Workflow">
      <SingleSelectGroup
        items={props.leftStripConfig.singleSelectGroupItems}
        title="Assigned to me"
        orientation="right"
        onSelect={props.leftStripActions.onSingleGroupSelect}
      />
      <MultiSelectGroup
        headerId="Foo"
        headerText="Multi Select Group"
        menuItems={props.leftStripConfig.multiSelectGroupItems}
        onCheckGroup={props.leftStripActions.onMultiGroupCheckHeader}
        onCheckItem={props.leftStripActions.onMultiGroupCheck}
        isLastChild
      />
    </LeftStrip>
    <div id="main_content">
      {React.Children.toArray(props.children)}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
  mastheadConfig: React.PropTypes.object,
  mastheadActions: React.PropTypes.object,
  leftStripConfig: React.PropTypes.object,
  leftStripActions: React.PropTypes.shape({
    onSingleGroupSelect: React.PropTypes.func,
    onSingleSectionOpenClose: React.PropTypes.func,
    onSingleSectionSelect: React.PropTypes.func,
    onMultiGroupCheck: React.PropTypes.func,
    onMultiGroupCheckHeader: React.PropTypes.func,
  }),
};

export default App;
