import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { getPost, createComment } from '../store/actions';
import { selectPost, selectComment } from '../store/selectors';
import Post from '../components/Post/Post';
import CommentForm from '../components/CommentForm/CommentForm';
import Comments from '../components/Comments/Comments';

class ViewPost extends Component {
  state = {
    commentBody: '',
    comments: [],
  };

  componentDidMount() {
    const { getPostAction } = this.props;
    const { postId } = this.props.match.params;

    getPostAction(postId);
  }

  componentDidUpdate(prevProps) {
    const { comments } = this.state;
    const { comment } = this.props;

    if (Object.keys(comment).length !== 0 && prevProps.comment !== comment) {
      this.setState({
        comments: [...comments, comment],
      });
    }
  }

  changeCommentFormValue = value => {
    this.setState({
      commentBody: value,
    });
  };

  handleCommentChange = event => {
    const { value } = event.target;

    this.changeCommentFormValue(value);
  };

  handleCommentCancel = e => {
    e.preventDefault();

    this.changeCommentFormValue('');
  };

  handleCommentSubmit = e => {
    e.preventDefault();

    const { createCommentAction } = this.props;
    const { postId } = this.props.match.params;
    const { commentBody: body } = this.state;

    createCommentAction({
      postId,
      body,
    });

    this.changeCommentFormValue('');
  };

  render() {
    const { post } = this.props;
    const { commentBody, comments } = this.state;

    return (
      <Fragment>
        <Post post={post} />
        <CommentForm
          handleCommentSubmit={this.handleCommentSubmit}
          handleCommentChange={this.handleCommentChange}
          handleCommentCancel={this.handleCommentCancel}
          comment={commentBody}
        />
        <Comments comments={comments} />
      </Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  post: selectPost,
  comment: selectComment,
});

const mapDispatchToProps = {
  getPostAction: getPost,
  createCommentAction: createComment,
};

ViewPost.propTypes = {
  getPostAction: PropTypes.func.isRequired,
  createCommentAction: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  comment: PropTypes.shape({
    id: PropTypes.number,
    postId: PropTypes.number,
    body: PropTypes.string,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewPost);
