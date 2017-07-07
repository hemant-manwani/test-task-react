/*
 * action types
 */

export const MARK_SEEN = 'MARK_SEEN';
export const GET_COMMENTS = 'GET_COMMENTS';

/*
 * action creators
 */

export const markSeen = id => ({ type: MARK_SEEN, id });

export const getComments = comments => ({
  type: GET_COMMENTS,
  comments,
});
