import { useEffect, useState } from 'react';
import { FakeStoreClient } from './api/FakeStoreClient';
import CategorySummary from './components/CategorySummary';

function App() {
  const [users, setUsers] = useState([]);
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    FakeStoreClient.get('/users').then((response) => {
      setUsers(response.data);
    });
    FakeStoreClient.get('/carts').then((response) => {
      setCarts(response.data);
    });
    FakeStoreClient.get('/products').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className='App'>
      <CategorySummary products={products} />
    </div>
  );
}

export default App;
