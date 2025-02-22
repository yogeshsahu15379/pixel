import { useState } from 'react';
import './App.css';
import Card from './component/card/Card';
import Form from './component/form/Form';

function App() {

  const [SuggestedData,setSuggestedData] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Domain Buddy</h1>
      <Form setSuggestedData={setSuggestedData} />
      <div className='card-container'>
      {SuggestedData.map((data:any) => (
        <Card heading={data.domain} subheading={data.availability} pricing={data.price} discount={data.renewal_price} />
      ))}
      </div>
      </header>
    </div>
  );
}

export default App;
