import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import Comment from '../Comment';

const CommentsList = props => (
  <div className={styles.CommentsList}> {
    props.comments.map(comment =>
      <Comment
        key={comment.id}
        comment={comment}
        onMarkSeen={props.onMarkSeen}
      />)
  }
  </div>
);

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
  onMarkSeen: PropTypes.func.isRequired,
};

export default CommentsList;
