import React from 'react';

export const BookImage = ({image,ID}) => {
    return (
        <>
            <img src={image} alt={ID}/>
        </>
    );
}


