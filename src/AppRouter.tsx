import { RouterProvider, createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: () => import('./features/portal/Portal'),
  },
  {
    path: '/blueprint',
    async lazy() {
      const { BluePrint } = await import('./features/blueprint');
      return { Component: BluePrint };
    },
  },
  {
    path: '/counter',
    async lazy() {
      const { Component } = await import('./features/counter');
      return { Component };
    },
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
