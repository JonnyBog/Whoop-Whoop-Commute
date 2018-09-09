import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {
  HOME_PAGE_REQUEST,
  receiveHomeData,
  failedHomeRequest
} from 'features/home/actions/home-actions';
/**
 * fetchHomeData
 * @param {Object} action$ - action observable
 * @param {Object} store - redux store
 * @param {Object} dependencies - injected dependencies
 * @return {Object} - action observable
 */
export default function fetchHomeData (action$, store, { apiHelper }) {
  return action$.ofType(HOME_PAGE_REQUEST)
    .switchMap(() =>
      Observable.fromPromise(apiHelper.get('https://jsonplaceholder.typicode.com/posts'))
        .map(response => receiveHomeData(response))
        .catch(error => Observable.of(failedHomeRequest(error)))
    );
}
