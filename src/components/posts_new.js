import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {

  render() {

    const { fields: { title, categories, content }, handleSubmit } = this.props;
    // same as const fields = this.props.fileds.title
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type='text' className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type='text' className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea type='text' className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter title";
  }
  if (!values.categories) {
    errors.categories = "Add categories";
  }
  if (!values.content) {
    errors.content = "Enter content";
  }

  return errors;
}

//connect: 1st argument is mapStateToProps, 2nd - mapDispatchToProps
//reduxForm: 1st argument config form, 2nd - mapStateToProps, 3rd - mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost } )(PostsNew);
//now we have access to this.props.createPost inside our component
