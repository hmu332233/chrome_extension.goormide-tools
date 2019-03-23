import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.scss';

function Input(props) {
  return (
    <div className={styles.Input}>
      <input {...props} />
    </div>
  );
}

Input.propTypes = {
};
Input.defaultProps = {
};

export default Input;