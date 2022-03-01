import React from 'react';
import { Field, reduxForm } from 'redux-form';

class TaskForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  // hock up with inputs
  renderInput = ({ input, label, type, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      // this is a customized input
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" type={type}/>
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    // all information from forms are submitted 
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="date" component={this.renderInput} label="Enter due date" type="date"/>
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'TaskForm',
  validate
})(TaskForm);
