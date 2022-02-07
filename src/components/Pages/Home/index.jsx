function Home({ setPage }) {

    function changePage() {
        return setPage(true);
    }

    return (
        <>
            <h1>Home</h1>
            <button onClick={changePage}>Entrar</button>
        </>
    );
}

export default Home;