import { createSelector } from 'reselect';

const postSelector = state => state.post;

export const selectPost = createSelector(
  postSelector,
  data => data.post,
);

export const selectPostRequested = createSelector(
  postSelector,
  data => data.isRequested,
);

export const selectPostLoaded = createSelector(
  postSelector,
  data => data.isLoaded,
);

export const selectPostError = createSelector(
  postSelector,
  data => data.error,
);
