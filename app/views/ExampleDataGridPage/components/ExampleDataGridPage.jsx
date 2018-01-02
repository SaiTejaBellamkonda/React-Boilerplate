import React from 'react';
import PropTypes from 'prop-types';


export const ExampleDataGridPage = (props) => (
  <div>
    <h1>EXAMPLE PAGE</h1>
   
  </div>
);

ExampleDataGridPage.defaultProps = {
  records: [],
};

ExampleDataGridPage.propTypes = {
  onRequestData: PropTypes.func.isRequired,
  columns: PropTypes.object.isRequired,
  records: PropTypes.array,
};

export default ExampleDataGridPage;
