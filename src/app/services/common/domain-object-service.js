const common = require('../../common/common');

module.exports = {
  getPropertyValue(obj, propName) {
    let prop;
    if (common.__hasValue(obj) && common.__hasValue(propName)) {
      prop = obj;
      const propNames = propName.split('.');
      for (let i = 0; i < propNames.length; i++) {
        prop = prop[propNames[i]];
        if (!common.__hasValue(prop)) break; // eslint-disable-line
      }
    }
    return prop;
  }
};
