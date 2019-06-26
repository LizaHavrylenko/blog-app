import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';

const CommentForm = ({
  handleCommentSubmit,
  handleCommentCancel,
  handleCommentChange,
  comment,
}) => (
  <Container className="commentFormContainer">
    <form onSubmit={handleCommentSubmit}>
      <label htmlFor="comment">Comment:</label>
      <textarea
        id="comment"
        value={comment}
        onChange={handleCommentChange}
        required
      />
      <div className="formButtons">
        <button type="submit" className="buttonSubmit">
          Add comment
        </button>
        <button
          type="button"
          className="buttonCancel"
          onClick={handleCommentCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  </Container>
);

CommentForm.propTypes = {
  handleCommentSubmit: PropTypes.func.isRequired,
  handleCommentCancel: PropTypes.func.isRequired,
  handleCommentChange: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
};

export default CommentForm;
