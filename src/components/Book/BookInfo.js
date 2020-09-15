import React from 'react'
export const BookInfo = ({ libro }) => {

    return (
        <>
            <div className="">
                <p className="display-4">{libro.title}</p>
                <div className="row">
                    <div className="col-6">
                        <p className="lead">
                            <b>Author:</b> {libro.author} <br />
                            <b>Pages:</b> {libro.pages} <br />
                            <b>Language:</b> {libro.language} <br />
                            <b>Publisher date:</b> {libro.publisher_date} <br />
                            <b>Publisher by:</b> {libro.publisher} <br />
                        </p>


                    </div>
                    <div className="col-6" >
                        <br />
                        <div className="row">
                            <a href={ libro.url_download } className="btn btn-outline-primary mb-3" style={{ width: 350 }}>Download</a>

                        </div>
                        <div className="row">
                            <a href={libro.url_details} className="btn btn-outline-primary mb-3" style={{ width: 350 }}>Read online</a>

                        </div>
                    </div>
                    <blockquote class="blockquote">
                        <p className="mb-0">{libro.content}</p>
                    </blockquote>


                </div>


            </div>
        </>
    )
}