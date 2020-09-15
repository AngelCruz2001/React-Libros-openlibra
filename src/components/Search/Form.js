import React from 'react'
import { useForm } from '../../hooks/useForm';
import { ItemDropDown } from './ItemDropDown';

export const Form = ({ setDataFetch }) => {


    console.log(3)
    const [{ search }, handleInputChange, reset] = useForm({ search: "" });
    const handleSubmit = (e) => {
        e.preventDefault()
        setDataFetch((s) => ({ ...s, param: search }));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">

                    <ItemDropDown setDataFetch={setDataFetch} />
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
        </>
    )
}
