import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransitionGroup } from 'react-transition-group';
import CommentsList from './components/CommentsList';
import ButtonApprove from './components/ButtonApprove';
import { markSeen } from './actions';
import styles from './styles.css';
import animations from './animations.css';

const ArtworkComments = ({ showCommentsList, ...props }) => (
  <CSSTransitionGroup
    transitionName={animations}
    transitionEnterTimeout={300}
    transitionLeaveTimeout={300}
  >
    {showCommentsList && <div className={styles.container} key="ArtworkComments" >
      <CommentsList {...props} />
      <ButtonApprove />
    </div>
    }
  </CSSTransitionGroup>
);

ArtworkComments.propTypes = {
  showCommentsList: PropTypes.bool.isRequired,
  onMarkSeen: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  comments: state.comments,
  showCommentsList: state.showCommentsList,
});

const mapDispatchToProps = dispatch => ({
  onMarkSeen: id => dispatch(markSeen(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkComments);
