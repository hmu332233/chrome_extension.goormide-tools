import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBox.scss';

import classnames from 'classnames';

import Input from 'components/Input';
import SearchItem from 'components/SearchItem';

function SearchItemList({ items, selectedIndex }) {
  return (
    <div className={styles.SearchItemList}>
      {items.map((item, index) => <SearchItem key={index} text={item.text} active={selectedIndex === index} />)}
    </div>
  );
}

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      searchedItems: [],
      selectedItem: {},
      selectedIndex: 0
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleArrowPress = this.handleArrowPress.bind(this);
    this.moveCursorToTop = this.moveCursorToTop.bind(this);
    this.moveCursorToBottom = this.moveCursorToBottom.bind(this);
  }

  handleValueChange(e) {
    const value = e.target.value;
    const searchedItems = this.props.items.filter(item => item.text.includes(value));
    this.setState({
      value: e.target.value,
      searchedItems,
      selectedIndex: 0,
      selectedItem: searchedItems[0],
    });
  }

  handleArrowPress(e) {
    const { keyCode } = e;
    switch (keyCode) {
      case 38:
        this.moveCursorToTop();
      break;
      case 40:
        this.moveCursorToBottom();
      break;
      case 13:
        this.props.itemClickHandler(this.state.selectedItem);
      break;
    }
  }

  moveCursorToTop() {
    let nextIndex = this.state.selectedIndex - 1;
    if (nextIndex < 0) {
      nextIndex = this.state.searchedItems.length - 1;
    }
    this.setState({ selectedIndex: nextIndex, selectedItem: this.state.searchedItems[nextIndex] });
  }

  moveCursorToBottom() {
    let nextIndex = this.state.selectedIndex + 1;
    if (nextIndex >= this.state.searchedItems.length) {
      nextIndex = 0;
    }
    this.setState({ selectedIndex: nextIndex, selectedItem: this.state.searchedItems[nextIndex] });
  }

  render() {
    return (
      <div className={classnames(styles.SearchBox, this.props.className)}>
        <Input className={styles.SearchBox__input} onChange={this.handleValueChange} onKeyDown={this.handleArrowPress} autoFocus />
        <SearchItemList items={this.state.searchedItems} selectedIndex={this.state.selectedIndex} />
      </div>
    );
  }
}

SearchBox.propTypes = {
  className: PropTypes.string,
  itemClickHandler: PropTypes.func,
};
SearchBox.defaultProps = {
  className: '',
  itemClickHandler: v => v
};

export default SearchBox;