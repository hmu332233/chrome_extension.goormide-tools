import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBox.scss';

import Input from 'components/Input';
import SearchItem from 'components/SearchItem';

function SearchItemList({ items }) {
  return (
    <div className={styles.SearchItemList}>
      {items.map((item, index) => <SearchItem key={index} text={item.text} />)}
    </div>
  );
}

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{ text: 'test' }]
    };
  }
  render() {
    return (
      <div className={styles.SearchBox}>
        <Input />
        <SearchItemList items={this.state.items} />
      </div>
    );
  }
}

SearchBox.propTypes = {
};
SearchBox.defaultProps = {
};

export default SearchBox;