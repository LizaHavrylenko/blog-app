import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';

const Post = ({ post: { title, body } }) => (
  <Container className="post">
    <h2>{title}</h2>
    <p>{body}</p>
  </Container>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
};

export default Post;
