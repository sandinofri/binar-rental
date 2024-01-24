import ProtectedRoute from "./components/hoc/Protected.Route";
import AddCar from "./pages/Cars/AddCar";
import Cars from "./pages/Cars/Cars";
import Edit from "./pages/Cars/edit/Edit";
import Dashboard from "./pages/Dasboard";
import SignIn from "./pages/SignIn";

export const routes = [
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/login",
    element: <SignIn />,
  },
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/cars",
    element: (
      <ProtectedRoute>
        <Cars />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/cars/add",
    element: (
      <ProtectedRoute>
        <AddCar />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/cars/edit/:id",
    element: (
      <ProtectedRoute>
        <Edit />
      </ProtectedRoute>
    ),
  },
];
