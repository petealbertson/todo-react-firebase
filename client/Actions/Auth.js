import Api from '../Services/Api';

export function createProfile (firstName, lastName, email, password) {
  Api().Auth.createUserAccount(email, password)
    .then( success => {
      console.log('create user success!', success);
      // TODO: get UUI for user from auth object and use that uuid to create a user object and fill that user object with the first and last name
      // TODO: attach first and last name to user record
      // TODO: create a model for user objects
      Api().Database.create('user', {
        uid: success.uid,
        firstName,
        lastName
      }).then( cb => {
        console.log('Created user.. would dispatch the user object here', cb);
      }).catch( err => {
        console.log('err in creating user.. dispatch that here', err)
      });
    }).catch( err => {
      console.log('troubles: ', err);
    })
}

export function createUser (email, password, dispatch) {
  console.log('submit:', email, password);
  Api().Auth.createUserAccount(email, password)
    .then( success => {
      dispatch({type:'CREATE', email, password});
      console.log('create user success!', success);
    }).catch( err => {
      console.log('troubles: ', err);
    });
}


export function loginUser (email, password) {
  Api().Auth.loginUser(email, password)
    .then( success => {
      console.log('login success!', success);
    }).catch( err => {
      console.log('troubles: ', err);
    })
}


export function checkUser () {
  Api().Auth.checkUser(user => {
    if (user) {
      console.log('LOGGED IN: ', user);
      // firebase.database().ref('log/' + user.uid).set({
      //   lastLogin: Date.now()
      // })
    } else {
      console.log('No one here');
    }
  });
}



export function logoutUser () {
  Api().Auth.logoutUser();
}
