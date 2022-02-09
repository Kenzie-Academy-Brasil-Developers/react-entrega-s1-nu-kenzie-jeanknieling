import './style.css';

function Card({ transaction, listTransactions, setListTransactions, newListTransactions, setNewListTransactions }) {

    function deleteTransaction(event) {
        
        let id = "";

        if(event.target.closest('.grayBorderCard')) {

            id = Number(event.target.closest('.grayBorderCard').id);
            
        } else if(event.target.closest('.greenBorderCard')) {

            id = Number(event.target.closest('.greenBorderCard').id);

        }

        setListTransactions(listTransactions.filter(item => item.id !== id));
        setNewListTransactions(newListTransactions.filter(item => item.id !== id));

    }

    return (
        
        <section id={transaction.id} className={transaction.type === "Despesa" ? "grayBorderCard" : "greenBorderCard"}>
            <div className="descriptionType">
                <p className="description">{transaction.description}</p>
                <p className="type">{transaction.type}</p>
            </div>
            <div className="valueButton">
                <p className="value">R$ {transaction.value.toFixed(2).replace('.', ',')}</p>
                <button className="bascketButton" onClick={deleteTransaction}/>
            </div>
        </section>
    );
}

export default Card;