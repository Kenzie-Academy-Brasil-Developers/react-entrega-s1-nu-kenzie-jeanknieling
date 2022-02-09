import './style.css';
import { useState } from 'react';
import Loading from '../images/loading.png';
import Card from '../Card'

function List({ listTransactions, setListTransactions }) {

    const [newListTransactions, setNewListTransactions] = useState([]);
    const [filterShow, setFilterShow] = useState('todos');

    function showAll(currentListTransactions) {

        return (

            currentListTransactions.length === 0 ? loading() :
            currentListTransactions.map((item, index) => <Card key={index} listTransactions={listTransactions} transaction={item} setListTransactions={setListTransactions} newListTransactions={newListTransactions} setNewListTransactions={setNewListTransactions}/>)

        )
            
    }

    function allFilter() {

        setFilterShow('todos');
        return setNewListTransactions(listTransactions); 

    }
    
    function entriesFilter() {

        setFilterShow('entradas');
        return setNewListTransactions(listTransactions.filter(item => item.type === 'Entrada')); 

    }

    function expensesFilter() {

        setFilterShow('saídas');
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
                    <button onClick={allFilter} className={filterShow === "todos" ? "pinkBg" : ""}>Todos</button>
                    <button onClick={entriesFilter} className={filterShow === "entradas" ? "pinkBg" : ""}>Entradas</button>
                    <button onClick={expensesFilter} className={filterShow === "saídas" ? "pinkBg" : ""}>Despesas</button>
                </div>
            </div>

            {
                filterShow === "todos" ? showAll(listTransactions) : showAll(newListTransactions)
            }
            
        </section>
        
    );
}

export default List;