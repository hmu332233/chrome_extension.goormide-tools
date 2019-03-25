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
      items: [{ text: 'test' }, { text: 'asdf' }],
      searchedItems: [{ text: 'test' }, { text: 'asdf' }],
      selectedIndex: 0
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleArrowPress = this.handleArrowPress.bind(this);
    this.moveCursorToTop = this.moveCursorToTop.bind(this);
    this.moveCursorToBottom = this.moveCursorToBottom.bind(this);
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

  handleArrowPress(e) {
    const { keyCode } = e;
    console.log(keyCode);
    switch (keyCode) {
      case 38:
        this.moveCursorToTop();
      break;
      case 40:
        this.moveCursorToBottom();
      break;
    }
  }

  moveCursorToTop() {
    let nextIndex = this.state.selectedIndex - 1;
    if (nextIndex < 0) {
      nextIndex = this.state.searchedItems.length - 1;
    }
    this.setState({ selectedIndex: nextIndex });
  }

  moveCursorToBottom() {
    let nextIndex = this.state.selectedIndex + 1;
    if (nextIndex >= this.state.searchedItems.length) {
      nextIndex = 0;
    }
    this.setState({ selectedIndex: nextIndex });
  }

  render() {
    return (
      <div className={classnames(styles.SearchBox, this.props.className)}>
        <Input className={styles.SearchBox__input} onChange={this.handleValueChange} onKeyDown={this.handleArrowPress} />
        <SearchItemList items={this.state.searchedItems} selectedIndex={this.state.selectedIndex} />
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