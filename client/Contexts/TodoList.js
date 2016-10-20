import { connect } from 'react-redux';
import TodoList from '../Components/TodoList';

function mapStateToProps (state) {
  return {
    // isLoading: state.auth.loading
  };
}

function mapDispatchToProps (dispatch) {
  return {
    // onLogin: (email, pass) => dispatch(attemptLogin(email, pass))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
