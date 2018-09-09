import { withRouter } from 'react-router';

import { connectToStoreHelper } from 'lib';

import Root from 'features/root/root';

const config = {
  props: [],
  actions: []
};

export default withRouter(connectToStoreHelper(config, Root));
