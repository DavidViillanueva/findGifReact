import React, { useState } from 'react'

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {

    // const categories = ['One Punch', 'South Park', 'Gintama'];

    const [categories, setCategories] = useState(['One punch']);

    // const handleAdd = () => {
    //     setCategories([...categories,'Full Metal Alchimist']);
    // };

    return (
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>
            <ol>
                {
                    categories.map( category => 
                        <GifGrid 
                            key = { category }
                            category = { category }
                        />
                    )
                }
            </ol>

        </>
    )
}

export default GifExpertApp;