import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchItem.scss';

function SearchItem(props) {
  return (
    <div className={styles.SearchItem}>
      {props.text}
    </div>
  );
}

SearchItem.propTypes = {
  text: PropTypes.string,
};
SearchItem.defaultProps = {
  text: ''
};

export default SearchItem;