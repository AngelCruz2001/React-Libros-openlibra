import React, { useState } from 'react'
import { typesFetch } from '../../types.js';

export const ItemDropDown = ({ setTypeSearch }) => {
    const values = ['Name', 'Category', 'KeyWords', 'Author'];
    const [state, setState] = useState("Select");

    const handleItemClick = ({ target }) => {
        for (let i = 0; i < 4; i++) {
            i === parseInt(target.id)
                ?
                document.getElementById(i).setAttribute("class", 'dropdown-item active')
                :
                document.getElementById(i).setAttribute("class", 'dropdown-item')
        }
        const value = values[parseInt(target.id)]
        setState(value)
        console.log(typesFetch[value]);
        setTypeSearch(typesFetch[value])
    }

    return (
        <>
            <div className="input-group-prepend">
                <button
                    className="btn btn-outline-secondary dropdown-toggle"
                    type="button"
                    id="buttonDropDown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    {state}
                </button>
                <div className="dropdown-menu">
                    {
                        values.map((select, i) => (
                            <p
                                className="dropdown-item"
                                id={i}
                                key={i}
                                name={select}
                                onClick={handleItemClick}
                            >
                                {select}
                            </p>

                        ))
                    }
                </div>
            </div>

        </>
    )
}
