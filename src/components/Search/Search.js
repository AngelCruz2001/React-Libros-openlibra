import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { AnimationControler } from '../LottiesAnimations/AnimationControler';
import { BookItemCard } from './BookItemCard'
import { InputSearch } from './InputSearch'

export const Search = ({ history }) => {

    const [dataBooks, setDataBooks] = useState({ param: "", type: "" });
    const { data, loading } = useFetch(dataBooks);

    return (
        <>
            <InputSearch setDataBooks={setDataBooks} />
            {(loading) && <AnimationControler />}
            {
                ((data.length > 0)) ?
                    <div>
                        {
                            data.map((b) => (
                                <BookItemCard
                                    key={b.ID}
                                    book={b}
                                    history={history}
                                />
                            ))
                        }
                    </div>
                    :
                    (!loading) && <div
                        className="alert alert-primary text-center"
                    >
                        Hello, what are you looking for...?
                    </div>
            }
        </>
    )
}
