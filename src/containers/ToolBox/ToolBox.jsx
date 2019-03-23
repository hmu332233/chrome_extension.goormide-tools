import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToolBox.scss';

import useToggle from 'hooks/useToggle';
import SearchBox from 'containers/SearchBox';

function ToolBox(props) {
  const [isTerminalOpen, toggleTerminalOpenStatus] = useToggle(true);
  return (
    <div className={styles.ToolBox}>
      <button onClick={toggleTerminalOpenStatus}>터미널</button>
      { isTerminalOpen && <SearchBox />}
    </div>
  );
}

ToolBox.propTypes = {
};
ToolBox.defaultProps = {
};

export default ToolBox;