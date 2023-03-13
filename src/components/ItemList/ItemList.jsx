import { useEffect, useState } from 'react';
import {MANGAS} from '../../mocks/stock'
import { ItemCard } from './ItemCard';
import './styles.css'

export const ItemList = ({editorial}) => {

    const [mangaState,setMangaState] = useState(MANGAS);
    const [loading,setLoading] = useState(true);

    console.log('Se renderiza el componente: ' + loading );

    useEffect(() => {
        const filtrarMangas = new Promise((resolve,rejeact) => 
            setTimeout(() => {
                resolve(MANGAS)
                rejeact('A ocurrido un error')
            }, 2000)
        );
        

        filtrarMangas
        .then((mangaPromesa) => {
            if( !!editorial ){
                const mangaFiltrado = mangaPromesa.filter( manga => manga.editorial == editorial );
                setMangaState(mangaFiltrado);
            }
            setLoading(false);
        })
        .catch((error) => {
            console.log(error) 
        });
        
    }, [editorial]);
    
    

    return (
        <>
            <ul className='mangaListContainer'>
                {
                    (loading)? (<h1>Cargando...</h1>):null
                }
                {mangaState.map( manga => (
                    <li 
                    key={manga.id} 
                    className={`mangaCard ${(loading)? 'ocultarComponente':''}`}
                    >
                        <ItemCard  {...manga}/>
                    </li>
                ))}
            </ul>
        </>
    )
};