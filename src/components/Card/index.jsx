import './style.css';

function Card({ transaction, listTransactions, setListTransactions}) {

    function deleteTransaction(event) {
        
        const id = Number(event.target.closest('div').id);

        setListTransactions(listTransactions.filter(item => item.id !== id));
    }

    return (
        
        <section id={transaction.id} className="card">
            <div className="descriptionType">
                <p className="description">{transaction.description}</p>
                <p className="type">{transaction.type}</p>
            </div>
            <div className="valueButton">
                <p className="value">R$ {transaction.value.toFixed(2).replace('.', ',')}</p>
                <button type="button" onClick={deleteTransaction}/>
            </div>
        </section>
    );
}

export default Card;