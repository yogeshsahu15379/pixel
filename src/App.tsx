import { useEffect, useState } from 'react';
import './App.css';
import Card from './component/card/Card';
import Form from './component/form/Form';
import Cart from './component/cart/Cart';

function App() {

  const [SuggestedData, setSuggestedData] = useState([]);
  const [isShowCart, setIsShowCart] = useState(false);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {console.log(cartData)}, [cartData]);
  return (
    <div className="App App-header">
      <nav className="navbar">
        <h1>Domain Buddy</h1>
        <button onClick={() => { setIsShowCart(!isShowCart) }}>Cart</button>

      </nav>
      <div className="container">
        <Form setSuggestedData={setSuggestedData} />
        <div className='card-container'>
          {SuggestedData.map((data: any) => (
            <Card heading={data.domain.toLowerCase()} availbility={data.availability} pricing={data.price} setCartData={setCartData}/>
          ))}
        </div>
        <Cart cards={cartData} isShow={isShowCart} />
      </div>
    </div>
  );
}

export default App;
