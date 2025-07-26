import { default as Navbar } from './Navbar';
import { useState, useEffect } from 'react';

function ShopPage() {
  const [items, setItems] = useState([]);
  const [itemsInCart, setItemsInCart] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await (await fetch('https://fakestoreapi.com/products')).json();
      let dataArr = [];
      data.slice(0, 12).forEach((item) => {
        dataArr.push(item);
      });
      setItems(dataArr);
    }
    getData();
  }, []);
  
  let domData = items.map((item, index) => {
    return (
    <div className="item" key={index}>
      <img src={item.image} className="itemImg"></img>
      <h2>{item.title}</h2>
      <h3>${item.price}</h3>
      <label>Quantity: </label>
      <input type="number" className="itemCount" defaultValue="1" min="1"></input>
      <button className="addToCartBtn" onClick={(e) => hanldeItemsInCart(e.target.parentNode)}>Add to Cart</button>
    </div>);
  });

  function hanldeItemsInCart(itemDiv) {
    let itemName = itemDiv.querySelector("h2").innerText;
    let itemQuant = itemDiv.querySelector("input").value;
    let itemPrice = +itemDiv.querySelector("h3").innerText.slice(1);
    let itemValue = itemQuant * itemPrice;
    setItemsInCart(itemsInCart => [...itemsInCart, {name: itemName, quantity: itemQuant, price: itemPrice, value: itemValue}]);
  }

  return (
    <>
      <Navbar itemsInCart={itemsInCart}></Navbar>
      <h1>ABc Online Store</h1>
      <div className="items">
        {domData}
      </div>
    </>
  );
}

export default ShopPage;