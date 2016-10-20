import React from 'react';

class App extends React.Component {

  render () {
    return (
      <div className='App'>
        <h1 className='App-Greeting'>
          Todo List
        </h1>
        { this.props.children }
      </div>
    );
  }

}

export default App;
