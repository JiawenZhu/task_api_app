import React from 'react';
import { Router, Route } from 'react-router-dom';
import TaskCreate from './tasks/TaskCreate';
import TaskEdit from './tasks/TaskEdit';
import TaskDelete from './tasks/TaskDelete';
import TaskList from './tasks/TaskList';
import TaskShow from './tasks/TaskShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={TaskList} />
          <Route path="/tasks/new" exact component={TaskCreate} />
          <Route path="/tasks/edit/:id" exact component={TaskEdit} />
          <Route path="/tasks/delete/:id" exact component={TaskDelete} />
          <Route path="/tasks/:id" exact component={TaskShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
