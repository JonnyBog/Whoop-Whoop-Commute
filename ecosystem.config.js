module.exports = {
  name: 'whoop-whoop-commute',
  script: './static/server.js',
  watch: true,
  port: 3000,
  exec_mode: 'cluster',
  interpreter_args: '--harmony-promise-finally',
  env: {
    NODE_ENV: 'production',
    COMMON_VARIABLE: 'true'
  }
};
