import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles.css';
import Header from './../modules/Header';
import ArtworkComments from './../modules/ArtworkComments';
import { getComments } from './../modules/ArtworkComments/actions';
import { getSortedComments } from './../utils';
import staticComments from './../resources/comment_data.json';

class App extends React.Component {

  componentWillMount() {
    // This would be called when we get the data from the Server.
    this.props.getComments(getSortedComments(staticComments, false));
  }

  render() {
    return (
      <div className={styles.mainBodyStyle} >
        <Header />
        <ArtworkComments />
        {this.props.children}
      </div>
    );
  }

}

App.propTypes = {
  children: PropTypes.element.isRequired,
  getComments: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getComments: comments => dispatch(getComments(comments)),
});

export default connect(null, mapDispatchToProps)(App);
