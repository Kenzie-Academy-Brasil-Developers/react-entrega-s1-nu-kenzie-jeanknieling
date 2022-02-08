import './style.css';

function Header({ setPage }) {

    function changePage() {
        return setPage(false);
    }

    return (
        <header className='headerContainer'>
            <h1>
                <span>Nu</span> Kenzie
            </h1>
            <button onClick={changePage}>Inicio</button>
        </header>
    );
}

export default Header;