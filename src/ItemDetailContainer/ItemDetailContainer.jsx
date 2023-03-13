import { useNavigate, useParams } from "react-router-dom";
import { CounterApp } from "../hook/CounterApp";
import { MANGAS } from "../mocks/stock";
import './styles.css'

export const ItemDetailContainer = () => {
    
    const {id} = useParams();
    const navigate = useNavigate();

    const {nombre,editorial,descripcion,cantidad,precio} = MANGAS.find( manga => manga.id == id );
    const mangaImgUrl = `../../../assets/img/portadas/${ editorial }/${nombre}.jpg`

    const backPage = () =>{
        navigate(-1);
    }

    return (
        <>
        <section className="itemDetail">
            <img src={mangaImgUrl} alt={nombre} />
            <div>
                <h1>{ nombre }</h1>
                <h3>Descripción:</h3>
                <p>{descripcion}</p>
                <h3>Precio: ${precio}</h3>
                <h3>Stock: {cantidad}</h3>
                <h3>Agregar al Carrito:</h3>
                <CounterApp precio={precio} cantidad={ cantidad }/>
                
            </div>
        
        </section>
        <div id="backButton">
            <button>
                Agregar al carrito
            </button>
            <button onClick={backPage}>
                Volver
            </button>
        </div>
        </>
    )
};