import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './App';
import Auth from '../Actions/Auth'
import Login from './Login';
import Dashboard from './Dashboard';
import DashboardNav from './DashboardNav';
import TodoList from './TodoList';

export default function (store) {
  return (
    <Route component={App}>
      <Route component={TodoList} onEnter={getCurrentUser(store)}>
        <Route path='/' component={TodoList} />
      </Route>
      <Route onEnter={isGuest(store)}>
        <Route path='/login' component={Login} />
      </Route>
    </Route>
  );
}
