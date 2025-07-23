import HomePage from './Components/HomePage';
import ShopPage from './Components/ShopPage';

const routes = [
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/shopPage",
    element: <ShopPage></ShopPage>,
  },
];

export default routes;