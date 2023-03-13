import { Route, Routes } from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { NavBar } from "../components/NavBar/NavBar"
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";
import {IvreaPage,PaniniPage,OvniPressPage} from '../pages'

export const MangaRouter = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/*" element={<ItemListContainer />} />
                <Route path="IvreaArgentina" element={<IvreaPage editorial="Ivrea Argentina"/>} />
                <Route path="Panini" element={<PaniniPage editorial="Pannini"/>} />
                <Route path="OvniMangas" element={<OvniPressPage editorial="Ovni Mangas"/>} />
                
                <Route path="/:editorial/:nombre/:id" element={<ItemDetailContainer />} />

            </Routes>
        </>
    )
};