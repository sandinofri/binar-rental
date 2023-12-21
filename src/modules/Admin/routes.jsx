import SignIn from "./pages/SignIn";
import MenuCar from "./pages/MenuCar";
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
  }
]
