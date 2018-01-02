/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. Masthead)
 */

import React from 'react';
import Helmet from 'react-helmet';
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
    <div><h1>Welcome! Sai Teja for the new Journey</h1></div>

    
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
