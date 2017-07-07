
import { MARK_SEEN, GET_COMMENTS } from '../actions';

const comments = (state = [], action) => {
  switch (action.type) {

    case GET_COMMENTS:
      return Object.assign([], action.comments);

    case MARK_SEEN:
      return state.map((comment) => {
        if (comment.id === action.id) {
          return Object.assign({}, comment, {
            acknowledged: true,
          });
        }
        return comment;
      });

    default:
      return state;
  }
};

export default comments;
