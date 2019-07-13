import React from 'react';
import PropTypes from 'prop-types';
import styles from './TerminalCommandsPalette.scss';

import SearchBox from 'containers/SearchBox';

class TerminalCommandsPalette extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };

    this.initItems = this.initItems.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount() {
    this.initItems();
  }

  initItems() {
    const items = [
      ...this.getItems({ type: 'common' }),
      ...this.getItems({ type: 'build' }),
      ...this.getItems({ type: 'run' }),
      ...this.getItems({ type: 'test' }),
      ...this.getItems({ type: 'deploy' }),
    ];
    if (items.length > 0) {
      this.setState({ items });
    }
  }

  getItems({ type }) {
    let items = [];
    document.querySelectorAll(`#toolbar-context__child-${type}-menu li:not(.divider):not(.dropdown-divider)`).forEach((item, index, arr) => {
      if (index !== 0 && index !== arr.length - 1) {
        const text = item.querySelector('a').text;
        items.push({ text: `${type}:${text}`, item });
      }
    });
    return items;
  }

  handleItemClick(item) {
    item.item.click();
    this.props.toggle();
  }

  render() {
    return (
      <SearchBox
        items={this.state.items}
        itemClickHandler={this.handleItemClick}
      />
    );
  }
}

TerminalCommandsPalette.propTypes = {
  toggle: PropTypes.func,
};
TerminalCommandsPalette.defaultProps = {
  toggle: v => v,
};

export default TerminalCommandsPalette;