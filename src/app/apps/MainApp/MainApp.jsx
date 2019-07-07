import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';

import useToggle from 'hooks/useToggle';
import ToolBox from 'containers/ToolBox';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this)
  }
  componentDidMount() {
    const handleShortcut = e => {
      if (e.ctrlKey && e.shiftKey && e.which == 76) {
        this.toggle();
      } else if (this.state.isOpen && e.keyCode == 27) {
        this.setState({ isOpen: false });
      }
    };
    document.addEventListener('keyup', handleShortcut, false);
  }
  toggle() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }
  render() {
    return (
      <div className={styles.MainApp}>
        {this.state.isOpen && <ToolBox toggle={this.toggle} />}
      </div>
    );
  }
}

MainApp.propTypes = {
};
MainApp.defaultProps = {
};

export default MainApp;