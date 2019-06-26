import { createSelector } from 'reselect';

const commentsSelector = state => state.comments;

export const selectComment = createSelector(
  commentsSelector,
  data => data.comment,
);

export const selectCommentRequested = createSelector(
  commentsSelector,
  data => data.isRequested,
);

export const selectCommentLoaded = createSelector(
  commentsSelector,
  data => data.isLoaded,
);

export const selectCommentError = createSelector(
  commentsSelector,
  data => data.error,
);
