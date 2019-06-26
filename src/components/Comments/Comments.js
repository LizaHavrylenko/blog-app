import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';

const Comments = ({ comments }) => (
  <Container className="comments">
    {comments &&
      comments.length > 0 &&
      comments.map(({ id, body }) => (
        <p className="commentText" key={id.toString()}>
          {body}
        </p>
      ))}
  </Container>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      postId: PropTypes.number,
      body: PropTypes,
    }),
  ).isRequired,
};

export default Comments;
