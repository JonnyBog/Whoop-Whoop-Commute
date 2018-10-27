export default {
  IS_CLIENT: (typeof window !== 'undefined' && window.document),
  IS_DEVELOPMENT_ENV: process.env.NODE_ENV !== 'production',
  IS_PROD: process.env.DEPLOYMENT_GROUP_NAME === 'prod' || process.env.NODE_ENV === 'production'
};
