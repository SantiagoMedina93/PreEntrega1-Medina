import { Link } from 'react-router-dom';
import './styles.css'

export const ItemCard = ({nombre,precio,editorial,id}) => {
    
    const mangaImgUrl = `../../../assets/img/portadas/${ editorial }/${nombre}.jpg` 
    const mangaPathEditorial = editorial.replace(/\s+/g, '');
    const mangaPathNombre = nombre.replace(/\s+/g, '');

    return (
        <>
            <img src={mangaImgUrl} alt={nombre}/>
            <h1>{ nombre }</h1>
            <h2>{ `$${precio}` }</h2>
            <div>
                <button>
                    Agregar al Carrito
                </button>
                
                {/* ACA LINK */}
                <Link to={`/${mangaPathEditorial}/${ mangaPathNombre }/${id}`} className="linkCard">
                    INFORMACIÓN
                </Link>
            </div>
        </>
    )
};