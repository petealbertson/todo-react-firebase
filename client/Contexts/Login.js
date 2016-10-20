import { connect } from 'react-redux';
import Login from '../Pages/Login';

import { createProfile, createUser, loginUser, checkUser, logoutUser } from '../Actions/Auth';

/**
 * Cherry pick values out of the given state model and choose which
 * ones to pass to the contextual component.
 *
 * @param  {Object} state
 * @return {Object}
 */
function mapStateToProps (state) {
  return {};
}

/**
 * Bind the store's dispatch() to action creators ahead of time to simplify
 * action dispatching and decouple state manipulation from the component.
 *
 * @param  {Function} dispatch
 * @return {Object}
 */
function mapDispatchToProps () {
  return {
    createProfile: (firstName, lastName, email, password) => {
      createProfile (firstName, lastName, email, password);
    },
    createUser: (e) => {
      e.preventDefault();
      createUser(e.target.email.value, e.target.pass.value);
    },
    loginUser: (e) => {
      e.preventDefault();
      loginUser(e.target.email.value, e.target.pass.value);
    },
    checkUser: () => checkUser(),
    logoutUser: () => logoutUser()
  };
}

/**
 * Create the smart component.
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
