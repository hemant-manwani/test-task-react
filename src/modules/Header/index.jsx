import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleComments } from './actions';
import getCountOfUnseenComments from './selector';
import styles from './styles.css';

const Header = props => (
  <div className={styles.mainNavBar}>
    <button
      className={props.count === 0
        ? styles.buttonToggleComments : `${styles.buttonToggleComments} ${styles.highlighted}`}
      onClick={() => props.onToggleComments()}
    >
      {(props.count !== 0) && <span className={styles.countBubble}>{props.count}</span>}
    </button>
  </div>
);

Header.propTypes = {
  onToggleComments: PropTypes.func.isRequired,
  count: PropTypes.number,
};

Header.defaultProps = {
  count: 0,
};

const mapStateToProps = state => ({
  count: getCountOfUnseenComments(state),
});

const mapDispatchToProps = dispatch => ({
  onToggleComments: () => dispatch(toggleComments()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
