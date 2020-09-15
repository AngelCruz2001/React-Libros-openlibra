import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm';
import { ItemDropDown } from './ItemDropDown';
export const InputSearch = ({ setDataBooks }) => {

    const [typeSearch, setTypeSearch] = useState("")
    const [{ search }, handleInputChange, reset] = useForm({ search: "" });
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(typeSearch === "Select"){
            setTypeSearch("Name")
        }
        setDataBooks({param: search, type: typeSearch});
        reset('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">

                <ItemDropDown setTypeSearch={setTypeSearch} />
                <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with segmented dropdown button"
                    onChange={handleInputChange}
                    name="search"
                    value={search}
                    placeholder="..."
                />

            </div>
        </form>
    )
}
