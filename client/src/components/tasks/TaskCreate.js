import React from 'react';
import { connect } from 'react-redux';
import { createTask } from '../../actions';
import TaskForm from './TaskForm';

class TaskCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createTask(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Task</h3>
        <TaskForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createTask }
)(TaskCreate);
