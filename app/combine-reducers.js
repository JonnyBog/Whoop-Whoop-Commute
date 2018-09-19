import { combineReducers } from 'redux';

import home from 'features/home/reducers/home-reducer';
import commuteForm from 'features/commute-form/reducers/commute-form-reducer';
import stationPicker from 'features/station-picker/reducers/station-picker-reducer';

export default combineReducers({
  home,
  commuteForm,
  stationPicker
});
