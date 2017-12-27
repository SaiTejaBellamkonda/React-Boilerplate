import { connect } from 'react-redux';
import ExampleBlankPage from '../components/ExampleBlankPage.jsx';

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, mapDispatchToProps)(ExampleBlankPage);
