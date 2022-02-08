import './style.css';
import { useState } from 'react';
import Loading from '../images/loading.png';
import Card from '../Card'

function List({ listTransactions, setListTransactions }) {

    const [newListTransactions, setNewListTransactions] = useState([]);

    function showAll(currentListTransactions) {
        return currentListTransactions.map((item, index) => <Card listTransactions={listTransactions} key={index} transaction={item} setListTransactions={setListTransactions}/>)
    }

    function allFilter() {
        return setNewListTransactions(listTransactions); 
    }
    
    function entriesFilter() {
        return setNewListTransactions(listTransactions.filter(item => item.type === 'Entrada')); 
    }

    function expensesFilter() {
        return setNewListTransactions(listTransactions.filter(item => item.type === 'Despesa')); 
    }

    function loading() {
        
        return (
            <>
                <p className="pLoading">Você ainda não possui nenhum lançamento</p>
                <img src={Loading} alt="Loading"/>
            </>
        )
    }


    return (

        <section className="cardsList">

            <div className="cardsOptions">
                <p>Resumo financeiro</p>
                <div className="filterButtons">
                    <button onClick={allFilter}>Todos</button>
                    <button onClick={entriesFilter}>Entradas</button>
                    <button onClick={expensesFilter}>Despesas</button>
                </div>
            </div>

            {
                listTransactions.length === 0 ? loading() : 
                newListTransactions.length === 0 ? 
                showAll(listTransactions) : newListTransactions.length === listTransactions.length ? showAll(listTransactions) : showAll(newListTransactions)
            }
            
        </section>
        
    );
}

export default List;