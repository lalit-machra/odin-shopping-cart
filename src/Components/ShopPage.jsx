import { default as Navbar } from './Navbar'

function ShopPage() {
  return (
    <>
      <Navbar></Navbar>
      <h1>ABc Online Store</h1>
      <div className="items">
        <div className="item">
          <img src="src/images/product1.jpeg" className="itemImg"></img>
          <h2>Item1</h2>
          <label>Quantity: </label>
          <input type="number" className="itemCount" defaultValue="1" min="1"></input>
          <button className="addToCartBtn">Add to Cart</button>
        </div>
        <div className="item">
          <img src="src/images/product1.jpeg" className="itemImg"></img>
          <h2>Item2</h2>
          <label>Quantity: </label>
          <input type="number" className="itemCount" defaultValue="1" min="1"></input>
          <button className="addToCartBtn">Add to Cart</button>
        </div>
        <div className="item">
          <img src="src/images/product1.jpeg" className="itemImg"></img>
          <h2>Item3</h2>
          <label>Quantity: </label>
          <input type="number" className="itemCount" defaultValue="1" min="1"></input>
          <button className="addToCartBtn">Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default ShopPage;