import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { getPosts } from '../store/actions';
import { selectPosts } from '../store/selectors';
import PostsList from '../components/PostList/PostsList';

class MainPage extends Component {
  componentDidMount() {
    const { getPostsAction } = this.props;

    getPostsAction();
  }

  render() {
    const { posts } = this.props;

    return (
      <Fragment>
        <h1>Blog</h1>
        <PostsList posts={posts} />
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  posts: selectPosts,
});

const mapDispatchToProps = {
  getPostsAction: getPosts,
};

MainPage.propTypes = {
  getPostsAction: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage);
