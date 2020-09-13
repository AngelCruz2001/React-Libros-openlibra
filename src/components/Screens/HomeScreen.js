import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Carousel } from '../Carousel/Carousel'
import CategoriesList from '../Categories/CategoriesList'

export const HomeScreen = () => {

    const {data,loading} = useFetch("","AllCategories")
    return (
        <div>
           <CategoriesList
                categories={!loading?data:[]}
            /> 
           <Carousel/>

        </div>
    )
}
