import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import TestAPI from "../components/TestAPI";

const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <h1>Termbi App</h1>
          <TestAPI />
        </div>
      </Suspense>
    ),
  },
  {
    path: "/test",
    element: <TestAPI />,
  },
];

const router = createBrowserRouter(routes);

export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}