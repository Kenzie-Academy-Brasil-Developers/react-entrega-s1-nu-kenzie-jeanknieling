import { useState } from 'react';
import Home from './components/Pages/Home';
import Dashboard from './components/Pages/Dashboard';
import './App.css';

function App() {

    const [listTransactions, setListTransactions] = useState([
        /* { description: "Salário recebido", type: "entrada", value: 2500 },
        { description: "Conta de luz", type: "saída", value: -150 } */
      ])

    const [page, setPage] = useState(false);

    return (
        <div className="App">
            {page ? <Dashboard listTransactions={listTransactions} setListTransactions={setListTransactions} setPage={setPage}/> : <Home setPage={setPage}/>}
        </div>
    );
}

export default App;