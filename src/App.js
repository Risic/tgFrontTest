import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram.js';
import Header from './components/Header/Header.jsx';

function App() {
  const {tg, onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])



  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
