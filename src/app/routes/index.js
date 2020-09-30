import { lazy } from 'react';


const routes = [
  {
    name: 'movies',
    path: '/movies',
    exact: true,
    component: lazy(() => import('@/app/pages/PageMovie')),
  },
  {
    name: 'newMovie',
    path: '/newMovie',
    exact: true,
    component: lazy(() => import('@/app/pages/FormMovie')),
  },
  {
    name: 'editMovie',
    path: '/editMovie/:id',
    exact: true,
    component: lazy(() => import('@/app/pages/FormMovie')),
  },
];

export default routes;
