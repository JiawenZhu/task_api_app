import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchtasks } from '../../actions';

class TaskList extends React.Component {
  componentDidMount() {
    this.props.fetchtasks();
  }

  renderAdmin(Task) {
    if (Task.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/tasks/edit/${Task.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/tasks/delete/${Task.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  }

  renderList() {
    return this.props.tasks.map(Task => {
      return (
        <div className="item" key={Task.id}>
          {this.renderAdmin(Task)}
          <i className="large middle aligned icon image" />
          <div className="content">
            <Link to={`/tasks/${Task.id}`} className="header">
              {Task.title}
            </Link>
            <div className="description">{Task.description}</div>
          </div>
        </div>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/tasks/new" className="ui button primary">
            Create a Task
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>tasks</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: Object.values(state.tasks),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchtasks }
)(TaskList);
