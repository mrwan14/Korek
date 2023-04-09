import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./Component/Dashboard/Dashboard";
import Login from "./Component/Login/Login";
import ErroePage from "./Component/erroe-page";
import Shop from "./Component/Shop/Shop";
import Statistcs from "./Component/Statistcs/Statistcs";
import Community from "./Component/Community/Community";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErroePage />,
    children: [
      { index: true , element: <Statistcs /> },
      { path: "/login", element: <Login /> },
      { path: "/shop", element: <Shop /> },
      { path: "/community", element: <Community /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
