import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchItem.scss';

import classnames from 'classnames';

function SearchItem(props) {
  return (
    <div className={classnames(styles.SearchItem, props.active && styles.active)}>
      {props.text}
    </div>
  );
}

SearchItem.propTypes = {
  text: PropTypes.string,
  active: PropTypes.bool,
};
SearchItem.defaultProps = {
  text: '',
  active: false
};

export default SearchItem;