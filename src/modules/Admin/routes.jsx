import SignIn from "./pages/SignIn";
import MenuCar from "./pages/MenuCar";
import AddCar from "./pages/AddCar";
export const routes = [
  {
    path: '/admin/login',
    element: (
      <SignIn />
    )
  },
  {
    path: '/admin/menu',
    element: (
      <MenuCar/>
    )
  },
  {
    path: "admin/add",
    element: (
      <AddCar/>
    )
  }
]
