import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { BookItem } from './BookItem'
import { InputSearch } from './InputSearch'

export const Search = () => {

    const [dataFetch, setDataFetch] = useState({ param: "Java", type: "book_title" });
    const { data, loading } = useFetch(dataFetch);

    console.log(data)
    return (
        <>
            { (!loading) ?
                <div>
                    <InputSearch setDataFetch={setDataFetch} />
                    {
                        data.map((b) => (
                            <BookItem
                                key={b.id}
                                book={b}
                            />
                        ))
                    }
                </div>
                :
                <h1>Loading</h1>
            }
        </>
    )
}
