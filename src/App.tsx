import { useState } from 'react';
import './App.css';
import Card from './component/card/Card';
import Form from './component/form/Form';
import Cart from './component/cart/Cart';

function App() {

  const [SuggestedData, setSuggestedData] = useState([]);
const [isShowCart, setIsShowCart] = useState(false);
  return (
    <div className="App App-header">
      <nav className="navbar">
        <h1>Domain Buddy</h1>
      </nav>
      <div className="container">
      <Form setSuggestedData={setSuggestedData} />
        <div className='card-container'>
          {SuggestedData.map((data: any) => (
            <Card heading={data.domain.toLowerCase()} subheading={data.availability} pricing={data.price} discount={data.renewal_price} />
          ))}
        </div>
        <button onClick={()=>{setIsShowCart(!isShowCart)}}>show cart</button>
        <Cart cards={SuggestedData} isShow={isShowCart} />
      </div>
    </div>
  );
}

export default App;
