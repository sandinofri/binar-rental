import Dashboard from "./pages/DashBoard/Dashboard";
import SignIn from "./pages/SignIn";

export const routes = [
  {
    path: '/admin/login',
    element: (
      <SignIn />
    )
  },
  {
    path:'/admin/dashboard',
    element:(<Dashboard/>)
  }
]
