
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CardWidget } from '../CardWidget/CardWidget';
import './styles.css'

export const NavBar = () => {
    
    return (
        <nav id='nav'>
            <section className='first-nav'>
                <div className='first-nav-child-1'>
                    <h1>MangaOnline </h1>
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
                <NavLink to='/' className='link'>
                    INICIO
                </NavLink>
                <NavLink to='/IvreaArgentina' className='link'>
                    IVREA ARGENTINA
                </NavLink>
                <NavLink to='/Panini' className='link'>
                    PANINI
                </NavLink>
                <NavLink to='/OvniMangas' className='link'>
                    OVNI MANGAS
                </NavLink>
            </ul>

        </nav>
    )
};