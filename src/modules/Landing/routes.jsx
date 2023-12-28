import DetailCarPage from "./pages/DetailCarPage";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import SearchResult from "./pages/SearchResult";
import EticketPages from "./pages/E-TicketPages";
// import authLogin from "./components/hoc/authLogin";

export const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/search",
    element: <SearchResult />,
  },
  {
    path: "/detail/:id",
    element: <DetailCarPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  { path: "/eticket", element: <EticketPages /> },
];
