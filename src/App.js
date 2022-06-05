import './App.css';
import { useState, useEffect } from 'react';
import getContacts from './contactsApi';
import Layout from './views';
import Table from './components/Table';
import Button from './components/Button';

function App() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const LIMIT = 10;

  useEffect(() => {
    async function getAllContacts() {
      try {
        const response = await getContacts(page, LIMIT);
        setData(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    getAllContacts();
  }, [page, LIMIT]);

  const handleNextButtonCkick = () => {
    if (data.length < LIMIT) {
      return;
    }
    setPage(page + 1);
  };

  const handlePrevButtonCkick = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  return (
    <div className="App">
      <Layout>
        <Table data={data} />
        <div className="button-controls">
          <Button title="Prev" onClick={handlePrevButtonCkick} />
          <Button title="Next" onClick={handleNextButtonCkick} />
        </div>
      </Layout>
    </div>
  );
}

export default App;
