

function Dashboard({ setPage }) {

    function changePage() {
        return setPage(false);
    }

    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={changePage}>Inicio</button>
        </>
    );
}

export default Dashboard;