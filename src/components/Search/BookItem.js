import React from 'react'
import './bookItem.css'
export const BookItem = ({ book }) => {
    return (
        <>
            <div className="card mb-3">
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
