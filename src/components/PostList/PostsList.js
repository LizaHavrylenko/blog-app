import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Container from './Container';

import Post from '../Post/Post';

const PostsList = ({ posts }) => (
  <Container className="listContainer">
    {posts &&
      posts.length > 0 &&
      posts.map(post => {
        const { id } = post;

        return (
          <Link to={`/posts/${id}`} key={id.toString()} className="linkToPost">
            <Post post={post} />
          </Link>
        );
      })}
  </Container>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  ),
};

export default PostsList;
