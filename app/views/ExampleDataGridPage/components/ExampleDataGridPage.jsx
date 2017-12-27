import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button } from 'ui-core';

export const ExampleDataGridPage = (props) => (
  <div>
    <h1>EXAMPLE PAGE</h1>
    <Button name="Request Data" onClick={() => props.onRequestData(10)} />
    <Grid
      columns={props.columns}
      records={props.records}
      isDragOver={''}
      selectedItemIds={new Set([])}
      selectionKey={'caseId'}
      bookmarkedItemIds={new Set([])}
      domId={'TEST'}
      sharingShown={false}
      columnOptions={[]}
      onColDragStart={() => false}
      onColDragOver={() => false}
      onColDragDropBefore={() => false}
      onColDragDropAfter={() => false}
      onColDrag={() => false}
      onColDrop={() => false}
      onSortTableColumn={() => false}
      onRowSelect={() => false}
      onSelectAll={() => false}
      onRowBookmark={() => false}
      onClickThrough={() => false}
      onSettingsCancel={() => false}
      onSharingCancel={() => false}
      toggleTableColumn={() => false}
      supportSelection={false}
    />
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
