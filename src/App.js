
import { useState } from 'react';
import './App.css';
import Semaforo from './components/semaforo/Semaforo'

function App() {
  const [semaforoIndex, setSemaforoIndex] = useState(0)

  return (
    <div className="App">
      <Semaforo semaforoIndex={semaforoIndex} setSemaforoIndex={setSemaforoIndex} />
    </div>
  );
}

export default App;
