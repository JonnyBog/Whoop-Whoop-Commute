/**
  * Create Middleware
  * @param {Function} next middleware's dispatch method
  * @returns {Function}
**/
const observableToPromise = () => next => {
  const pending = {};

  return action => {
    let returnValue = next(action);

    if (action.meta && action.meta.lifecycle) {
      returnValue = new Promise((resolve, reject) => {
        pending[action.meta.lifecycle.resolve] = resolve;
        pending[action.meta.lifecycle.reject] = reject;
      });
      next(action);
    }

    if (pending[action.type]) {
      const resolveOrReject = pending[action.type];
      delete pending[action.type];
      resolveOrReject(action);
    }

    return returnValue;
  };
};

export default observableToPromise;
