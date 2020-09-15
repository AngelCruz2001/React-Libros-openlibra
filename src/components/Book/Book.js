import React, { useContext, useEffect } from 'react'
import { AnimationControler } from '../LottiesAnimations/AnimationControler.js'
import { BookInfo } from './BookInfo'
import { BookImage } from './BookImage'
import { BookContext } from '../../useReducer/BookContext.js';

export const Book = () => {
    const { state: libro, dispatch } = useContext(BookContext)
    useEffect(() => {
        dispatch('show')
    }, [libro])

    // const libro = !loading ? data[0] : {}
    return (
        <>
            <div className="row">
                <div className="col-3">
                    {console.log(libro)}
                    <BookImage
                        image={libro.cover}
                        id={libro.ID}
                    />
                </div>
                <div className="col">
                    <h4 className="text-muted">Book information</h4>
                    <hr />
                    <BookInfo
                        libro={libro}
                    />
                    <p></p>
                </div>
            </div>
        </>
    )
}
