import { useState } from 'react';
import Home from './components/Pages/Home';
import Dashboard from './components/Pages/Dashboard';
import './App.css';

function App() {

    const [page, setPage] = useState(false);

    return (
        <div className="App">
            {page ? <Dashboard setPage={setPage}/> : <Home setPage={setPage}/>}
        </div>
    );
}

export default App;