import React from 'react'

import 'animate.css';

const GigGridItem = ({ img }) => {
    return (
        <div className="GifCard animate__animated animate__fadeInDown">
            <img
                key = { img.id }
                alt = { img.title}
                src = { img.url }
            />
            <p>{img.title}</p>
        </div>
    )
}

export default GigGridItem
