import configRoutes from "../config/configRoutes";
import Home from "../pages/home/Home";

const mainRoutes = [
  {
    path: configRoutes.home,
    component: Home,
  },
];

export default mainRoutes;
