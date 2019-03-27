import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';

import useToggle from 'hooks/useToggle';
import ToolBox from 'containers/ToolBox';

function MainApp(props) {
  const [isOpen, toggle] = useToggle(false);
  return (
    <div className={styles.MainApp}>
      {isOpen && <ToolBox />}
    </div>
  );
}

MainApp.propTypes = {
};
MainApp.defaultProps = {
};

export default MainApp;