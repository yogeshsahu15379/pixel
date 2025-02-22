import './App.css';
import Card from './component/card/Card';
import Form from './component/form/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Domain Buddy</h1>
      <Form/>
      <Card heading="abc" subheading="bca" pricing='24224' discount='9' />
      </header>
    </div>
  );
}

export default App;
