import React from 'react';

const CategoryListItem = ({name}) => {
    return (
        <div className="row mb-1">
            <div className="col-1">
                {/* Icono */}
                <img src="./assets/icons/ajedrez.png"/>
            </div>
            <div className="col">
                <p className="text-uppercase">{name}</p>
            </div>
        </div>
    );
}

export default CategoryListItem;
