import React from 'react'
import { Carousel } from '../Carousel/Carousel'
import CategoriesList from '../Categories/CategoriesList'

export const HomeScreen = () => {

    return (
        <div>
           <CategoriesList
                // categories={!loading?data:[]}
            /> 
           <Carousel/>

        </div>
    )
}
