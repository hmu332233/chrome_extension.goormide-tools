import React from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';

import ToolBox from 'containers/ToolBox';

function MainApp(props) {
  return (
    <div className={styles.MainApp}>
      <ToolBox />
    </div>
  );
}

MainApp.propTypes = {
};
MainApp.defaultProps = {
};

export default MainApp;