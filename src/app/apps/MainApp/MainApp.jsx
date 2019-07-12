import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';

import ToolBox from 'containers/ToolBox';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    document.addEventListener('terminal_commands_palette', this.toggle, false);
  }

  componentWillUnmount() {
    document.removeEventListener('terminal_commands_palette', this.toggle);
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