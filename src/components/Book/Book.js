import React from 'react'
import { AnimationControler } from '../LottiesAnimations/AnimationControler.js'

import { BookInfo } from './BookInfo'
import { BookImage } from './BookImage'
import { useFetch } from '../../hooks/useFetch';

export const Book = () => {
    const { data, loading } = useFetch(16516, "BookId");

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
                        <h4 className="text-muted">Book information</h4>
                        <hr />
                        <BookInfo
                            libro={libro}
                        />
                        <p></p>
                    </div>
                </div>
                :
                <AnimationControler />
            }
        </>
    )
}
