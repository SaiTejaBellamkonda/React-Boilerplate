import { connect } from 'react-redux';
import AppWrapper from '../components/AppWrapper';
import { makeSelectMasthead, makeSelectLeftStrip } from '../modules/selectors';
import {
  onProductMenuSelect,
  onRequestTestApiTimestamp,
  onSingleGroupSelect,
  onMultiGroupCheckHeader,
  onMultiGroupCheck,
} from '../modules/actions';

const mapDispatchToProps = (dispatch, ownProps) => {
  const { router } = ownProps;
  return {
    mastheadActions: {
      notificationsCallbacks: {
        markAllAsRead: () => false,
        onPrevious: () => false,
        onNext: () => false,
      },
      onNavMenuOpenClose: () => false,
      onProductMenuOpenClose: () => false,
      onSupportMenuOpenClose: () => false,
      supportMenuSearch: () => false,
      onAvatarMenuOpenClose: () => false,
      onNavMenuSelect: (event, item) => {
        router.push(item.path);
        return dispatch(onRequestTestApiTimestamp());
      },
      onProductMenuSelect: (event, state) => dispatch(onProductMenuSelect(state)),
    },
    leftStripActions: {
      onMultiGroupCheck: (e, state) => dispatch(onMultiGroupCheck(state.checkedItemsIndices)),
      onMultiGroupCheckHeader: (e, state) => dispatch(onMultiGroupCheckHeader(state)),
      onSingleGroupSelect: (e, state) => dispatch(onSingleGroupSelect(state)),
    },
  };
};

const mapStateToProps = (state) => {
  const mastheadConfig = makeSelectMasthead()(state);
  const leftStripConfig = makeSelectLeftStrip()(state);

  return {
    ...state,
    mastheadConfig,
    leftStripConfig,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper);
