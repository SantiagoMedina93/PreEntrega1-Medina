
import { CardWidget } from '../CardWidget/CardWidget';
import './styles.css'

export const NavBar = () => {
    return (
        <nav id='nav'>
            <section className='first-nav'>
                <div className='first-nav-child-1'>
                    <h1>TITULO</h1>
                    <input 
                        type='text'
                        placeholder='Buscar'
                    />
                </div>
                <div className='first-nav-child-2'>
                    <p>Tu cuenta</p>
                    <CardWidget />
                </div>
            </section>

            <ul className='second-nav'>
                <li> <button> SECCIÓN 1 </button></li>
                <li> <button> SECCIÓN 2 </button></li>
                <li> <button> SECCIÓN 3 </button></li>
                <li> <button> SECCIÓN 4 </button></li>
                <li> <button> SECCIÓN 5 </button></li>
            </ul>

        </nav>
    )
};