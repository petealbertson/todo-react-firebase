import React from 'react';

export default class Login extends React.Component {

  componentWillMount () {
    this.props.checkUser();
    this.props.testDB();
  }

  handleCreateProfile () {
    const firstName = 'Bob3'
    const lastName = 'Brown3'
    const email = 'bob@example3.com'
    const password = 'password33'
    this.props.createProfile(firstName, lastName, email, password)
  }

  render () {
    return (
      <div className='login'>
        <h1 className='login__greeting'>
          Example Login
        </h1>
        <button onClick={this.props.logoutUser}>LOG OUT</button>
        <form onSubmit={this.props.createUser.bind(this)}>
          <h2>Create User</h2>
          <input id='email' type='text' placeholder='enter email' />
          <input id='pass' type='password' placeholder='password' />
          <input type='submit' value='CREATE' />
        </form>
        <form onSubmit={this.props.loginUser.bind(this)}>
          <h2>Login User</h2>
          <input id='email' type='text' placeholder='enter email' />
          <input id='pass' type='password' placeholder='password' />
          <input type='submit' value='LOGIN' />
        </form>
        {this.props.children}
      </div>
    );
  }
}
