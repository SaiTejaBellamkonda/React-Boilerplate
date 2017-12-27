import { connect } from 'react-redux';
import HomePage from '../components/HomePage.jsx';

const mapDispatchToProps = {
};

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
