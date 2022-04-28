import { useEffect, useState } from 'react';
import { FakeStoreClient } from './api/FakeStoreClient';
import './app.scss';
import SummaryTabs from './components/summaryTabs/SummaryTabs';

function App() {
  const [users, setUsers] = useState([]);
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const p1 = FakeStoreClient.get('/users').then((response) => {
      setUsers(response.data);
    });
    const p2 = FakeStoreClient.get('/carts').then((response) => {
      setCarts(response.data);
    });
    const p3 = FakeStoreClient.get('/products').then((response) => {
      setProducts(response.data);
    });

    Promise.all([p1, p2, p3]).then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className='App'>
      <div className='banner'>
        <h1>SHOP SUMMARY</h1>
      </div>
      <SummaryTabs
        users={users}
        products={products}
        carts={carts}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
