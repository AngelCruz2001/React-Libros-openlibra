import React from 'react';
import CategoryListItem from './CategoryListItem';

const CategoriesList = ({categories}) => {
    return (
        <div>
            <h2>Categories</h2>
            {
                categories.map( cate =>(
                    <CategoryListItem/>
                ))
            }
        </div>
    );
}

export default CategoriesList;
