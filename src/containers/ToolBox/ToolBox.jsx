import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToolBox.scss';

import classnames from 'classnames';

import useToggle from 'hooks/useToggle';
import SearchBox from 'containers/SearchBox';

function ToolBox(props) {
  const [isHiddenTerminal, toggleTerminalOpenStatus] = useToggle(false);
  return (
    <div className={styles.ToolBox}>
      <div className={styles.ToolBox__terminal}>
        <div className={styles.ToolBox__icon} onClick={toggleTerminalOpenStatus}>T</div>
        <SearchBox className={classnames(styles.ToolBox__terminal__searchBox, isHiddenTerminal && styles.close)}/>
      </div>
    </div>
  );
}

ToolBox.propTypes = {
};
ToolBox.defaultProps = {
};

export default ToolBox;