import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';

import TerminalCommandsPalette from 'containers/TerminalCommandsPalette';

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTerminalCommandsPaletteOpen: false
    }
    this.toggleTerminalCommandsPalette = this.toggleTerminalCommandsPalette.bind(this);
  }
  componentDidMount() {
    document.addEventListener('terminal_commands_palette', this.toggleTerminalCommandsPalette, false);
  }

  componentWillUnmount() {
    document.removeEventListener('terminal_commands_palette', this.toggleTerminalCommandsPalette);
  }

  toggleTerminalCommandsPalette() {
    this.setState(prevState => ({ isTerminalCommandsPaletteOpen: !prevState.isTerminalCommandsPaletteOpen }));
  }
  render() {
    return (
      <div className={styles.MainApp}>
        {this.state.isTerminalCommandsPaletteOpen && <TerminalCommandsPalette toggle={this.toggleTerminalCommandsPalette} />}
      </div>
    );
  }
}

MainApp.propTypes = {
};
MainApp.defaultProps = {
};

export default MainApp;