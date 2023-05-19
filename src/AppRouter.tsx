import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CounterContainer from "./features/counter";
import Portal from "./features/portal/Portal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portal />,
  },
  {
    path: "/counter",
    element: <CounterContainer />,
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}