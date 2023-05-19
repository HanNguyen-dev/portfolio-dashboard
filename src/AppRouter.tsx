import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const Portal = lazy(() => import("./features/portal/Portal"));
const BluePrint = lazy(() => import("./features/blueprint"));
const Counter = lazy(() => import("./features/counter"));

const SuspendWrapper = (props: { children: any }) =>
  <Suspense fallback={"Loading..."}>{props.children}</Suspense>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <SuspendWrapper>
        <Portal />
      </SuspendWrapper>
    ),
  },
  {
    path: "/blueprint",
    element: (
      <SuspendWrapper>
        <BluePrint />
      </SuspendWrapper>
    ),
  },
  {
    path: "/counter",
    element: (
      <SuspendWrapper>
        <Counter />
      </SuspendWrapper>
    ),
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}