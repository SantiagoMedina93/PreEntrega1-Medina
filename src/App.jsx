
import React from 'react';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';



export const App = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer itemList={'Item List'}/>
        </>
    )
};