module.exports = {
  name: 'whoop-whoop-commute',
  script: './static/server.js',
  watch: true,
  ignore_watch: ['node_modules'],
  port: 3001,
  instances: 1,
  env: {
    COMMON_VARIABLE: 'true'
  },
  node_args: '--harmony-promise-finally',
  env_production: {
    NODE_ENV: 'production'
  },
  env_develpomemt: {
    NODE_ENV: 'development'
  }
};
