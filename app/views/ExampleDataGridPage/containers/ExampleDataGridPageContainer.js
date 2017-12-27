import { connect } from 'react-redux';
import ExampleDataGridPage from '../components/ExampleDataGridPage';
import { onRequestData } from '../modules/actions';
import { makeSelectLaunchData } from '../modules/selectors';
import { GRID_COLUMNS } from '../modules/constants';

const mapDispatchToProps = {
  onRequestData,
};

const mapStateToProps = (state) => ({
  ...state,
  columns: GRID_COLUMNS,
  records: makeSelectLaunchData()(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleDataGridPage);
