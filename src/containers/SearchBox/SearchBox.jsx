import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBox.scss';

import classnames from 'classnames';

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
      value: '',
      items: [{ text: 'test' }],
      searchedItems: [{ text: 'test' }],
      selectedIndex: 0
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  componentDidMount() {

  }

  getItems() {
    document.querySelectorAll('#toolbar-context__child-build-menu li:not(.divider)')[1];
  }

  handleValueChange(e) {
    const value = e.target.value;
    const searchedItems = this.state.items.filter(item => item.text.includes(value));
    this.setState({
      value: e.target.value,
      searchedItems
    });
  }

  render() {
    return (
      <div className={classnames(styles.SearchBox, this.props.className)}>
        <Input className={styles.SearchBox__input} onChange={this.handleValueChange} />
        <SearchItemList items={this.state.searchedItems} />
      </div>
    );
  }
}

SearchBox.propTypes = {
  className: PropTypes.string,
};
SearchBox.defaultProps = {
  className: ''
};

export default SearchBox;