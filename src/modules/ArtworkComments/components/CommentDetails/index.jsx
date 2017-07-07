import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import { getRelativeDateString } from '../../../../utils';

const CommentDetails = ({ comment, onMarkSeen }) => (
  <div className={styles.CommentDetails}>
    <div className={styles.name}>{comment.user.full_name}</div>
    <div className={styles.text}>{comment.body}</div>
    <div className={styles.footer}>
      <div className={styles.time}>{getRelativeDateString(comment.dates.created.date_time)}</div>
      {!(comment.acknowledged) &&
        <div className={styles.markSeenSection}>
          <span className={styles.separator}>|</span>
          <button className={styles.buttonMarkSeen} onClick={() => onMarkSeen(comment.id)} >
            Mark as Seen
          </button>
        </div>
      }
    </div>
  </div>
);

CommentDetails.propTypes = {
  comment: PropTypes.object.isRequired,
  onMarkSeen: PropTypes.func.isRequired,
};

export default CommentDetails;
