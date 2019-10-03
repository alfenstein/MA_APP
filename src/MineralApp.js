//entry point for mineral analy application
import React from 'react';
import AddMineral from './components/AddMineral';
import MineralList from './components/MineralList';
import Filters from './components/Filters';
import './styles.css'

export default function MineralApp () {
    return (
        <div className="Mineral Analytics App">
            <h1>Mineral Analytics Application!</h1>
            <AddMineral />
            <MineralList />
            <Filters />
        </div>
    );
} 

