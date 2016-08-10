import { browserHistory } from 'react-router';

export default {
  /*
   * Thunk for changing routes
   * @param path 'new router path'
   */
  goToPath(path) {
    if (!path) { return; }

    return () => {
      browserHistory.push(path);
    };
  }
};
