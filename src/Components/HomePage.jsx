import Navbar from './Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <h1>Welcome to ABc, the one stop solution for all your shopping needs</h1>
      <img src="src/images/online-store.jpg" className="storeImg"></img>
      <h2>
        Choose among 400+ categories and 1,00,000+ items, all quality checked
        to give you a fulfilling experience
      </h2>
      <h2>Features we offer:</h2>
      <ul>
        <li>Wide variety of items</li>
        <li>Premium Quality</li>
        <li>10 days return policy</li>
        <li>Cash on delivery</li>
        <li>24 hours contact support</li>
      </ul>
    </>
  );
}