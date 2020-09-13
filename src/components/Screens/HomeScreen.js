import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { Carousel } from '../Carousel/Carousel'
import CategoriesList from '../Categories/CategoriesList'

export const HomeScreen = () => {

    const { data, loading } = useFetch("", "AllCategories")
    return (
        <div className="row">
            <aside className="col-2">
                <CategoriesList
                    categories={!loading ? data : []}
                />
            </aside>
            <div className="col">
                <Carousel />
            </div>


        </div>
    )
}
