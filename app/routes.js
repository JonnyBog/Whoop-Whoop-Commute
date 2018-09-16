import loadable from 'loadable-components';

export const PageNotFound = loadable(() => import(/* webpackChunkName: "page-not-found" */ 'components/page-not-found/page-not-found'));
export const Home = loadable(() => import(/* webpackChunkName: "home-container" */ 'features/home/home-container'));

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '*',
    component: PageNotFound
  }
];

export default routes;
