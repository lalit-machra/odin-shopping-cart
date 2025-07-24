import { default as Navbar } from './Navbar';
import { useState, useEffect } from 'react';

function ShopPage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await (await fetch('https://fakestoreapi.com/products')).json();
      let dataArr = []
      data.slice(0, 12).forEach((item) => {
        dataArr.push(item);
      });
      setItems(dataArr);
    }
    getData();
  }, []);
  console.log(items)
  let domData = items.map((item, index) => {
    return (
    <div className="item" key={index}>
      <img src={item.image} className="itemImg"></img>
      <h2>{item.title}</h2>
      <h3>${item.price}</h3>
      <label>Quantity: </label>
      <input type="number" className="itemCount" defaultValue="1" min="1"></input>
      <button className="addToCartBtn">Add to Cart</button>
    </div>);
  });

  return (
    <>
      <Navbar></Navbar>
      <h1>ABc Online Store</h1>
      <div className="items">
        {domData}
      </div>
    </>
  );
}

export default ShopPage;