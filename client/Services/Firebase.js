
// stub, add handle error library
const handleErr = (err) => {
  console.log('Something has gone terribly wrong: ', err);
};

/*
* Firebase Authentication Routes
*/

/*
* This function creates a user.
* @param {email, password} email is a string, password is a string.
* @return will automatically sign in new user or return an error.
*/

export function createUser (email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}

/*
* This function logs in a user.
* @param {email, password} email is a string, password is a string.
* @return will log in the user or return an error.
*/

export function loginUser (email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

/*
* This function will check the current user.
* @param {userCb, noUserCb} userCb is a callback on successful user return,
* noUserCb is a callback function called when bno user object is returned.
* @return will return userCb on success and noUserCb on fail.
*/

export function checkUser (userCb, noUserCb) {
  console.log('checkUser called');
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('LOGGED IN: ', user);
      userCb(user);
    } else {
      console.log('No one here');
      if (noUserCb) noUserCb();
    }
  });
}

/*
* This function returns the current user.
* @return the user object, or null if no one is logged in.
*/

export function getCurrentUser () {
  return firebase.auth().currentUser;
}

/*
* This function logs out a user.
* @return will log out the user.
*/

export function logoutUser () {
  firebase.auth().signOut().then(() => {
    console.log('SIGNED OUT');
  });
}

/*
* This function sends an email to the provided email address with a link to
* update their password.
* @params {email} email is a string.
* @return will email a password reset to
*/

export function sendPasswordResetEmail (email) {
  firebase.auth().sendPasswordResetEmail(email);
}

export const Auth = {
  createUser,
  loginUser,
  checkUser,
  getCurrentUser,
  logoutUser,
  sendPasswordResetEmail
};

/*
* Firebase Database Routes
*/

export function read (path, cb) {
  firebase.database().ref(path).once('value');
}

export function listen (path, cb, e) {
  const event = e || 'value';
  firebase.database().ref(path).on(event, cb);
}

export function create (path, dataObj, cb) {
  firebase.database().ref(path).set(dataObj);
}

export function update (path, dataObj, cb) {
  firebase.database().ref(path).update(dataObj);
}

export function remove (path, cb) {
  firebase.database().ref(path).remove();
}

export const Database = {
  read,
  listen,
  create,
  update,
  remove
};

export const Firebase = {
  Auth,
  Database
};
