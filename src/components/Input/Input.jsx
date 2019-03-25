import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.scss';

import classnames from 'classnames';

function Input({ className, ...props }) {
  return (
    <div className={classnames(styles.Input, className)}>
      <input {...props} />
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
};
Input.defaultProps = {
  className: ''
};

export default Input;