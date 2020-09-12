import React from 'react'
import { BookInfo } from './BookInfo'
import { BookImage } from './BookImage'
import { useFetch } from '../../hooks/useFetch';

export const Book = () => {
    const { data, loading, error } = useFetch(16806);
    const libro = !loading ? data[0] : {}
    return (
        <>
            { (!loading) ?
            
                <div className="row">
                    <div className="col-4">
                    {console.log(libro)}
                        <BookImage
                            image={libro.cover}
                            id={libro.ID}
                        />
                    </div>
                    <div className="col-8">
                        <h4 className="text-muted">Informacion del libro</h4>
                        <hr/>
                        <BookInfo
                            libro={libro}
                        />
                        <p></p>
                    </div>
                </div>
                :
                <h1>Loading...</h1>
            }
        </>
    )
}
