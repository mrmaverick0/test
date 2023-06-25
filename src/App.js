 import {Route} from 'react-router-dom'
 import './App.css';
import Welcome from './component/Welcome'
import Product from './component/Product';
import Header from './component/Header';
import ProductDetails from './component/ProductDetails';
function App() {
  return (
    <div className="App">
    <Header></Header>
    <main>
      <Route path='/welcome'>
        <Welcome></Welcome>
      </Route>
      <Route path='/product'>
        <Product></Product>
      </Route>
      <Route path='/product-details'>
        <ProductDetails></ProductDetails>
      </Route>
      </main>
    </div>
  );
}

export default App;
