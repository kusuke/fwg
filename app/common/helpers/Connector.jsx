import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export function connectActionAndState(mapStateToProps, Actions) {
  const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);
  return connect(mapStateToProps, mapDispatchToProps)
}