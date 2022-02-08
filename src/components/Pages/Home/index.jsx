import './style.css';
import NuKenzieHome from '../../images/nuKenzieHome.svg';

function Home({ setPage }) {

    function changePage() {
        return setPage(true);
    }

    return (
        <div className='bodyHome'>
            <main className='container'>
                <section className='loginSection'>
                    <h1>
                        <span>Nu</span> Kenzie
                    </h1>
                    <p>
                        Centralize o controle das suas finanças 
                    </p>
                    <span>de forma rápida e segura</span>
                    <button onClick={changePage}>Iniciar</button>
                </section>
                <img src={NuKenzieHome} alt='Imagem decorativa'/>
            </main>
        </div>
    );
}

export default Home;