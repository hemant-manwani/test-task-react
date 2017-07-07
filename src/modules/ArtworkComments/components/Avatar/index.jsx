import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Avatar = ({ imgSrc }) => (
  <img className={styles.Avatar} src={imgSrc} alt="Avatar" />
);

Avatar.propTypes = {
  imgSrc: PropTypes.string,
};

Avatar.defaultProps = {
  imgSrc: '',
};

export default Avatar;
