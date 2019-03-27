import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MainApp.scss';

import useToggle from 'hooks/useToggle';
import ToolBox from 'containers/ToolBox';

function MainApp(props) {
  const [isOpen, toggle, setTrue, setFalse] = useToggle(false);
  useEffect(() => {
    // FIXME: 이벤트를 계속 add, remove를 반복하는데 이렇게 하지 않고 할 방법 찾기
    const handleShortcut = e => {
      if (e.ctrlKey && e.shiftKey && e.which == 76) {
        toggle();
      }
    };
    document.addEventListener('keyup', handleShortcut, false);
    return () => {
      document.removeEventListener('keyup', handleShortcut, false);
    };
  }, [isOpen]);

  return (
    <div className={styles.MainApp}>
      {isOpen && <ToolBox toggle={toggle} />}
    </div>
  );
}

MainApp.propTypes = {
};
MainApp.defaultProps = {
};

export default MainApp;