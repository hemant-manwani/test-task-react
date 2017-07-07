import { TOGGLE_COMMENTS } from '../actions';

const showCommentsList = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_COMMENTS:
      return !state;
    default:
      return state;
  }
};

export default showCommentsList;
