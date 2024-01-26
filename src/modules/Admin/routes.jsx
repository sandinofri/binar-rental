import AddCar from "./pages/AddCar";
import Cars from "./pages/Cars/Cars";
import Dashboard from "./pages/Dasboard";
import SignIn from "./pages/SignIn";
export const routes = [
  {
    path: "/admin",
    element: <Dashboard />,
  },
  {
    path: "/admin/login",
    element: <SignIn />,
  },
  {
    path: "/admin/cars",
    element: <Cars />,
  },
  { path: "/admin/cars/add", element: <AddCar /> },

];
