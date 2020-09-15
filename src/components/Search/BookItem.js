import React, { useContext } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { BookContext } from '../../useReducer/BookContext';
import { Book } from '../Book/Book';

import './bookItem.css'
export const BookItem = ({ book, history }) => {

    const { dispatch } = useContext(BookContext);

    const handleClick = () => {
        dispatch({
            type: 'add',
            payload: book,
        })
        history.push('/Book');
    }

    return (
        <>
            <div className="card mb-3 item" onClick={handleClick}>
                <div className="row no-gutters">
                    <div className="col-lg-1 col-md-2 col-sm-3 col-xs-12">
                        <img src={book.cover} className="card-img" alt="Book" />
                    </div>
                    <div className="line"></div>
                    <div className="col-lg-10 col-md-9 col-sm-8 col-xs-12 textCards">
                        <div className="card-body">
                            <h4 className="card-title">{book.title}</h4>
                            <p className="card-text">
                                {book.content_short}
                            </p>
                            <p className="card-text">
                                <small className="text-muted">
                                    {book.language.charAt(0).toUpperCase() + book.language.slice(1)}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
