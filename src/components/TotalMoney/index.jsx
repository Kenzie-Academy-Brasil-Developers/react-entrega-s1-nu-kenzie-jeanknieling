import './style.css';

function TotalMoney({ listTransactions }) {

    const totalValue = listTransactions.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <div className="totalValue">
            <p>Valor total:</p>
            <p>$ {totalValue}</p>
        </div>
    );
}

export default TotalMoney;