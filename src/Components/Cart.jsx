import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import styles1 from '../styles/cart.module.css';

export default function Cart() {
  const location = useLocation();
  const itemsInCart = location.state.cartItems;
  console.log(itemsInCart)
  let totalAmount = itemsInCart.reduce((total, item) => {
    return (total += item.value);
  }, 0).toFixed(2);

  let itemsList = itemsInCart.map(item => 
    <tr key={item.name}>
      <td className={styles1.tableData}>{item.name}</td>
      <td className={styles1.tableData}>${item.price}</td>
      <td className={styles1.tableData}>{item.quantity}</td>
      <td className={styles1.tableData}>${item.value}</td>
    </tr>
  )

  if (totalAmount != 0) {
    return (
      <>
        <Navbar></Navbar>
        <h1>Summary</h1>
        <table className={styles1.cartDataTable}>
          <thead>
            <tr>
              <th className={styles1.tableHeader}>Item</th>
              <th className={styles1.tableHeader}>Price</th>
              <th className={styles1.tableHeader}>Quantity</th>
              <th className={styles1.tableHeader}>Total</th>
            </tr>
          </thead>
          <tbody>
            {itemsList}
            <tr>
              <td className={styles1.tableData}></td>
              <td className={styles1.tableData}></td>
              <td className={styles1.tableData}></td>
              <td className={styles1.totalAmount}>${totalAmount}</td>
            </tr>
          </tbody>
        </table>
        <button className={styles1.payBtn}>Pay ${totalAmount}</button>
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