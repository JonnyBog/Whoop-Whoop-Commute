import { combineEpics } from 'redux-observable';

import fetchHomeData from 'features/home/epics/home-epic';

export default combineEpics(
  fetchHomeData
);
