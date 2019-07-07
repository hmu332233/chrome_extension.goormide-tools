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
      items: [],
      searchedItems: [],
      selectedItem: {},
      selectedIndex: 0
    };

    this.initItems = this.initItems.bind(this);

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleArrowPress = this.handleArrowPress.bind(this);
    this.moveCursorToTop = this.moveCursorToTop.bind(this);
    this.moveCursorToBottom = this.moveCursorToBottom.bind(this);
  }

  componentDidMount() {
    this.initItems();
  }  

  initItems() {
    const items = [
      ...this.getItems({ type: 'build' }),
      ...this.getItems({ type: 'run' })
    ];
    if (items.length > 0) {
      this.setState({ items, searchedItems: items, selectedItem: items[0] });
    }
  }

  getItems({ type }) {
    let items = [];

    document.querySelectorAll(`#toolbar-context__child-${type}-menu li:not(.divider):not(.dropdown-divider)`).forEach((item, index, arr) => {
      if (index !== 0 && index !== arr.length - 1) {
        const text = item.querySelector('a').text;
        items.push({ text, item });
      }
    });

    return items;
  }

  handleValueChange(e) {
    const value = e.target.value;
    const searchedItems = this.state.items.filter(item => item.text.includes(value));
    this.setState({
      value: e.target.value,
      searchedItems,
      selectedItem: searchedItems[0],
      selectedIndex: 0
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
        this.state.selectedItem.item.click();
        this.props.itemClickHandler();
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