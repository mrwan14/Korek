import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./Component/Dashboard/Dashboard";
import Login from "./Component/Login/Login";
import ErrorPage from "./Component/Erroe-page";
import Statistcs from "./Component/Statistcs/Statistcs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,

    children: [
      { index: true, element: <Statistcs /> },
      { path: "/login", element: <Login /> },
      { errorElement: <ErrorPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
