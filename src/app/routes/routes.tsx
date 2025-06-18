import { createBrowserRouter } from 'react-router';
import { HomePage } from '../../pages';
import { CategoryPage } from '../../pages';
import { Layout } from '../layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'community', element: <a>Comm</a> },
      { path: ':category', Component: CategoryPage },
      { path: 'article', children: [
        { path: ':alias', element: <a>Article</a> },
      ]},
      { path: 'profile', children: [
        { index: true, element: <a>Profile</a> },
        { path: 'edit', element: <a>Edit Profile</a> },
      ]},
    ]
  }
]);
