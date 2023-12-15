import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import { landingRoutes } from './routes/landingRoutes';
import { useRoutes } from 'react-router-dom';

function App() {
  let routes = useRoutes(landingRoutes)
  return routes
}

export default App
