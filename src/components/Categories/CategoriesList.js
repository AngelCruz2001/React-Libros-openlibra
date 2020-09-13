import React from 'react';
import CategoryListItem from './CategoryListItem';

const CategoriesList = ({ categories }) => {

    return (

        <>

            <h2>Categories</h2>
            {
                (categories.length < 1)
                    ? <div class="text-center">
                        <div class="spinner-border m-5" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>

                    : categories.map(({ category_id, name }) => (
                        <CategoryListItem
                            key={category_id}
                            name={name}
                        />
                    ))

            }


        </>
    );
}

export default CategoriesList;
