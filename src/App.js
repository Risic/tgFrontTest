import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram.js';
import Header from './components/Header/Header.jsx';
import {Route, Routes, Link} from 'react-router-dom'
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form.jsx';

function App() {
  const {tg, onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header/>
      <Link to={'/form'}>form link</Link>
      <Routes>
        <Route index element={<ProductList />}/>
        <Route path={'form'} element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
