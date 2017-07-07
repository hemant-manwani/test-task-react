/*
 * action types
 */

export const TOGGLE_COMMENTS = 'TOGGLE_COMMENTS';

/*
 * action creators
 */

export function toggleComments() {
  return { type: TOGGLE_COMMENTS };
}
