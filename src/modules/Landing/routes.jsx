import DetailCarPage from "./pages/DetailCarPage";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import SearchResult from "./pages/SearchResult";
<<<<<<< HEAD
=======
import PaymentPages from "./pages/PaymentPages";
import AuthLogin from "./components/hoc/authLogin";
>>>>>>> d0d558aa0c0849f7a5e48db3259e10bea3114ca3

export const routes = [
  {
    path: "/",
    element: (
      <LandingPage />
    ),
  },
  {
    path: "/search",
    element: (
      <SearchResult />
    ),
  },
  {
    path: "/detail/:id",
    element: (
      <DetailCarPage />
    ),
  },
  {
    path: "*",
    element: (
      <NotFound />
    ),
  },
<<<<<<< HEAD
]
=======
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/paymentPages/:id",
    element: (
      <AuthLogin>
        <PaymentPages />
      </AuthLogin>
    ),
  },
];
>>>>>>> d0d558aa0c0849f7a5e48db3259e10bea3114ca3
