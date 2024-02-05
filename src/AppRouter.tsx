import { RouterProvider, createBrowserRouter } from "react-router-dom";

const lazyLoadComp = (path: string) => async () => {
  const { Component } = await import(path);
  return { Component };
}

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./features/portal/Portal"),
  },
  {
    path: "/blueprint",
    lazy: lazyLoadComp("./features/blueprint"),
  },
  {
    path: "/counter",
    lazy: lazyLoadComp("./features/counter"),
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}