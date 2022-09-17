import React from 'react'
import './Dashboard.css'
import { useState } from 'react';
import Graph from '../Graph/Graph';
import Filter from '../Filter/Filter';
import Feedback from '../Feedback/Feedback';
const Dashboard = () => {

    const [activeFilters, setActiveFilters] = useState(["Hello"]);

    const removeFilter = ()=>{
        setActiveFilters(...activeFilters);
    }

    return ( 
        <>
        <Filter/>
        <Feedback/>
        {/* <Graph/> */}
        </>
    
    )
}

export default Dashboard