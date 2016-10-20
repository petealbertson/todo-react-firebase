import React from 'react';

class TodoList extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.state = { newTodo: '' };
    this.updateNewTodoState = this.updateNewTodoState.bind(this);
    // this.renderTodo = this.renderTodo.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  updateNewTodoState (ev) {
    let newVal = ev.target.value;
    this.setState({ newTodo: newVal });
  }

  addItem (ev) {
    if (this.props.onAddTodo) {
      this.props.onAddTodo(this.state.newTodo);
      this.setState({ newTodo: '' });
    }
  }

  render () {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="enter task" />
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}(TodoList);

export default TodoList;
