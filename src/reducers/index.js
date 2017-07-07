import { combineReducers } from 'redux';
import comments from '../modules/ArtworkComments/reducers';
import showCommentsList from '../modules/Header/reducers';

const reducers = {
  comments,
  showCommentsList,
};

export default combineReducers(reducers);
