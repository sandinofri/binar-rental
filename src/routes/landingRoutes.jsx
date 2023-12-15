import DetailCarPage from "../pages/DetailCarPage";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import SearchResult from "../pages/SearchResult";

export const landingRoutes = [
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
]
