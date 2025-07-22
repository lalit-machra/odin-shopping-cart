import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';

const routes = [
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "shopPage",
    element: <>
      <h1>Welcome to shop page, you can view your cart here</h1>
      <Navbar></Navbar>
    </>
  },
];

export default routes;