import './style.css';
import Header from '../../Header';
import Form from '../../Form';
import TotalMoney from '../../TotalMoney';
import List from '../../List';

function Dashboard({ setPage, listTransactions, setListTransactions}) {

    return (
        <div className="bodyDashboard">
            <Header setPage={setPage}/>
            <main className="dashboardContainer">
                <section className="valueFomrContainer">
                    <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>
                    <TotalMoney listTransactions={listTransactions}/>
                </section>
                <List listTransactions={listTransactions} setListTransactions={setListTransactions} />
            </main>
        </div>
    );
}

export default Dashboard;