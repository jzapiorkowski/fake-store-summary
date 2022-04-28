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
    const usersPromise = FakeStoreClient.get('/users').then((response) => {
      setUsers(response.data);
    });
    const cartsPromise = FakeStoreClient.get('/carts').then((response) => {
      setCarts(response.data);
    });
    const productsPromise = FakeStoreClient.get('/products').then(
      (response) => {
        setProducts(response.data);
      }
    );

    Promise.all([usersPromise, cartsPromise, productsPromise]).then(() => {
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
