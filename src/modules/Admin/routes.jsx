import AddCar from "./pages/Cars/AddCar";
import Cars from "./pages/Cars/Cars";
import Dashboard from "./pages/Dasboard";
import SignIn from "./pages/SignIn";
import MenuCar from "./pages/MenuCar";
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

  {
    path: "/admin/menu",
    element: <MenuCar />,
  },
];
