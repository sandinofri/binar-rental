import Dashboard from "./pages/Dasboard";
import SignIn from "./pages/SignIn";

export const routes = [
  {
    path: '/admin',
    element: (
      <Dashboard />
    )
  },
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
