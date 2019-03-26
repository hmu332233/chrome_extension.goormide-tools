import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';

import HotKey from 'react-shortcut';

import useToggle from 'hooks/useToggle';
import ToolBox from 'containers/ToolBox';

function MainApp(props) {
  const [isOpen, toggle] = useToggle(false);
  return (
    <React.Fragment>
      <div className={styles.MainApp}>
        {isOpen && <ToolBox />}
      </div>
      <HotKey 
        keys={['alt', 'shift', 'k']}
        onKeysCoincide={toggle}
      />
    </React.Fragment>
  );
}

MainApp.propTypes = {
};
MainApp.defaultProps = {
};

export default MainApp;