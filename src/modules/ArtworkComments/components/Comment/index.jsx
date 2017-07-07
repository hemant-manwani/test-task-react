import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import Avatar from './../Avatar';
import CommentDetails from './../CommentDetails';

const Comment = ({ comment, onMarkSeen }) => (
  <div className={styles.Comment}>
    <Avatar imgSrc={comment.user.image.thumb_url} />
    <CommentDetails comment={comment} onMarkSeen={onMarkSeen} />
  </div>
);

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  onMarkSeen: PropTypes.func.isRequired,
};

export default Comment;
