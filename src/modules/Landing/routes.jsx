import DetailCarPage from "./pages/DetailCarPage";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import SearchResult from "./pages/SearchResult";
import PaymentPages from "./pages/PaymentPages";
import TransferPages from "./pages/TransferPages";
import Eticket from "./pages/E-Ticket"

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
    path: "/payment/:id",
    element: <PaymentPages/>
  },
  {
    path: "transfer",
    element: <TransferPages/>
  },
  {
    path: "/eticket",
    element: <Eticket/>
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
