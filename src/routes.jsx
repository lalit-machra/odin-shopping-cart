import HomePage from './Components/HomePage';
import ShopPage from './Components/ShopPage';
import Cart from './Components/Cart';

const routes = [
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/shopPage",
    element: <ShopPage></ShopPage>,
  },
  {
    path: "/shoppingCart",
    element: <Cart></Cart>
  },
];

export default routes;