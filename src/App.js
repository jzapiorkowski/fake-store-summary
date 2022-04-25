import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { FakeStoreClient } from './api/FakeStoreClient';

function App() {
  const [users, setUsers] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    FakeStoreClient.get('/users').then((response) => {
      setUsers(response.data);
    });
    FakeStoreClient.get('/carts').then((response) => {
      setCarts(response.data);
    });
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
