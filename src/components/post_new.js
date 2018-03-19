import React,{Component} from 'react'
import {Field,reduxForm} from 'redux-form'

class PostNew extends Component {
  renderField(field){
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }

  onSubmit(values){
    console.log(values);
  }
  render(){

    const {handleSubmit} = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit"
        className="btn btn-primary">
        Submit
        </button>
      </form>
    );
  }
}

function validate(values){
  //console.log(values); => {title : 'bla bla' , categories : ....}
  const errors = {}

  //validate the inputs from values
  if(!values.title){
    errors.title = "Enter some title."
  }
  if(!values.categories){
    errors.categories = "Enter some category"
  }
  if(!values.content){
    errors.content = "enter some content"
  }

  //if errors is empty, the form is fine to submit.
  //if errors has *any* properties, redux-form assume that form is invalid
  return errors;
}

export default reduxForm({
  validate,
  form:'PostNewForm'
})(PostNew)
