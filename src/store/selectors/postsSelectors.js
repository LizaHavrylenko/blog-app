import { createSelector } from 'reselect';

const postsSelector = state => state.posts;

export const selectPosts = createSelector(
  postsSelector,
  data => data.postsList,
);

export const selectPostsRequested = createSelector(
  postsSelector,
  data => data.isRequested,
);

export const selectPostsLoaded = createSelector(
  postsSelector,
  data => data.isLoaded,
);

export const selectPostsError = createSelector(
  postsSelector,
  data => data.error,
);
