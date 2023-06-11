import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./Component/Dashboard/Dashboard";
import Login from "./Component/Login/Login";
import ErroePage from "./Component/erroe-page";
import Shop from "./Component/Shop/Shop";
import Statistcs from "./Component/Statistcs/Statistcs";
import Orders from "./Component/Shop/Orders";
import Providers from "./Component/Providers/Providers";
import ServiceProvider from "./Component/Customers/Customers";
import ProviderRequests from "./Component/ProviderRequests/ProviderRequests";
function ProtectedRouts(props) {
  if (localStorage.getItem("userToken") === null) {
    return <Navigate to="/login" />;
  } else {
    return props.children;
  }
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErroePage />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRouts>
            <Statistcs />
          </ProtectedRouts>
        ),
      },
      {
        path: "/login",
        element: (
          <ProtectedRouts>
            <Login />
          </ProtectedRouts>
        ),
      },
      {
        path: "/shop",
        element: (
          <ProtectedRouts>
            <Shop />
          </ProtectedRouts>
        ),
      },
      {
        path: "/order",
        element: (
          <ProtectedRouts>
            <Orders />
          </ProtectedRouts>
        ),
      },
      {
        path: "/providers",
        element: (
          <ProtectedRouts>
            <Providers />
          </ProtectedRouts>
        ),
      },
      {
        path: "/customers",
        element: (
          <ProtectedRouts>
            <ServiceProvider />{" "}
          </ProtectedRouts>
        ),
      },
      {
        path: "/provider-requests",
        element: (
          <ProtectedRouts>
            <ProviderRequests />{" "}
          </ProtectedRouts>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
