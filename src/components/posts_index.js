import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {

componentWillMount() {
  console.log('sha-la-la')
}

  render() {
    return (
      <div>List of posts</div>
    );
  }
}

export default PostsIndex;
