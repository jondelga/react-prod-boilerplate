const common = require('../../common/common');

const CONFIG = {
  NODE_ENV: 'NODE_ENV',       // Application mode
  APP_CONFIG: 'APP_CONFIG'      // Application specific configs
};

const APP_MODE = {
  PRODUCTION: 'production',
  DEVELOPMENT: 'development',
  TEST: 'test'
};

const getNodeEnv = () => {
  return process.env;
};

const getNodeEnvByKey = key => {
  if (!key) { throw new Error('Key cannot be null/undefined'); }
  return getNodeEnv()[key];
};

const getNodeEnvMode = () => {
  const mode = getNodeEnvByKey(CONFIG.NODE_ENV);
  if (common.__hasValue(mode)) {
    return mode;
  } else {
    // TODO: Set NODE_INV within Istanbul so this isn't necessary
    process.env[CONFIG.NODE_ENV] = APP_MODE.TEST;
    return process.env[CONFIG.NODE_ENV];
  }
};

const isProduction = () => {
  return getNodeEnvMode() === APP_MODE.PRODUCTION;
};

const isDevelopment = () => {
  return getNodeEnvMode() === APP_MODE.DEVELOPMENT;
};

const isTest = () => {
  return getNodeEnvMode() === APP_MODE.TEST;
};

module.exports = {
  getNodeEnv,
  getNodeEnvByKey,
  getNodeEnvMode,
  isProduction,
  isDevelopment,
  isTest
};
