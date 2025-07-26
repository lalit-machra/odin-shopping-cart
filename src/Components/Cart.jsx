import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

export default function Cart() {
  const location = useLocation();
  const itemsInCart = location.state.cartItems;
  console.log(itemsInCart)
  let totalAmount = itemsInCart.reduce((total, item) => {
    return (total += item.value);
  }, 0).toFixed(2);

  let itemsList = itemsInCart.map(item => 
    <tr key={item.name}>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>${item.value}</td>
    </tr>
  )

  if (totalAmount != 0) {
    return (
      <>
        <Navbar></Navbar>
        <h1>Summary</h1>
        <table className="cartDataTable">
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {itemsList}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="totalAmount">${totalAmount}</td>
            </tr>
          </tbody>
        </table>
        <button className="payBtn">Pay ${totalAmount}</button>
      </>
    );
  } else {
    return (
      <>
        <Navbar></Navbar>
        <h1>Your cart is empty!!!</h1>
      </>
    );
  }
}