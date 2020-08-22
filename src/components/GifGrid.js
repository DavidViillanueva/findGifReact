import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import GifGridItem from './GigGridItem';

import 'animate.css';


const GifGrid = ({ category }) => {
    
    const { data:images , loading } = useFetchGifs( category );

    return (
        <>
        <h3 className="animate__animated animate__fadeInDown"> { category } </h3>

        { loading && <p className="animate__animated animate__flash">Loading</p> }

        <div className="grid">
            <ol>
                {
                    images.map( ( image ) => 
                        <GifGridItem 
                            key = { image.id }
                            img = { image } 
                        />
                    )
                }
            </ol>
        </div>
        </>
    )
}

export default GifGrid
