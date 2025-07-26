import { Link } from 'react-router-dom';

export default function Navbar(cart=null) {
  // if (typeof itemsInCart !== 'Array') {
  //   return (
  //     <div className="navbar">
  //       <Link to="/">Home</Link>
  //       <Link to="/shopPage">Shop</Link>
  //     </div>
  //   );
  // } else {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/shopPage">Shop</Link>
      {cart.itemsInCart != undefined ? 
        <Link to="/shoppingCart" state={{cartItems: cart.itemsInCart}}>Cart ({cart.itemsInCart.length})</Link>
      : ''}
    </div>
  );
  // }
}