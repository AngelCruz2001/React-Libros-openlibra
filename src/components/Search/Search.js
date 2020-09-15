import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { BookItem } from './BookItem'
import { InputSearch } from './InputSearch'

export const Search = () => {

    const [dataFetch, setDataFetch] = useState({ param: "Java", type: "book_title" });
    const { data, loading } = useFetch(dataFetch);

    return (
        <>
            <InputSearch setDataFetch={setDataFetch} />
            {
                (!loading) ?
                    <div>
                        {
                            data.map((b) => (
                                <BookItem
                                    key={b.ID}
                                    book={b}
                                />
                            ))
                        }
                    </div>
                    :
                    <h1>Loading...</h1>
            }
        </>
    )
}
