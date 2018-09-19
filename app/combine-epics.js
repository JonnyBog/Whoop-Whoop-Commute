import { combineEpics } from 'redux-observable';

import fetchHomeData from 'features/home/epics/home-epic';
import fetchCommuteForm from 'features/commute-form/epics/commute-form-epic';
import fetchStationPickerData from 'features/station-picker/epics/station-picker-epic';

export default combineEpics(
  fetchHomeData,
  fetchCommuteForm,
  fetchStationPickerData
);
